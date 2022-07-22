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

// TONG HOP
// (3)

function makeMin(num) {
  debugger;
  let numArr = [];
  for (let i = 0; i < num.toString().length; i++) {
    numArr.push(Number(num.toString()[i]));
  }
  let zeroArr = [];

  let resultArr = numArr.reduce(function (initial, value) {
    debugger;
    if (value !== 0) {
      initial.push(value);
      initial.sort(function (a, b) {
        return a - b;
      });
    } else zeroArr.push(value);
    return initial;
  }, []);

  if (numArr.indexOf(0) !== -1) {
    resultArr.splice(1, 0, ...zeroArr);
    return Number(resultArr.join(""));
  } else return Number(resultArr.join(""));
}

console.log(makeMin(5307510));
