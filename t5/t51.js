// 배열 연습
const solarSystem_planets = [
  {
    name: "수성",
    size: 4879,
    distance: 58,
    moons: [],
    type: "암석",
    discovered: null,
  },
  {
    name: "금성",
    size: 12104,
    distance: 108,
    moons: [],
    type: "암석",
    discovered: null,
  },
  {
    name: "지구",
    size: 12756,
    distance: 150,
    moons: ["달"],
    type: "암석",
    discovered: null,
  },
  {
    name: "화성",
    size: 6792,
    distance: 228,
    moons: ["포보스", "데이모스"],
    type: "암석",
    discovered: null,
  },
  {
    name: "목성",
    size: 142984,
    distance: 778,
    moons: ["이오", "유로파", "가니메데", "칼리스토"],
    type: "가스",
    discovered: null,
  },
  {
    name: "토성",
    size: 120536,
    distance: 1432,
    moons: ["타이탄", "엔셀라두스", "미마스", "이아페투스"],
    type: "가스",
    discovered: null,
  },
  {
    name: "천왕성",
    size: 51118,
    distance: 2867,
    moons: ["미란다", "아리엘"],
    type: "얼음",
    discovered: 1781,
  },
  {
    name: "해왕성",
    size: 49528,
    distance: 4515,
    moons: ["트리톤"],
    type: "얼음",
    discovered: 1846,
  },
];

function 리스트의모든인덱스출력하기() {
  console.log("리스트의모든인덱스출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    console.log("인덱스 : { " + i + " }");
  }
}
// 리스트의모든인덱스출력하기()

function 리스트의모든요소출력하기() {
  console.log("리스트의모든요소출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    console.log("요소 : { " + solarSystem_planets[i] + " } : ");
  }
}
// 리스트의모든요소출력하기()

function 리스트의모든요소이름출력하기() {
  console.log("리스트의모든요소출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    console.log("요소의이름 : { " + solarSystem_planets[i]["name"] + " } ");
  }
}
// 리스트의모든요소이름출력하기()

function 리스트의모든요소의모든키출력하기() {
  console.log("리스트의모든요소의모든키출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    console.log("요소의이름 : { " + solarSystem_planets[i]["name"] + " } ");
    for (let key in solarSystem_planets[i]) {
      console.log(key);
    }
  }
}
// 리스트의모든요소의모든키출력하기()

function 리스트의모든요소의사이즈출력하기() {
  console.log("리스트의모든요소의사이즈출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    console.log(
      "" +
        solarSystem_planets[i]["name"] +
        "의 사이즈 : " +
        solarSystem_planets[i]["size"]
    );
  }
}
// 리스트의모든요소의사이즈출력하기()

function 리스트의모든요소의거리출력하기() {
  console.log("리스트의모든요소의거리출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    console.log(
      "" +
        solarSystem_planets[i]["name"] +
        "의 거리 : " +
        solarSystem_planets[i]["distance"]
    );
  }
}
// 리스트의모든요소의거리출력하기()

function 리스트의모든요소의위성출력하기() {
  console.log("리스트의모든요소의위성출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    console.log(solarSystem_planets[i]["name"] + "의 위성 : ");
    console.log(solarSystem_planets[i]["moons"]);
  }
}
// 리스트의모든요소의위성출력하기()

function 리스트의타입이암석인모든요소의이름출력하기() {
  console.log("리스트의타입이암석인모든요소의이름출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    if (solarSystem_planets[i]["type"] == "암석")
      console.log(solarSystem_planets[i]["name"]);
  }
}
// 리스트의모든타입이암석인요소의이름출력하기()

function 리스트의타입이가스인모든요소의이름출력하기() {
  console.log("리스트의타입이가스인모든요소의이름출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    if (solarSystem_planets[i]["type"] == "가스") {
      console.log(solarSystem_planets[i]["name"]);
    }
  }
}
// 리스트의타입이가스인모든요소의이름출력하기()

function 리스트요소중에발견된년도가없는모든요소의이름을출력하기() {
  console.log("리스트요소중에발견된년도가없는모든요소의이름을출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    if (solarSystem_planets[i]["discovered"] == null) {
      console.log(solarSystem_planets[i]["name"]);
    }
  }
}
// 리스트요소중에발견된년도가없는모든요소의이름을출력하기()

function 리스트요소중에발견된년도가있는모든요소의이름과발견년도를출력하기() {
  console.log("리스트요소중에발견된년도가있는모든요소의이름을출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    if (solarSystem_planets[i]["discovered"] !== null) {
      console.log(
        solarSystem_planets[i]["name"] +
          " : " +
          solarSystem_planets[i]["discovered"]
      );
    }
  }
}
// 리스트요소중에발견된년도가있는모든요소의이름과발견년도를출력하기()

function 리스트의모든요소의모든값출력하기() {
  console.log("리스트의모든요소의모든값출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    console.log("요소의이름 : { " + solarSystem_planets[i]["name"] + " } ");
    for (let key in solarSystem_planets[i]) {
      console.log(solarSystem_planets[i][key]);
    }
  }
}
// 리스트의모든요소의모든값출력하기()

function 리스트의모든요소의모든키와모든값을출력하기() {
  console.log("리스트의모든요소의모든키와모든값을출력하기");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    console.log("요소의이름 : { " + solarSystem_planets[i]["name"] + " }");
    console.log("=>{ ");
    for (let key in solarSystem_planets[i]) {
      console.log(key + " : " + solarSystem_planets[i][key]);
    }
    console.log(" } ");
  }
}
// 리스트의모든요소의모든키와모든값을출력하기()

function 리스트중에타입얼음인요소의모든위성을출력하기1() {
  console.log("리스트중에타입얼음인요소의모든위성을출력하기1");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    if (solarSystem_planets[i]["type"] == "얼음") {
      console.log(solarSystem_planets[i]["name"] + "의 위성 :");
      // 통째로 출력하기~
      console.log(solarSystem_planets[i]["moons"]);
    }
  }
}
// 리스트중에타입얼음인요소의모든위성을출력하기1();

function 리스트중에타입얼음인요소의모든위성을출력하기2() {
  console.log("리스트중에타입얼음인요소의모든위성을출력하기2");
  for (let i = 0; i < solarSystem_planets.length; i++) {
    if (solarSystem_planets[i]["type"] == "얼음") {
      console.log(solarSystem_planets[i]["name"] + "의 위성 :");
      // 반복문으로 껍데기를 까고~
      for (let j = 0; j < solarSystem_planets[i]["moons"].length; j++) {
        console.log(solarSystem_planets[i]["moons"][j]);
      }
    }
  }
}
리스트중에타입얼음인요소의모든위성을출력하기2();
