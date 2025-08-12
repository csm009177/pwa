function state() {
  let handle = true;

  // const toggle = () => {
  //   handle = !handle; // true가 아니다 => false
  //   return handle; // false를 반환
  // }

  // return toggle;

  return function toggle() {
    handle = !handle; // true가 아니다 => false
    return handle; // false를 반환
  }
}