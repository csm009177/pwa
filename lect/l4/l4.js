
let students = [
  { name: "김해진", age: 27 },
  { name: "김혜민", age: 22 },
  { name: "박소연", age: 25 },
  { name: "서성우", age: 21 },
  { name: "손정민", age: 29 },
  { name: "최예진", age: 23 },
  { name: "최현준", age: 26 },
  { name: "한재희", age: 24 },
  { name: "최성민", age: 30 },
  { name: "김현",   age: 20 }
];
const test = { name: "김해진", age: 27 };

for(const key in test) {
  console.log(key);
}

// console.log(test.name);
// console.log(test.age);
// console.log(test["age"]);
// console.log(test["name"]);