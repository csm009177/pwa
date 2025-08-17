var academies = [
    {
        city: "대전",
        district: "서구",
        neighborhood: "둔산동",
        building: "오라클빌딩",
        name: "그린아카데미아트학원",
        branch: "대전둔산",
        courses: ["웹개발", "앱개발", "데이터분석"]
    },
    {
        city: "대전",
        district: "중구",
        neighborhood: "은행동",
        building: "대전빌딩",
        name: "그린아카데미아트학원",
        branch: "대전중구",
        courses: ["디자인", "마케팅", "프로그래밍"]
    },
    {
        city: "서울",
        district: "강남구",
        neighborhood: "역삼동",
        building: "테크노빌딩",
        name: "그린아카데미아트학원",
        branch: "서울강남",
        courses: ["AI", "빅데이터", "클라우드"]
    }
];
// 아래 부분 대괄호가 요번 주요 핵심!
var addressComponents = [
  academies["city"],
  academies["district"],
  academies["neighborhood"],
  academies["building"],
  academies["name"],
  academies["branch"],
  academies["courses"]
];

var rangeValue = {
  start : 0,
  end : academies.length,
};

for(let i=rangeValue.start; i<academies.length; i++){
  for(let key in academies[i]){
    console.log(academies[i][key]);
  }
}