function state() {
  let handle = true;

  // const toggle = () => {
  //   handle = !handle; // true가 아니다 => false
  //   return handle; // false를 반환
  // }

  // return toggle;

  return function() {
    handle = !handle; // true가 아니다 => false
    return handle; // false를 반환
  }
}


const test = state();
console.log(test()); // false
console.log(test()); // true