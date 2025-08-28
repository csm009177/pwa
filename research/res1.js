// ? 조금 더 알멩이에 들어가기
// ? Object.getOwnPropertyNames()
// ? 내장객체 대문자로 시작하는 Object의 메서드 getOwnPropertyNames()
// * 모든 속성 이름이 무엇인지 확인하는 '자바스크립트' 편의성 함수(메서드)
// * 하나하나 조회해서 배열에 대입하면서 진행하는 것들을 대폭 간소화 해준다.
// * Array 도 대문자로 시작하므로 언어자체의 내장 배열이며,
// * prototype에 자바스크립트가 지원하는 모든 '배열용 지원 함수(메서드)'를 조회할 수 있다.
// Todo : 위 문법적 이해는 자바스크립트 핵심 코어 동작원리를 다룰때 진행하기로 하고,

// Todo : 아래 코드를 실행했을때 나오는 일련의 값 중 '영어'로서 직관적으로 이해되는 것들을 찾아보자.
// * 예를 들어, find는 '찾다' 라는 것으로 직역 할 수 있으며,
// * push는 '밀어넣다' 라는 의미로 직역 할 수 있다.
// * 상당히 '선언적인(목적이 뚜렷한)' 이름들로 구성되어있다.
// * 거의 대부분 for(), if(), while() 들의 조합이다. 많이 쓰는 것들 위주로 구성되어
// * 더 빠르고 경쾌한 프로그래밍을 할 수 있는 '고수준' 언어로서 변모한다.

// console.log(Object.getOwnPropertyNames(Array.prototype));
// 콘솔.기록(객체.자신의속성이름들얻기(배열.원형));
// 원형들의 배열이라는 객체에서 자신의 속성들의 이름을 콘솔로그에 기록하기
// console.log(Object)
// console.log(typeof(Object));
// console.log(Object.getOwnPropertyNames(Object));
// console.log(Object.getOwnPropertyNames(Object.keys));
// console.log(Object.getOwnPropertyNames(Object.values));
// console.log(Object.getOwnPropertyNames(typeof(length)));
// console.log(Object.getOwnPropertyNames(typeof(name)));
console.log(new Object);
