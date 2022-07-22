// // (1)
// function isOddNumber(number) {
//   if (number % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// (1.2)
function isOddNumber(number) {
  return number % 2 != 0;
}

// (2)
function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// (2.2)
function maxOfTwo(a, b) {
  if (a > b) return a;
  else return b;
}

// (3)
function divisibleByThreeAndFive(number) {
  if (number % 3 == 0 && number % 5 == 0);
}

// (4)

function season(month) {
  if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
  } else if (month == 3 || month == 4 || month == 5) {
    console.log("Spring");
  } else if (month == 6 || month == 7 || month == 8) {
    console.log("Summer");
  } else if (month == 9 || month == 10 || month == 11) {
    console.log("Fall");
  } else console.log("Một năm có 12 tháng thôi bố");
}

// (5)
function trafficLight(light) {
  if (light == "Green") {
    console.log("Được phép di chuyển");
  }
  if (light == "Yellow") {
    console.log("Giảm tốc độ và dừng lại");
  } else console.log("Dừng lại");
}

// (6)
function calcCommissions(totalSales) {
  if (totalSales <= 100000000) {
    return totalSales * 0.05;
  }
  if (totalSales <= 300000000) {
    return totalSales * 0.1;
  } else return totalSales * 0.2;
}

// Phần 2
// (1)

// function isLeafYear(year) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) return true;
//     else return false;
//   } else if (year % 4 == 0) return true;
//   else return false;
// }

// function isLeafYear(year) {
//   if (year % 100 != 0 && year % 4 == 0) return true;
//   else if (year % 100 == 0 && year % 400 == 0) return true;
//   else return false;
// }

function isLeapYear(year) {
  if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) return true;
  else return false;
}

// (2)
function daysOfMonth(month, year) {
  if (month == 2) {
    // if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0)
    if (isLeapYear(year)) console.log("Tháng " + month + " có 29 ngày");
    else console.log("Tháng " + month + " có 28 ngày");
  } else if ((month <= 7 && month % 2 != 0) || (month > 7 && month % 2 == 0))
    console.log("Tháng " + month + " có 31 ngày");
  else console.log("Tháng " + month + " có 30 ngày");
}

// (3)
function calGrade(point) {
  if (point < 4) console.log("Xếp loại F");
  else if (point < 5.5) console.log("Xếp loại D");
  else if (point < 7) console.log("Xếp loại C");
  else if (point < 8.5) console.log("Xếp loại B");
  else console.log("Xếp loại A");
}

// (4)
function calcTaxiFee(km) {
  const serviceFee = 10000;
  const first30kmFee = 11000;
  const next31kmFee = 9500;
  if (km <= 30) return serviceFee + km * first30kmFee;
  else return serviceFee + 30 * first30kmFee + (km - 30) * next31kmFee;
}

// (5)
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}

//(6)
function solveEquation(a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  let x1 = (delta ** 0.5 - b) / (2 * a);
  let x2 = -(delta ** 0.5 + b) / (2 * a);

  if (a == 0 && b == 0 && c == 0) return Infinity;
  else if (a == 0 && b == 0) return null;
  else if (a == 0) return -c / b;
  else if (delta < 0) return null;
  else return [x1, x2];
}

// 2
function daysOfMonth(day, year) {
  switch (month) {
  case 2:
    if}
}
