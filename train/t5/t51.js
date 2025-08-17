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
// 리스트중에타입얼음인요소의모든위성을출력하기2();

const 밖에서재료가지고오는화물차 = {
  중요부품: ["샤시", "엔진", "변속기", "브레이크"],
  소모품: ["볼트", "와셔", "너트"],
  내장재: ["시트", "핸들"],
};

function 공장(밖에서재료가지고오는화물차) {
  // 재료 순서 이름 (단순 순서용)
  const 번호순으로재료를놓는창고 = [
    ["1번 고객님용 재료세트", ["샤시", "엔진", "변속기", "브레이크"]],
    ["2번 고객님용 재료세트", ["샤시", "엔진", "변속기", "브레이크"]],
  ];

  // 종류별 재료 창고 (이미 약간의 재고 있음)
  const 재료를종류별로놓는창고 = {
    소모품: ["볼트", "와셔", "너트"],
    내장재: ["시트", "핸들"],
  };

  // 밖에서 오는 재료를 창고에 넣을 자동 컨베이어 벨트가 필요하겠죠?
  for (let 종류 in 밖에서재료가지고오는화물차) {
    // 종류가 중요부품이면?
    if (종류 === "중요부품") {
      // 창고에 이미준비된 재료 세트에 한 세트 밀어넣기
      번호순으로재료를놓는창고.push([
        `${번호순으로재료를놓는창고.length + 1}번 고객님용 재료세트`,
        밖에서재료가지고오는화물차[종류],
      ]);
    } else {
      // 소모품이나 내장재를 종류별로 넣기
      if (종류 === "소모품") {
        for (let i = 0; i < 밖에서재료가지고오는화물차[종류].length; i++) {
          재료를종류별로놓는창고[종류][재료를종류별로놓는창고[종류].length] =
            밖에서재료가지고오는화물차[종류][i];
        }
      } else if (종류 === "내장재") {
        for (let i = 0; i < 밖에서재료가지고오는화물차[종류].length; i++) {
          재료를종류별로놓는창고[종류][재료를종류별로놓는창고[종류].length] =
            밖에서재료가지고오는화물차[종류][i];
        }
      }
    }
  }

  // 중요부품을 조립대로 가져오는 컨베이어 벨트
  function 부품들을모으는기계() {
    const 재료세트모음 = [];
    for (let i = 0; i < 번호순으로재료를놓는창고.length; i++) {
      const 조립대 = [];

      // 중요부품 개별 추가 (배열로 감싸지 않음)
      for (let j = 0; j < 번호순으로재료를놓는창고[i][1].length; j++) {
        조립대[조립대.length] = 번호순으로재료를놓는창고[i][1][j];
      }

      // 소모품/내장재 개별 추가
      for (let 종류 in 재료를종류별로놓는창고) {
        for (let k = 0; k < 재료를종류별로놓는창고[종류].length; k++) {
          조립대[조립대.length] = 재료를종류별로놓는창고[종류][k];
        }
      }

      재료세트모음[재료세트모음.length] = 조립대;
    }

    return 재료세트모음;
  }
  // 부품모으는기계 스위치켜기
  부품들을모으는기계();

  function 조립하는기계() {
    const 차고 = {};
    const 조립대 = 부품들을모으는기계();

    for (let i = 0; i < 조립대.length; i++) {
      // 고객 번호 가져오기
      const 고객번호 = 번호순으로재료를놓는창고[i][0];

      // 부품들을 문자열로 합치기
      let 완성된자동차 = "";
      for (let j = 0; j < 조립대[i].length; j++) {
        if (j === 0) {
          완성된자동차 = 조립대[i][j];
        } else {
          완성된자동차 = 완성된자동차 + " + " + 조립대[i][j];
        }
      }

      // 차고에 완성된 자동차 넣기
      차고[고객번호.replace("재료세트", "자동차")] = 완성된자동차;
    }

    return 차고;
  }

  // 조립하는기계 스위치켜기
  return 조립하는기계();
}

console.log(공장(밖에서재료가지고오는화물차));
