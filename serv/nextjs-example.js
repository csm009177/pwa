// pages/api/hello.js (Next.js API 라우트)
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from Next.js API!' });
  } else if (req.method === 'POST') {
    const { name } = req.body;
    res.status(200).json({ message: `Hello ${name}!` });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// package.json에 추가해야 할 스크립트:
// "scripts": {
//   "dev": "next dev",
//   "build": "next build",
//   "start": "next start"
// }
