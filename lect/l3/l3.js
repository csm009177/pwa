let studentNames = [
  "김해진",
  "김혜민",
  "박소연",
  "서성우",
  "손정민",
  "최예진",
  "최현준",
  "한재희",
  "최성민",
  "김현",
];
let example = {
  name: "공욱재",
  nameOne: "김해진",
  nameTwo: "김혜민",
  nameThree: "박소연",
};

let another = {
  0: "공욱재",
};
// console.log(studentNames[]);
// console.dir(studentNames);
console.log(studentNames.length);
// * console.log(studentNames[마지막])
let order = studentNames.length;
console.log(studentNames[order - 1]);

function controler(startNum, endNum) {
    for(let i=startNum; i<endNum; i++){
        console.log(studentNames[i])
    }
}
controler(2,3)
