var academyInfo = {
    city: "대전",
    district: "서구",
    neighborhood: "둔산동",
    building: "오라클빌딩",
    name: "그린아카데미아트학원",
    branch: "대전둔산"
};

// '순서를 목적'으로 다루는 '배열' 표기
var addressComponents = [
    academyInfo.city,
    academyInfo.district,
    academyInfo.neighborhood,
    academyInfo.building,
    academyInfo.name,
    academyInfo.branch
];

var rangeValue = {
    start: 0,
    // 랭쓰(length)라고 부르는 요녀석은 어떤 녀석일까요?
    end: addressComponents.length 
};

console.log("=== 기본 예제: 주소 구성 요소 출력 ===");
for (var index = rangeValue["start"]; index < rangeValue["end"]; index++) {
    console.log((index + 1) + "번째 구성 요소: " + addressComponents[index]);
}

// 이것은 단순한 '빈 문자열 선언'일 뿐이지만, 
// 직접 자유롭게 만드는 것 까지 활용능력은 매우 길게 생각하고 다루는 것이므로, 
// 편하게 확인하시기 바랍니다.
// 매우 어려운 테크닉이므로, '이런게 있구나 하고 눈도장 정도만 찍읍시다!
var fullAddress = ""; 
for (var i = rangeValue["start"]; i < rangeValue["end"]; i++) {
    if (i > 0) {
        
        fullAddress += " "; 
    }
    fullAddress =  fullAddress + addressComponents[i];
    console.log((i + 1) + "단계: " + fullAddress);
}

var keys = ["city", "district", "neighborhood", "building", "name", "branch"];
var keyLabels = ["도시", "구", "동", "건물", "학원명", "지점"];

var keyRange = {
    start: 0,
    end: keys.length
};

for (var j = keyRange["start"]; j < keyRange["end"]; j++) {
    var key = keys[j];
    var value = academyInfo[key];
    console.log(keyLabels[j] + ": " + value);
}

console.log("fullAddress");