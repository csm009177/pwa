var academyInfo = [
  {
    city: "대전",
    district: "서구",
    neighborhood: "둔산동",
    building: "오라클빌딩",
    name: "그린아카데미아트학원",
    branch: "대전둔산",
    courses: ["웹개발", "앱개발", "데이터분석"],
  },
  {
    city: "대전",
    district: "중구",
    neighborhood: "은행동",
    building: "대전빌딩",
    name: "그린아카데미아트학원",
    branch: "대전중구",
    courses: ["디자인", "마케팅", "프로그래밍"],
  },
  {
    city: "서울",
    district: "강남구",
    neighborhood: "역삼동",
    building: "테크노빌딩",
    name: "그린아카데미아트학원",
    branch: "서울강남",
    courses: ["AI", "빅데이터", "클라우드"],
  },
];
// 아래 부분 대괄호가 요번 주요 핵심!

var rangeValue = {
  start: 0,
  end: academyInfo.length,
};

function componentCompiler(num) {
  var addressComponents = [
    academyInfo[num]["city"],
    academyInfo[num]["district"],
    academyInfo[num]["neighborhood"],
    academyInfo[num]["building"],
    academyInfo[num]["name"],
    academyInfo[num]["branch"],
    academyInfo[num]["courses"],
  ];
  return addressComponents; 
}

for (let i = rangeValue.start; i < rangeValue.end; i++) {
  console.log(componentCompiler(i));
}
