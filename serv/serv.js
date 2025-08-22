const http = require("http");
const fs = require("fs");
const port = 8080;

const serv = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./serv/src/index.html", (err, data) => {
      res.end(data);
    });
  }
  if (req.url === "/join" && req.method === "POST") {
    let 받은데이터 = "";

    req.on("data", (chunk) => {
      받은데이터 += chunk.toString();
    });

    req.on("end", () => {
      const 폼데이터 = {};
      const 키값쌍들 = 받은데이터.split("&");

      for (let 한쌍 of 키값쌍들) {
        const [키, 값] = 한쌍.split("=");
        폼데이터[decodeURIComponent(키)] = decodeURIComponent(값 || "");
      }
      console.log("받은 폼데이터:", 폼데이터);

      const 폼데이터에있는ID = 폼데이터["id"];
      console.log(폼데이터에있는ID);

      if (fs.existsSync(폼데이터에있는ID + ".json")) {
        console.log("같은 id의 파일이 존재합니다");
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("이미 존재하는 ID입니다.");
        return;
      } else {
        fs.writeFileSync( 폼데이터에있는ID + ".json", JSON.stringify(폼데이터, null, 2), "utf-8" );
        console.log("json 파일 생성완료");
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("회원가입 완료!");
      }
    });
  }
});

serv.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
