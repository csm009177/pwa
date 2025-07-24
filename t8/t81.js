const lunchData = {
    menus: ["김치찌개", "짜장면", "초밥", "파스타", "비빔밥", "탕수육", "라멘", "햄버거"],
    prices: [8000, 6000, 15000, 12000, 7000, 18000, 9000, 10000],
    types: ["한식", "중식", "일식", "양식", "한식", "중식", "일식", "양식"],
    spiciness: [3, 1, 0, 0, 2, 1, 2, 0],
    calories: [350, 600, 450, 520, 380, 750, 480, 680],
    cookTime: [15, 10, 20, 18, 12, 25, 12, 8],
    popularity: [85, 90, 75, 80, 88, 70, 82, 95]
};

class Menu {
    name = "김치찌개";
    price = 8000;
    type = "한식";
    spicy = 3;
}

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
    for(let i = 0; i < lunchData.prices.length; i++) {
        sum = sum + lunchData.prices[i];
    }
    const average = sum / lunchData.prices.length;
    return average;
}

function exampleTwo() {
    const avgPrice = exampleOne();
    console.log(`평균 가격: ${avgPrice}원`);
}

function exampleThree() {
    console.log("예산 내 첫 번째 메뉴 찾기:");
    const budget = 9000;
    for(let i = 0; i < lunchData.menus.length; i++) {
        if(lunchData.prices[i] <= budget) {
            console.log(`찾았습니다: ${lunchData.menus[i]} (${lunchData.prices[i]}원)`);
            break;
        }
    }
}

function exampleFour() {
    console.log("가장 비싼 메뉴 찾기:");
    let maxPrice = 0;
    let expensiveMenu = "";

    for(let i = 0; i < lunchData.menus.length; i++) {
        if(lunchData.prices[i] > maxPrice) {
            maxPrice = lunchData.prices[i];
            expensiveMenu = lunchData.menus[i];
        }
    }

    return `${expensiveMenu} (${maxPrice}원)`;
}

function exampleFive() {
    const result = exampleFour();
    console.log(`가장 비싼 메뉴: ${result}`);
}

function exampleSix() {
    console.log("한식 메뉴 개수 세기:");
    let count = 0;
    for(let i = 0; i < lunchData.types.length; i++) {
        if(lunchData.types[i] === "한식") {
            count = count + 1;
        }
    }
    return count;
}

function exampleSeven() {
    const koreanCount = exampleSix();
    console.log(`한식 메뉴: ${koreanCount}개`);
}

function exampleEight() {
    console.log("맵지 않은 첫 번째 메뉴:");
    for(let i = 0; i < lunchData.menus.length; i++) {
        if(lunchData.spiciness[i] === 0) {
            console.log(`${lunchData.menus[i]} (매운맛 ${lunchData.spiciness[i]}단계)`);
            break;
        }
    }
}

function exampleNine() {
    console.log("가장 인기 있는 메뉴:");
    let maxPopularity = 0;
    let popularMenu = "";

    for(let i = 0; i < lunchData.menus.length; i++) {
        if(lunchData.popularity[i] > maxPopularity) {
            maxPopularity = lunchData.popularity[i];
            popularMenu = lunchData.menus[i];
        }
    }

    return popularMenu;
}

function exampleTen() {
    const bestMenu = exampleNine();
    console.log(`인기 1위: ${bestMenu}`);
}

function exampleEleven() {
    console.log("15분 이내 조리 가능한 첫 메뉴:");
    for(let i = 0; i < lunchData.menus.length; i++) {
        if(lunchData.cookTime[i] <= 15) {
            console.log(`${lunchData.menus[i]} (${lunchData.cookTime[i]}분)`);
            break;
        }
    }
}

function exampleTwelve() {
    console.log("총 칼로리 계산:");
    let totalCalories = 0;
    for(let i = 0; i < lunchData.calories.length; i++) {
        totalCalories = totalCalories + lunchData.calories[i];
    }
    return totalCalories;
}

function exampleThirteen() {
    const total = exampleTwelve();
    console.log(`전체 메뉴 총 칼로리: ${total}kcal`);
}

function exampleFourteen() {
    console.log("1만원 이하 메뉴 개수:");
    let count = 0;
    for(let i = 0; i < lunchData.prices.length; i++) {
        if(lunchData.prices[i] <= 10000) {
            count = count + 1;
        }
    }
    return count;
}

function exampleFifteen() {
    const affordableCount = exampleFourteen();
    console.log(`1만원 이하 메뉴: ${affordableCount}개`);
}

function exampleSixteen() {
    console.log("중식 중 첫 번째 메뉴:");
    for(let i = 0; i < lunchData.types.length; i++) {
        if(lunchData.types[i] === "중식") {
            console.log(`${lunchData.menus[i]} (${lunchData.types[i]})`);
            break;
        }
    }
}

function exampleSeventeen() {
    console.log("가장 낮은 칼로리 메뉴:");
    let minCalories = 1000;
    let healthyMenu = "";

    for(let i = 0; i < lunchData.menus.length; i++) {
        if(lunchData.calories[i] < minCalories) {
            minCalories = lunchData.calories[i];
            healthyMenu = lunchData.menus[i];
        }
    }

    return `${healthyMenu} (${minCalories}kcal)`;
}

function exampleEighteen() {
    const lightMenu = exampleSeventeen();
    console.log(`저칼로리 메뉴: ${lightMenu}`);
}

function exampleNineteen() {
    console.log("매운맛 2단계 이상 첫 메뉴:");
    for(let i = 0; i < lunchData.menus.length; i++) {
        if(lunchData.spiciness[i] >= 2) {
            console.log(`${lunchData.menus[i]} (매운맛 ${lunchData.spiciness[i]}단계)`);
            break;
        }
    }
}

function exampleTwenty() {
    console.log("가장 빠른 조리시간:");
    let minTime = 100;
    for(let i = 0; i < lunchData.cookTime.length; i++) {
        if(lunchData.cookTime[i] < minTime) {
            minTime = lunchData.cookTime[i];
        }
    }
    return minTime;
}

function exampleTwentyOne() {
    const fastTime = exampleTwenty();
    console.log(`최단 조리시간: ${fastTime}분`);
}

function exampleTwentyTwo() {
    console.log("양식 메뉴 첫 번째:");
    for(let i = 0; i < lunchData.types.length; i++) {
        if(lunchData.types[i] === "양식") {
            console.log(`${lunchData.menus[i]} - ${lunchData.prices[i]}원`);
            break;
        }
    }
}

function exampleTwentyThree() {
    console.log("평균 조리시간 계산:");
    let sum = 0;
    for(let i = 0; i < lunchData.cookTime.length; i++) {
        sum = sum + lunchData.cookTime[i];
    }
    return sum / lunchData.cookTime.length;
}

function exampleTwentyFour() {
    const avgTime = exampleTwentyThree();
    console.log(`평균 조리시간: ${avgTime}분`);
}

function exampleTwentyFive() {
    console.log("인기도 80점 이상 첫 메뉴:");
    for(let i = 0; i < lunchData.popularity.length; i++) {
        if(lunchData.popularity[i] >= 80) {
            console.log(`${lunchData.menus[i]} (인기도 ${lunchData.popularity[i]}점)`);
            break;
        }
    }
}

function exampleTwentySix() {
    console.log("500kcal 이상 메뉴 개수:");
    let count = 0;
    for(let i = 0; i < lunchData.calories.length; i++) {
        if(lunchData.calories[i] >= 500) {
            count = count + 1;
        }
    }
    return count;
}

function exampleTwentySeven() {
    const highCalCount = exampleTwentySix();
    console.log(`고칼로리 메뉴: ${highCalCount}개`);
}

function exampleTwentyEight() {
    console.log("일식 첫 번째 메뉴 가격:");
    for(let i = 0; i < lunchData.types.length; i++) {
        if(lunchData.types[i] === "일식") {
            return lunchData.prices[i];
        }
    }
}

function exampleTwentyNine() {
    const japanesePrice = exampleTwentyEight();
    console.log(`일식 메뉴 가격: ${japanesePrice}원`);
}

function exampleThirty() {
    console.log("20분 이상 조리시간 첫 메뉴:");
    for(let i = 0; i < lunchData.cookTime.length; i++) {
        if(lunchData.cookTime[i] >= 20) {
            console.log(`${lunchData.menus[i]} (${lunchData.cookTime[i]}분 소요)`);
            break;
        }
    }
}
