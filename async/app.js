// console.dir(global);

let myTime = 1000; 

function hello() {
  console.log("Hello, World!");
}

setTimeout(hello, 1000 + myTime);
myTime = myTime + 5000;
setTimeout(hello, 2000 + myTime);