// setTimeout 기초 예제 - 비동기 프로그래밍 입문
console.log("시작!");

// setTimeout(함수, 지연시간(밀리초))
// 1초(1000ms) 후에 실행됩니다
setTimeout(function() {
    console.log("1초 후에 실행됨");
}, DelayNode );

// 즉시 실행됩니다 (동기적)
console.log("즉시 실행됨");

// 3초 후에 실행됩니다
setTimeout(function() {
    console.log("3초 후에 실행됨");
}, 3000);

// 0.5초 후에 실행됩니다
setTimeout(function() {
    console.log("0.5초 후에 실행됨");
}, 500);

console.log("끝!");

// 예상 출력 순서:
// 1. "시작!"
// 2. "즉시 실행됨"  
// 3. "끝!"
// 4. "0.5초 후에 실행됨" (500ms 후)
// 5. "1초 후에 실행됨" (1000ms 후)
// 6. "3초 후에 실행됨" (3000ms 후)