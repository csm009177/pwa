const daejeonLine1 = {
  stations: [
    "판암", "신흥", "대동", "대전역", "중앙로", "중구청", "서대전네거리", "오룡",
    "용문", "탄방", "시청", "정부청사", "갈마", "월평", "갑천"
  ],
  fare: 1400,
  openYear: 2006,
};

// 역 순회하며 순번과 함께 출력
function exampleOne() {
  function visitStations(stations, callback) {
    for (let i = 0; i < stations.length; i++) {
      callback(stations[i], i);
    }
  }

  visitStations(daejeonLine1.stations, function (station, index) {
    console.log(index + 1 + "번째 역: " + station);
  });
}

// 2글자 이하 역명을 찾아서 출력
function exampleTwo() {
  function findStations(stations, callback) {
    let result = [];
    let resultIndex = 0;

    for (let i = 0; i < stations.length; i++) {
      if (callback(stations[i])) {
        result[resultIndex] = stations[i];
        resultIndex++;
      }
    }
    return result;
  }

  const shortNames = findStations(daejeonLine1.stations, function (station) {
    return station.length <= 2;
  });

  console.log("2글자 이하 역명:", shortNames);
}

// 전체 거리 계산 (역 개수 기반)
function exampleThree() {
  let totalDistance = 0;

  function calculateDistance(stationCount) {
    let averageDistance = 1.5;
    totalDistance = (stationCount - 1) * averageDistance;
    return totalDistance;
  }

  console.log("총 거리:", calculateDistance(daejeonLine1.stations.length) + "km");
  console.log("전역변수 totalDistance:", totalDistance);
}

// 승객 유형별 요금 계산 (성인/청소년/어린이)
function exampleFour() {
  function fareCalculator() {
    let baseFare = daejeonLine1.fare;

    function childFare() {
      return baseFare * 0.5;
    }

    function youthFare() {
      return baseFare * 0.8;
    }

    return {
      child: childFare(),
      youth: youthFare(),
      adult: baseFare,
    };
  }

  const fares = fareCalculator();
  console.log("요금 체계:", fares);
}

// 인원수에 따른 요금 계산 + 할인 적용
function exampleFive() {
  function calculateFare(base, passengers, callback) {
    return callback(base, passengers);
  }

  const multiply = calculateFare(daejeonLine1.fare, 5, function (fare, count) {
    return fare * count;
  });

  const discount = calculateFare(multiply, 0.1, function (total, rate) {
    return total - total * rate;
  });

  console.log("5명 요금:", multiply + "원");
  console.log("10% 할인 후:", discount + "원");
}

// 특정 역 도착 여부 확인 함수 생성 및 테스트
function exampleSix() {
  function createStationChecker(targetStation) {
    return function (currentStation) {
      if (currentStation === targetStation) {
        return targetStation + "역에 도착했습니다!";
      } else {
        return currentStation + "역 통과중...";
      }
    };
  }

  const checkForDaejeon = createStationChecker("대전역");

  console.log(checkForDaejeon("판암"));
  console.log(checkForDaejeon("대전역"));
  console.log(checkForDaejeon("중앙로"));
}

// 역 정보 객체를 받아 환승 가능 여부 표시
function exampleSeven() {
  const stationInfo = {
    name: "시청",
    index: 10,
    transfer: false,
  };

  function processStation(station, callback) {
    let message = station.name + "역 (";
    message += station.index + 1 + "번째)";

    return callback(message, station.transfer);
  }

  const result = processStation(stationInfo, function (msg, hasTransfer) {
    if (hasTransfer) {
      return msg + " - 환승가능";
    } else {
      return msg + " - 환승불가";
    }
  });

  console.log(result);
}

// 노선 진행률 계산 (현재 위치 기준)
function exampleEight() {
  function calculateProgress(current, total, callback) {
    let percentage = (current / total) * 100;
    return callback(Math.round(percentage));
  }

  const currentStation = 7;

  const progress = calculateProgress(
    currentStation,
    daejeonLine1.stations.length,
    function (percent) {
      return "전체 노선의 " + percent + "% 진행됨";
    }
  );

  console.log(progress);
}

// 역 리스트를 객체 배열로 변환 (역 이름, 구역 포함)
function exampleNine() {
  function transformStations(stations, callback) {
    let newArray = [];

    for (let i = 0; i < stations.length; i++) {
      newArray[i] = callback(stations[i], i);
    }

    return newArray;
  }

  const stationObjects = transformStations(
    daejeonLine1.stations.slice(0, 5),
    function (name, index) {
      return {
        id: index + 1,
        name: name + "역",
        zone: index < 7 ? "동구" : "서구",
      };
    }
  );

  console.log("역 객체 배열:", stationObjects);
}

// 특정 승차 정보 분석 (혼잡도 및 출근 시간 여부)
function exampleTen() {
  const rideData = {
    station: "정부청사",
    time: "08:30",
    passengers: 250,
  };

  function analyzeRide(data, timeCallback, crowdCallback) {
    let timeResult = timeCallback(data.time);
    let crowdResult = crowdCallback(data.passengers);

    return {
      station: data.station,
      rushHour: timeResult,
      crowdLevel: crowdResult,
    };
  }

  const analysis = analyzeRide(
    rideData,
    function (time) {
      let hour = parseInt(time.split(":")[0]);
      return (hour >= 7 && hour <= 9) || (hour >= 18 && hour <= 20);
    },
    function (count) {
      if (count > 200) return "혼잡";
      if (count > 100) return "보통";
      return "여유";
    }
  );

  console.log("승차 분석:", analysis);
}

// 예제 함수들 순차 실행
const examples = [
  exampleOne,
  exampleTwo,
  exampleThree,
  exampleFour,
  exampleFive,
  exampleSix,
  exampleSeven,
  exampleEight,
  exampleNine,
  exampleTen,
];

for (let i = 0; i < examples.length; i++) {
  examples[i]();
  console.log("\n");
}
