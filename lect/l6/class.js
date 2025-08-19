class Test {
  name = "공욱재";
}
//-----------------------------
const example = {
  name: "공욱재"
}
// console.log(Test);
const test = new Test
// console.log(test);
// console.log(example);

// 정식 클래스문법
class Test2 {
  constructor() {
    this.test = "공욱재";
  }
}

// const test2 = new Test2();
// console.log(test2);

// 주요사례

class MYSTUDENT {
  constructor(studentName, age) {
    this.studentName = studentName;
    this.age = age;
  }
};

const studentOne = new MYSTUDENT("공욱재", 20);
const studentTwo = new MYSTUDENT("김철수", 22);
console.log(studentOne);
console.log(studentTwo);