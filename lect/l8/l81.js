const http = require("http");
const fs = require("fs");
const port = 5050;

const htmlDocument = {
  htmlTag: { start: "<!DOCTYPE html><html lang='ko'>", end: "</html>" },
  head: { start: "<head>", end: "</head>" },
  meta: { start: "<meta charset='UTF-8'>", end: "" },
  body: { start: "<body>", end: "</body>" },
  div: { start: "<div>", end: "</div>" },
  p: { start: "<p>", end: "</p>" },
  span: { start: "<span>", end: "</span>" },
};

function htmlMaker(받은문서) {
  let result = "";
  result += `
  ${받은문서.htmlTag.start}
  ${받은문서.head.start}
  ${받은문서.head.end}
  ${받은문서.meta.start}
  ${받은문서.meta.end}
  ${'안녕하세요'}

  ${받은문서.body.start}
  ${받은문서.body.end}
  ${받은문서.htmlTag.end}
`;
  fs.writeFileSync(__dirname + "/" + "index.html", result);
  return result;
}
htmlMaker(htmlDocument);

function htmlReader() {
  const data = fs.readFileSync(__dirname + "/" + "index.html", "utf-8");
  return data;
}

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlReader());
  })
  .listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
  });
