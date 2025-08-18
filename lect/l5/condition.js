const readline = require("readline");
const fs = require("fs");
const { hasSubscribers } = require("diagnostics_channel");

const inAndOut = {
  input: process.stdin,
  output: process.stdout,
};
const rl = readline.createInterface(inAndOut);

const humanList = [
  {
    name: "jj",
    age: 22,
  },
  {
    name: "kj",
    age: 23,
  },
  {
    name: "kk",
    age: 23,
  },
  {
    name: "jk",
    age: 23,
  },
];

rl.question("니 이름뭐야? : ", (name) => {
  for(let i=0; i<humanList.length; i++){
    if(name === humanList[i].name){
        console.log('welcom', name);
        break;
    }else{
        console.log('who da ass?');
        break;
    }
  }
  rl.close();
});
