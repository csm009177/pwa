//* 구성 부분
// ? 나 입력받는것을 하고 싶어.
// ? 내 이름과 나이정도?
const readline = require('readline');

const inAndOut = {
  input: process.stdin,
  output: process.stdout
}
const rl = readline.createInterface(inAndOut);

// todo : -------------------------------------------
//* model(만드는 부분)
// ? 파일만들까? txt 만들까?

rl.question("니 이름뭐야? : ", (name) => {
  console.log(`안녕 ${name} !`);
  rl.close();
})

// todo : -------------------------------------------
//* 조정, 조종 controller
// ? txt 파일이 여기 나오면 좋겠다.