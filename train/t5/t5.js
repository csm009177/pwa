const solarSystem = {
    planets: ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"],
    sizes: [4879, 12104, 12756, 6792, 142984, 120536, 51118, 49528],
    distances: [58, 108, 150, 228, 778, 1432, 2867, 4515],
    moons: {
        "수성": [],
        "금성": [],
        "지구": ["달"],
        "화성": ["포보스", "데이모스"],
        "목성": ["이오", "유로파", "가니메데", "칼리스토"],
        "토성": ["타이탄", "엔셀라두스", "미마스", "이아페투스"],
        "천왕성": ["미란다", "아리엘"],
        "해왕성": ["트리톤"]
    },
    types: ["암석", "암석", "암석", "암석", "가스", "가스", "얼음", "얼음"],
    discovered: [null, null, null, null, null, null, 1781, 1846]
};

function exampleOne() {
    console.log("기본 행성 목록:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        console.log(solarSystem.planets[i]);
    }
}


function exampleTwo() {
    console.log("행성 번호 목록:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        console.log((i + 1) + "번째: " + solarSystem.planets[i]);
    }
}

function exampleThree() {
    console.log("행성과 크기:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        console.log(solarSystem.planets[i] + " - " + solarSystem.sizes[i] + "km");
    }
}

function exampleFour() {
    console.log("내행성들:");
    for(let i = 0; i < 4; i++) {
        console.log(solarSystem.planets[i]);
    }
}

function exampleFive() {
    console.log("외행성들:");
    for(let i = 4; i < solarSystem.planets.length; i++) {
        console.log(solarSystem.planets[i]);
    }
}

function exampleSix() {
    console.log("역순 행성:");
    for(let i = solarSystem.planets.length - 1; i >= 0; i--) {
        console.log(solarSystem.planets[i]);
    }
}

function exampleSeven() {
    console.log("큰 행성들:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        if(solarSystem.sizes[i] > 50000) {
            console.log(solarSystem.planets[i] + " (" + solarSystem.sizes[i] + "km)");
        }
    }
}

function exampleEight() {
    console.log("암석 행성들:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        if(solarSystem.types[i] === "암석") {
            console.log(solarSystem.planets[i]);
        }
    }
}

function exampleNine() {
    console.log("가스 행성들:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        if(solarSystem.types[i] === "가스") {
            console.log(solarSystem.planets[i]);
        }
    }
}

function exampleTen() {
    console.log("발견된 행성들:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        if(solarSystem.discovered[i] !== null) {
            console.log(solarSystem.planets[i] + " - " + solarSystem.discovered[i] + "년");
        }
    }
}

function exampleEleven() {
    console.log("홀수 번째 행성들:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        if((i + 1) % 2 === 1) {
            console.log((i + 1) + "번째: " + solarSystem.planets[i]);
        }
    }
}

function exampleTwelve() {
    console.log("짝수 번째 행성들:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        if((i + 1) % 2 === 0) {
            console.log((i + 1) + "번째: " + solarSystem.planets[i]);
        }
    }
}

function exampleThirteen() {
    console.log("행성별 위성 개수:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        const planet = solarSystem.planets[i];
        const moonCount = solarSystem.moons[planet].length;
        console.log(planet + ": " + moonCount + "개");
    }
}

function exampleFourteen() {
    console.log("위성이 있는 행성들:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        const planet = solarSystem.planets[i];
        if(solarSystem.moons[planet].length > 0) {
            console.log(planet);
        }
    }
}

function exampleFifteen() {
    console.log("위성이 없는 행성들:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        const planet = solarSystem.planets[i];
        if(solarSystem.moons[planet].length === 0) {
            console.log(planet);
        }
    }
}

function exampleSixteen() {
    console.log("행성과 모든 위성:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        const planet = solarSystem.planets[i];
        console.log(planet + ":");
        for(let j = 0; j < solarSystem.moons[planet].length; j++) {
            console.log("  " + solarSystem.moons[planet][j]);
        }
    }
}

function exampleSeventeen() {
    console.log("지구형 행성 상세 정보:");
    for(let i = 0; i < 4; i++) {
        console.log(solarSystem.planets[i] + " - 크기: " + solarSystem.sizes[i] + "km, 거리: " + solarSystem.distances[i] + "백만km");
    }
}

function exampleEighteen() {
    console.log("목성의 위성들:");
    const jupiterMoons = solarSystem.moons["목성"];
    for(let i = 0; i < jupiterMoons.length; i++) {
        console.log((i + 1) + ". " + jupiterMoons[i]);
    }
}

function exampleNineteen() {
    console.log("위성이 2개 이상인 행성:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        const planet = solarSystem.planets[i];
        if(solarSystem.moons[planet].length >= 2) {
            console.log(planet + " (" + solarSystem.moons[planet].length + "개)");
        }
    }
}

function exampleTwenty() {
    console.log("모든 위성 이름:");
    for(let i = 0; i < solarSystem.planets.length; i++) {
        const planet = solarSystem.planets[i];
        for(let j = 0; j < solarSystem.moons[planet].length; j++) {
            console.log(solarSystem.moons[planet][j]);
        }
    }
}