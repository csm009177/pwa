const students = [
  {
    name: "이름1",
    age: "30003",
  },
  {
    name: "이름2",
    age: "111011110",
  },
];

function 배열안에객체에접근() {
  for (let i = 0; i < students.length; i++) {
    // console.log(students[i]);
    for(let key in students[i]){
        console.log(students[i][key])
    }
  }
}
배열안에객체에접근();
