const lunchData = {
  menus: [
    "김치찌개",
    "짜장면",
    "초밥",
    "파스타",
    "비빔밥",
    "탕수육",
    "라멘",
    "햄버거",
  ],
  prices: [8000, 6000, 15000, 12000, 7000, 18000, 9000, 10000],
  types: ["한식", "중식", "일식", "양식", "한식", "중식", "일식", "양식"],
  spiciness: [3, 1, 0, 0, 2, 1, 2, 0],
  calories: [350, 600, 450, 520, 380, 750, 480, 680],
  cookTime: [15, 10, 20, 18, 12, 25, 12, 8],
  popularity: [85, 90, 75, 80, 88, 70, 82, 95],
};

// Menu.js에서 Menu 클래스를 가져옵니다
import { Menu } from "./class/menu.js";
// 인스턴스를 생성합니다
const menu = new Menu();
// Menu 클래스를 출력해봅니다
// console.log(menu);

import { Oesick } from "./class/Oesick.js";
const oesick = new Oesick();
// console.log(oesick);

class Restaurant {
  name = "맛있는 식당";
  location = "강남구";
  openTime = 11;
  closeTime = 21;
  rating = 4.5;
}

class Customer {
  name = "김학생";
  budget = 10000;
  preference = "한식";
  spicyLevel = 2;
}

function exampleOne() {
  console.log("평균 가격 계산:");
  let sum = 0;
  for (let i = 0; i < lunchData.prices.length; i++) {
    sum = sum + lunchData.prices[i];
  }
  const average = sum / lunchData.prices.length;
  return average;
}

function 모든메뉴의칼로리를더해보기() {
  // console.log("모든 메뉴의 칼로리 합계:");
  let totalCalories = 0;
  for (let i = 0; i < lunchData.calories.length; i++) {
    totalCalories = totalCalories + lunchData.calories[i];
  }
  return totalCalories;
}
// console.log(모든메뉴의칼로리를더해보기())

function exampleTwo() {
  const avgPrice = exampleOne();
  console.log(`평균 가격: ${avgPrice}원`);
}

function 모든메뉴의칼로리평균구하기() {
  const 합계 = 모든메뉴의칼로리를더해보기();
  const 평균 = 합계 / lunchData.calories.length;
  console.log(평균);
}
// 모든메뉴의칼로리평균구하기();

function exampleThree() {
  console.log("예산 내 첫 번째 메뉴 찾기:");
  const budget = 9000;
  for (let i = 0; i < lunchData.menus.length; i++) {
    if (lunchData.prices[i] <= budget) {
      console.log(
        `찾았습니다: ${lunchData.menus[i]} (${lunchData.prices[i]}원)`
      );
      break;
    }
  }
}

function 만원으로먹을수있는메뉴찾기() {
  const 만원 = 10000;
  console.log("만원으로 먹을수 있는것은 : ");
  for (let i = 0; i < lunchData.prices.length; i++) {
    if (만원 >= lunchData.prices[i]) {
      console.log(lunchData.menus[i]);
    }
  }
}
// 만원으로먹을수있는메뉴찾기()

function exampleFour() {
  console.log("가장 비싼 메뉴 찾기:");
  let maxPrice = 0;
  let expensiveMenu = "";

  for (let i = 0; i < lunchData.menus.length; i++) {
    if (lunchData.prices[i] > maxPrice) {
      maxPrice = lunchData.prices[i];
      expensiveMenu = lunchData.menus[i];
    }
  }

  return `${expensiveMenu} (${maxPrice}원)`;
}
// console.log(exampleFour())

function 만원이하제일싼메뉴() {
  let 제일싼메뉴 = "";
  let 제일싼가격 = 10000; // 만원을 초기값으로 설정

  for (let i = 0; i < lunchData.prices.length; i++) {
    // 현재 가격이 제일싼가격보다 싸면 업데이트
    if (lunchData.prices[i] < 제일싼가격) {
      제일싼가격 = lunchData.prices[i];
      제일싼메뉴 = lunchData.menus[i];
    }
  }
  return { 제일싼메뉴, 제일싼가격 };
}
// 만원이하제일싼메뉴();

function exampleFive() {
  const result = exampleFour();
  console.log(`가장 비싼 메뉴: ${result}`);
}

function 제일싼메뉴() {
  const result = 만원이하제일싼메뉴();
  console.log(result);
}
// 제일싼메뉴()

function 메뉴개수세기() {
  let counter = 0;
  let gounter = 0;
  let kounter = 0;
  for (let i = 0; i < lunchData.menus.length; i++) {
    counter = counter + 1;
    gounter += 1;
    kounter++;
  }
  return { counter, gounter, kounter };
}
// console.log(메뉴개수세기());

// function 동양요리만출력하기(){
//   let getherFood = [];
//   for(let i=0; i<lunchData.menus.length; i++){
//     if(lunchData.types === '한식' || lunchData.types === '일식' || lunchData.types === '중식'){
//       getherFood = lunchData.menus[i];
//     }
//   }
//   return getherFood;
// }
// console.log(동양요리만출력하기())

function 동양요리만출력하기() {
  let getherFood = [];
  console.log("동양 요리 목록:"); // 출력임을 명확히 알리는 메시지 추가
  for (let i = 0; i < lunchData.menus.length; i++) {
    // 각 메뉴의 타입을 확인하여 동양 요리(한식, 일식, 중식)인지 검사합니다.
    if (
      lunchData.types[i] === "한식" ||
      lunchData.types[i] === "일식" ||
      lunchData.types[i] === "중식"
    ) {
      // 동양 요리인 경우, 해당 메뉴 이름을 콘솔에 바로 출력합니다.
      getherFood.push(lunchData.menus[i]);
    }
  }
  return getherFood;
}
// console.log(동양요리만출력하기());

function 요리별맵기출력하기() {
  for (let i = 0; i < lunchData.menus.length; i++) {
    console.log(lunchData.menus[i] + "의 맵기 : " + lunchData.spiciness[i]);
  }
}
// 요리별맵기출력하기();

function 요리타입별맵기평균출력하기() {
  let 한식맵기합 = 0;
  let 한식개수 = 0;
  let 양식맵기합 = 0;
  let 양식개수 = 0;
  let 일식맵기합 = 0;
  let 일식개수 = 0;
  let 중식맵기합 = 0;
  let 중식개수 = 0;

  for (let i = 0; i < lunchData.menus.length; i++) {
    if (lunchData.types[i] === "한식") {
      한식맵기합 += lunchData.spiciness[i];
      한식개수++;
    } else if (lunchData.types[i] === "양식") { // else if를 사용하여 중복 계산 방지
      양식맵기합 += lunchData.spiciness[i];
      양식개수++;
    } else if (lunchData.types[i] === "일식") { // else if를 사용하여 중복 계산 방지
      일식맵기합 += lunchData.spiciness[i];
      일식개수++;
    } else if (lunchData.types[i] === "중식") { // else if를 사용하여 중복 계산 방지
      중식맵기합 += lunchData.spiciness[i];
      중식개수++;
    }
  }

  // 각 타입별 평균 계산 (0으로 나누기 방지)
  const avg한식 = 한식개수 > 0 ? 한식맵기합 / 한식개수 : 0;
  const avg양식 = 양식개수 > 0 ? 양식맵기합 / 양식개수 : 0;
  const avg일식 = 일식개수 > 0 ? 일식맵기합 / 일식개수 : 0;
  const avg중식 = 중식개수 > 0 ? 중식맵기합 / 중식개수 : 0;

  // 객체 형태로 모든 평균값 반환
  return {
    한식평균맵기: avg한식,
    양식평균맵기: avg양식,
    일식평균맵기: avg일식,
    중식평균맵기: avg중식,
  };
}

// console.log(요리타입별맵기평균출력하기());

function 요리타입별맵기평균출력하기2() {
  const 요리별정보모음 = {
    한식 : {맵기합:0, 개수:0},
    양식 : {맵기합:0, 개수:0},
    일식 : {맵기합:0, 개수:0},
    중식 : {맵기합:0, 개수:0}
  };

  for(let i=0; i<lunchData.menus.length; i++){
    if(lunchData.types[i] === '한식'){
      요리별정보모음.한식.맵기합 += lunchData.spiciness[i];
      요리별정보모음.한식.개수++;
    }
    else if(lunchData.types[i] === '양식'){
      요리별정보모음.양식.맵기합 += lunchData.spiciness[i];
      요리별정보모음.양식.개수++;
    }
    else if(lunchData.types[i] === '일식'){
      요리별정보모음.일식.맵기합 += lunchData.spiciness[i];
      요리별정보모음.일식.개수++;
    }
    else if(lunchData.types[i] === '중식'){
      요리별정보모음.중식.맵기합 += lunchData.spiciness[i];
      요리별정보모음.중식.개수++;
    }    
  }
  const 한식맵기평균 = 요리별정보모음.한식.맵기합/요리별정보모음.한식.개수;
  const 양식맵기평균 = 요리별정보모음.양식.맵기합/요리별정보모음.양식.개수;
  const 일식맵기평균 = 요리별정보모음.일식.맵기합/요리별정보모음.일식.개수;
  const 중식맵기평균 = 요리별정보모음.중식.맵기합/요리별정보모음.중식.개수;
  return {한식맵기평균, 양식맵기평균, 일식맵기평균, 중식맵기평균};
}
console.log(요리타입별맵기평균출력하기2());