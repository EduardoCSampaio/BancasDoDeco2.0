import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { cpf, password } = req.body;
    if (cpf === '00011122233' && password === 'senha') {
      return res.status(200).json({
        token: 'mock-token',
        user: { id: '1', name: 'Fulano', cpf: '00011122233', casinoId: 'A1' }
      });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  } else {
    res.status(405).end();
  }
}
