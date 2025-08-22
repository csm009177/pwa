const express = require("express");
const serv = express();
const fs = require("fs");
const port = 8080;

serv.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

serv.post("/join", (req, res) => {
  let 받은데이터 = "";

  req.on("data", (chunk) => {
    받은데이터 += chunk.toString();
  });
  req.on("end", () => {
    const 폼데이터 = {};
    const 키값쌍들 = 받은데이터.split("&");
    for (let 인덱스 in 키값쌍들) {
      const 한쌍 = 키값쌍들[인덱스];
      const [키, 값] = 한쌍.split("=");
      폼데이터[decodeURIComponent(키)] = decodeURIComponent(값 || "");
    }
    console.log("받은 폼데이터:", 폼데이터);
    fs.writeFileSync("test.json", JSON.stringify(폼데이터, null, 2), "utf-8");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");``
    res.end("회원가입 완료!");
  });
});

serv.listen(port, () => {
  console.log(`가동되었습니다 클릭하세요 => http://localhost:${port}`);
});
