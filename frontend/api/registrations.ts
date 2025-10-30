import { VercelRequest, VercelResponse } from '@vercel/node';

let registrations = [
  { name: 'Fulano', cpf: '00011122233', casinoId: 'A1' }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    res.status(200).json(registrations);
  } else if (req.method === 'POST') {
    let reg = req.body;
    if (!reg || !reg.name || !reg.cpf || !reg.casinoId) {
      return res.status(400).json({ message: 'Missing fields' });
    }
    registrations.push(reg);
    res.status(201).json(reg);
  } else {
    res.status(405).end();
  }
}
