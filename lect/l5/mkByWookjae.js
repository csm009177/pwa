//* 구성 부분
// ? 나 입력받는것을 하고 싶어.
// ? 내 이름과 나이정도?
const readline = require("readline");
const fs = require("fs");

const inAndOut = {
  input: process.stdin,
  output: process.stdout,
};
const rl = readline.createInterface(inAndOut);

// todo : -------------------------------------------
//* model(만드는 부분)
// ? 파일만들까? txt 만들까?

rl.question("니 이름뭐야? : ", (name) => {
  console.log(`안녕 ${name} !`);
  fs.writeFileSync(
    `${name}.html`,
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>안녕 ${name} !</h1>
</body>
</html>`
  );
  console.log(`${name}.html 파일이 생성 또는 업데이트되었습니다.`);
  rl.close();
});

// todo : -------------------------------------------
//* 조정, 조종 controller
// ? txt 파일이 여기 나오면 좋겠다.
