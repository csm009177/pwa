var academyInfo = {
  city: "",
  district : "",
  neighborhood : ""
}
// 아래 부분 대괄호가 요번 주요 핵심!
var addressComponents = [
  academyInfo["city"],
  academyInfo["district"],
  academyInfo["neighborhood"]
]

var rangeValue = {
  start : 0,
  end : 5
}

for(var index = rangeValue["start"]; index < rangeValue["end"]; index++) {
  // * rangeValue에 맞추어서 반복문 설정
  console.log(addressComponents[index]); // ? 새로운 문법!(배열)
}