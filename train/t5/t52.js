const solarSystem = {
  planets: ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"],
  sizes: [4879, 12104, 12756, 6792, 142984, 120536, 51118, 49528],
  distances: [58, 108, 150, 228, 778, 1432, 2867, 4515],
  moons: {
    수성: [],
    금성: [],
    지구: ["달"],
    화성: ["포보스", "데이모스"],
    목성: ["이오", "유로파", "가니메데", "칼리스토"],
    토성: ["타이탄", "엔셀라두스", "미마스", "이아페투스"],
    천왕성: ["미란다", "아리엘"],
    해왕성: ["트리톤"],
  },
  types: ["암석", "암석", "암석", "암석", "가스", "가스", "얼음", "얼음"],
  discovered: [null, null, null, null, null, null, 1781, 1846],
};

function 행성의모든이름출력() {
  for (let i = 0; i < solarSystem.planets.length; i++) {
    console.log(solarSystem.planets[i]);
  }
}
// 행성이름출력();

function 행성의모든달출력() {
  for (let key in solarSystem.moons) {
    console.log(key, " : ", solarSystem.moons[key]);
  }
}
// 행성의모든달출력();

function 목성의달개수하기() {
  console.log(solarSystem.moons["목성"].length);
}
// 목성의달개수하기();
function 모든행성의달개수하기() {
  for (let key in solarSystem.moons) {
    console.log(key, " : ", solarSystem.moons[key].length);
  }
}
// 모든행성의달개수하기()
function 모든행성의달을카운트하기() {
  for (let key in solarSystem.moons) {
    let counter = 0;
    for (let i = 0; i < solarSystem.moons[key].length; i++) {
      counter++;
    }
    console.log(key, " : ", counter);
  }
}
모든행성의달을카운트하기();
