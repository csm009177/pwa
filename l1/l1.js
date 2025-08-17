const rangeVal = {
  start: 0,
  middle: [],
  end: 10,
};
for(let i=rangeVal.start; i<rangeVal.end; i++){
    rangeVal.middle[i] = i;
}
console.log(rangeVal.middle);