const http = require("http");
const fs = require("fs");
const port = 8080;

const serv = http.createServer((req, res) => {
  const fileName = __filename;
  if (req.url === "/") {
    fs.readFile("./serv/src/index.html", (err, data) => {
      res.end(data);
    });
  }
  if(req.url === '/join'){
    fs.writeFileSync('test.json', 'join', 'utf-8');
    res.end( console.log('json 파일 생성완료'));
  }
});

serv.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
