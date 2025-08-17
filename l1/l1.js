const rangeVal = {
  start: 0,
  end: 10,
};

for (let index = rangeVal.start; index < rangeVal.end; index++) {
  const sum = (rangeVal.start += 1);
  console.log(sum);
}
