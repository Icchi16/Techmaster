// (1)

// function printNumber(a, b) {
//   for (a; a <= b; a++) console.log(a);
// }

// (2)
function printNumber(a, b) {
  for (b; b >= a; b--) console.log(b);
}

// (3)

function sumOfOddNUmbers(a, b) {
  let result = 0;
  if (a < b) {
    for (a; a <= b; a++) {
      if (a % 2 != 0) result += a;
    }
    return result;
  } else
    for (b; a >= b; b++) {
      if (b % 2 != 0) result += b;
    }
  return result;
}

// (3) chữa
function sumOfOddNUmbers(a, b) {
  let result = 0;

  let min = a,
    max = b;
  if (a > b) {
    min = b;
    max = a;
  }

  for (let i = 0; i <= max; i++) {
    if (i % 2 != 0) total += i;
  }
}

// (4)
function divisor(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) console.log(i);
  }
}

// (5)
function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

// (6)
function countFolding(thickness) {
  let count = 0;
  while (count * 0.1 * 2 != thickness * 1000) {
    count++;
  }
  return count;
}

function countFolding(thickness) {
  thickness *= 1000;
  let count = 0;
  let currentThickness = 0.1;
  while (currentThickness < thickness) {
    currentThickness *= 2;
    count++;
  }
  return count;
}

// (7)
function countYear(dad, son) {
  let year = 0;
  while (son * 2 != dad) {
    son++;
    dad++;
    year++;
  }
  return year;
}

// (8)
function countGaChoa() {
  let ga = 1;
  let choa = 36 - ga;
  while (ga * 2 + choa * 4 != 100) {
    ga++;
  }
  console.log(ga + " và " + choa);
}

// Phần 2
// (1)
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

// (2)
function sumOfPrimes(a, b) {}

// (3)
// function fibonacci(n) {
//   // debugger;
//   let resultN1 = 0;
//   let resultN2 = 1;
//   let result = 0;
//   let turn = 2;
//   console.log(resultN1);
//   if (n >= 1) {
//     console.log(resultN2);
//   }

//   while (turn <= n) {
//     result = resultN1 + resultN2;
//     console.log(result);
//     turn++;
//     resultN1 = resultN2;
//     resultN2 = result;
//   }
// }

// (3) - Chữa
function fibonacci(number) {
  let a = 0;
  let b = 1;
  let c;

  for (let i = 1; i <= number; i++) {
    if ((i = 1)) {
      console.log(a);
      continue;
    }
    if ((i = 2)) {
      console.log(b);
      continue;
    }
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

// (4)
function isPalindrome(n) {
  // debugger;
  if (n === 0) return false;
  let reverse = 0;
  let lastDigit = 0;
  let remain = n;
  let turn = 0;
  if (n.toString().length == 2 && n % 10 == 0) return false;
  while (turn < n.toString().length) {
    lastDigit = remain % 10;
    reverse = reverse * 10 + lastDigit;
    remain = parseInt(remain / 10);

    if (remain == reverse || parseInt(remain / 10) == reverse) return true;
    turn++;
  }
  return false;
}

// (4) - chữa
function isPalindrome(number) {
  let rest;
  let reverseNumber = 0;
  let copy = number;

  while (copy > 0) {
    rest = copy % 10;
    reverseNumber = reverseNumber * 10 + rest;

    copy = (copy - rest) / 10;
  }
  return number === reverseNumber;
}

// (5)
function sumOfPalindrome(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (isPalindrome(i)) result += i;
  }
  return result;
}

//  (6)
function reverseNumber(n) {
  // debugger;
  let reverse = 0;
  let lastDigit = 0;
  let remain = n;
  let turn = 0;

  while (turn < n.toString().length) {
    lastDigit = remain % 10;
    reverse = reverse * 10 + lastDigit;
    remain = parseInt(remain / 10);
    turn++;
  }
  console.log(reverse);
}
let n = 152;
console.log(n.toString().length);

// vẽ 1 hình sao
// in ra cái hình sao