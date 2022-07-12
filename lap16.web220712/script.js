// Xử lý số
// (1)

function sphereVolume(radius) {
  return (4 / 3) * Math.PI * radius ** 3;
}

// (2)
function sumOfInterger(x, y) {
  let sum = 0;
  let min = x + 1;
  let max = y - 1;

  if (x > y) {
    min = y + 1;
    max = x - 1;
  }

  while (min <= max) {
    sum += min;
    min++;
  }
  return sum;
}

// console.log(sumOfInterger(3, 8));

// (3)
function sumOfFactors(num) {
  let sum = 0;
  for (let factor = 1; factor <= num; factor++) {
    if (num % factor === 0) sum += factor;
    else continue;
  }
  return sum;
}

// console.log(sumOfFactors(4));

// (4)
function isPrime(num) {
  if (num === 0 || num === 1) return false;
  else if (num === 2) return true;
  else
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
      else return true;
    }
}

// console.log(isPrime(2));

// (5)

function sumOfPrimes(num) {
  debugger;
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

// console.log(sumOfPrimes(7));

// XỬ LÝ CHUỖI
// (1)

function toCapitalized(str) {
  const arr = str.trim().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return arr.join(" ");
}

// console.log(toCapitalized("hello world!"));

// (2)
function toSpinalCase(str) {
  const arr = str.trim().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  return arr.join("-");
}

// console.log(toSpinalCase("HELLo wORLd!"));

// (3)
function isPalindrome(str) {
  const charArr = str.trim().toLowerCase().replaceAll(" ", "").split("");
  const revesrseText = charArr.reverse().join("");
  return str === revesrseText;
}

// console.log(isPalindrome("madam"));

// (4)
function isPartOf(str1, str2) {
  debugger;
  const charArr1 = str1.trim().toLowerCase().split("");
  const charArr2 = str2.trim().toLowerCase().split("");
  for (let index1 of charArr1) {
    if (str2.indexOf(index1) === -1) return false;
    else continue;
  }
  return true;
}

// console.log(isPartOf("max", "sionmadision"));

// XỬ LÝ MẢNG
// (1)
function removeFalse(arr) {
  let newArr = [];
  for (let index of arr) {
    if (!index) continue;
    else newArr.push(index);
  }
  return newArr;
}

// console.log(removeFalse([false, 2, 4, 5, null, 4, undefined, NaN, 0, ""]));

// (2)
function longestIndex(arr) {
  let newArr = [];
  let lengthArr = [];
  let maxChar;
  for (let index of arr) {
    lengthArr.push(index.length);
  }
  lengthArr.sort(function (a, b) {
    return b - a;
  });
  maxChar = lengthArr[0];
  for (let index of arr) {
    if (index.length === maxChar) newArr.push(index);
  }
  return newArr;
}

// console.log(longestIndex(["madmad", "mad", "hellow"]));

// (3)
function uniqueArr(arr1, arr2) {
  let newArr = [];
  let arr1Unique = arr1.filter(function (index1) {
    return arr2.indexOf(index1) === -1;
  });
  let arr2Unique = arr2.filter(function (index2) {
    return arr1.indexOf(index2) === -1;
  });

  return newArr.concat(arr1Unique).concat(arr2Unique);
}

// console.log(uniqueArr([1, 2, 3], [2, 3, 5, 5]));

// (4)
function ziczac(m, n) {
  let newArr = [];
  newArr.reduce();
}

// XỬ LÝ OBJECT
const student = [
  { name: "Huy", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Nam", age: 24 },
  { name: "Hunter", age: 21 },
];

// (1)
function avgAge(arr) {
  let sum = 0;
  let count = 0;
  for (let index of arr) {
    sum += index.age;
    count++;
  }
  return sum / count;
}

// console.log(avgAge(student));

// (2)
function sortByAge(arr) {
  return arr.sort(function (studentAge1, studentAge2) {
    return studentAge2.age - studentAge1.age;
  });
}

// console.log(sortByAge(student));

// (3)
function sortByName(arr) {
  return arr.sort(function (studentName1, studentName2) {
    if (studentName1.name.toLowerCase() < studentName2.name.toLowerCase()) {
      return -1;
    }
    if (studentName1.name.toLowerCase() > studentName2.name.toLowerCase()) {
      return 1;
    }
  });
}

// console.log(sortByName(student));

// (4)
function filterH(arr) {
  return arr.filter(function (studentH) {
    debugger;
    return studentH.name.charAt(0) === "H" || studentH.name.charAt(0) === "h";
  });
}

// console.log(filterH(student));

// TỔNG HỢP
// (1)

function timeAfter(time, num) {
  const timeArr = time.split(":");
  let curTime = new Date();
  curTime.setHours(Number(timeArr[0]));
  curTime.setMinutes(Number(timeArr[1]));
  curTime.setSeconds(Number(timeArr[2]));
  curTime.setMilliseconds(0);
  let newTime = curTime.getTime() + num * 1000;
  newTime = new Date(newTime);
  return (
    ("0" + newTime.getHours()).slice(-2) +
    ":" +
    ("0" + newTime.getMinutes()).slice(-2) +
    ":" +
    ("0" + newTime.getSeconds()).slice(-2)
  );
}

// console.log(timeAfter("09:20:31", 90));

// (2)
function conOcSen(x, y, h) {
  let traverse = 0;
  let day = 0;
  while (traverse < h) {
    traverse += x;
    if (traverse >= h) {
      day++;
      break;
    } else traverse -= y;
    day++;
  }
  return day;
}

console.log(conOcSen(3, 2, 4));
