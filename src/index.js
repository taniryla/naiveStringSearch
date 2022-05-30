function naiveStringSearch(long, short) {
  let count = 0;

  shortArr.push(shortChar);
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; i < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}
