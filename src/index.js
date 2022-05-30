function naiveStringSearch(long, short) {
  let longArr = [];
  let longChar = long.split("");
  longArr.push(longChar);
  let shortArr = [];
  let shortChar = short.split("");
  shortArr.push(shortChar);
  for (let i = 0; i < longArr.length; i++) {
    for (let j = 0; i < shortArr.length; j++) {
      if (longArr[i] !== shortArr[j]) return;
    }
  }
}
