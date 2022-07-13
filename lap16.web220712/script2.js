// XU LY MANG
// (4)

function ziczac(m, n) {
  let newArr = [];
  for (let i = 1; i <= m * n; i++) {
    newArr.push(i);
  }
  let resultArr = [];
  let rowStart = 0;
  let rowEnd = rowStart + n;
  for (let i = 0; i < m; i++) {
    resultArr.push(newArr.slice(rowStart, rowEnd));
    rowStart += n;
    rowEnd += n;
  }
  return resultArr;
}

console.log(ziczac(4, 5));
