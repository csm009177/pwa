const fs = require("fs");

const htmlDocument = {
  htmlTag: { start: "<!DOCTYPE html>", end: "</html>" },
  head: { start: "<head>", end: "</head>" },
  body: { start: "<body>", end: "</body>" },
};

function htmlMaker(받은문서) {
  let result = "";
  result += `
  ${받은문서.htmlTag.start}
  ${받은문서.head.start}
  ${받은문서.head.end}
  ${받은문서.body.start}
  ${받은문서.body.end}
  ${받은문서.htmlTag.end}
`;
  fs.writeFileSync(__dirname + '/' + "index.html", result);
  return result;
}

htmlMaker(htmlDocument);

function htmlreader(){
    const data = fs.readFileSync("index.html", "utf-8");
    console.log(data);
    console.log('http://127.0.0.1:5500/index.html');

}

htmlreader();
