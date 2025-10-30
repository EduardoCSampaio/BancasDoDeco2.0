import { VercelRequest, VercelResponse } from '@vercel/node';

let payments = [
  { id: 1, winnerId: '00011122233', amount: 100, status: 'pending' }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    res.status(200).json(payments);
  } else if (req.method === 'POST') {
    const payment = req.body;
    if (!payment || !payment.winnerId || payment.amount == null) {
      return res.status(400).json({ message: 'Missing fields' });
    }
    payment.id = payments.length + 1;
    payment.status = payment.status || 'pending';
    payments.push(payment);
    res.status(201).json(payment);
  } else if (req.method === 'PUT') {
    const { id, status } = req.body;
    const pay = payments.find((p) => p.id == id);
    if (!pay) return res.status(404).json({ message: 'Payment not found' });
    pay.status = status;
    res.status(200).json(pay);
  } else {
    res.status(405).end();
  }
}
