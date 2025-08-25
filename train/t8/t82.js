const lunchData = {
    menus: ["김치찌개", "짜장면", "초밥", "파스타", "비빔밥", "탕수육", "라멘", "햄버거"],
    prices: [8000, 6000, 15000, 12000, 7000, 18000, 9000, 10000],
    types: ["한식", "중식", "일식", "양식", "한식", "중식", "일식", "양식"],
    spiciness: [3, 1, 0, 0, 2, 1, 2, 0],
    calories: [350, 600, 450, 520, 380, 750, 480, 680],
    cookTime: [15, 10, 20, 18, 12, 25, 12, 8],
    popularity: [85, 90, 75, 80, 88, 70, 82, 95]
};

function 평균음식가격계산(){
    let total = 0;
    for(let i=0; i<lunchData.prices.length; i++){
        total = total + lunchData.prices[i];
    }
    return total / lunchData.prices.length;
}
// console.log(평균음식가격계산()); 

function 평균보다싼가격만출력(){
    for(let i=0; i<lunchData.prices.length; i++){
        if(평균음식가격계산()>lunchData.prices[i]){
            console.log(lunchData.prices[i])
        }
    }    
}
// 평균보다싼가격만출력();

function 평균보다싼가격과메뉴출력(){
    for(let i=0; i<lunchData.prices.length; i++){
        if(평균음식가격계산()>lunchData.prices[i]){
            console.log(lunchData.menus[i]+':'+lunchData.prices[i]);
        }
    }    
}
// 평균보다싼가격과메뉴출력();

function 가장비싼메뉴출력(){
    let 최고비싼가격 = 0;
    let 최고비싼메뉴 = '';
    for(let i=0; i<lunchData.prices.length; i++){
        if(lunchData.prices[i] > 최고비싼가격){
            최고비싼가격 = lunchData.prices[i];
            최고비싼메뉴 = lunchData.menus[i];
        }
    }
    return { 메뉴: 최고비싼메뉴, 가격 : 최고비싼가격};    
}
const 결과 = 가장비싼메뉴출력()
console.log(결과.메뉴,':', 결과.가격)