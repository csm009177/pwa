const express = require('express');
const app = express();
const port = 8080;

// 미들웨어 설정
app.use(express.json());
app.use(express.static('public')); // 정적 파일 서빙

// 라우트 설정
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/api/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] });
});

app.post('/api/users', (req, res) => {
  console.log('새 사용자:', req.body);
  res.json({ message: '사용자가 생성되었습니다', user: req.body });
});

app.listen(port, () => {
  console.log(`Express 서버가 http://localhost:${port}에서 실행 중입니다`);
});
