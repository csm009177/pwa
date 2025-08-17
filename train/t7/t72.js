class J_자몽 {
  공식명칭 = "새콤한간파괴자";
  경위 = "비타민을 과다 투입하여 너의 간은 파괴할 것이다";
  계획성 = "6개월 동안 너의 간을 파괴하기만 기다렸다";
  지속성 = {
    years: 3,
    months: 4,
    days: 7,
    hours: 17,
    minutes: 57,
    seconds: 58,
  };
  조직원 = [
    "자몽",
    "자몽주스",
    "자몽청",
    "자몽차",
    "자몽껍질",
    "자몽껍질차",
    "자몽껍질청",
  ];
}
// J_자몽의 모든 정보를 알아보자
const loadAssessin = new J_자몽();
// console.log("Assessin's all info : ", loadAssessin);

// J_자몽의 계획성을 알아보자
// console.log("Assessin's plan : ", loadAssessin.계획성);

// J_자몽의 조직원을 알아보자
// console.log("Assessin's members : ", loadAssessin.조직원);

function J_자몽의모든키출력하기() {
  for (const key in loadAssessin) {
    console.log(key);
  }
}
// J_자몽의모든키출력하기()

function J_자몽의요소중에지속성의요소를모두출력하기() {
  for (let key in loadAssessin.지속성) {
    console.log(`${loadAssessin.지속성[key]} ${key}`);
    console.log("동안 너의 간을 파괴할 것이다");
  }
}
// J_자몽의요소중에지속성의요소를모두출력하기();

function J_자몽의모든조직원출력하기() {
  for (let i = 0; i < loadAssessin.조직원.length; i++) {
    console.log("조직원 : " + loadAssessin.조직원[i]);
  }
}
// J_자몽의모든조직원출력하기()

function j_자몽의조직원과인덱스와같은인덱스의지속성을출력하기() {
  for (let i = 0; i < loadAssessin.조직원.length; i++) {
    console.log(loadAssessin.조직원[i] +' : ');
    for(let key in loadAssessin.지속성){

    }
  }
}
j_자몽의조직원과인덱스와같은인덱스의지속성을출력하기()