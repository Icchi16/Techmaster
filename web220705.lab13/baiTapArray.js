let testArr = [1, 1, 2, 3, 5, 6, 7, 8];
let testArr2 = [2, 3, 4, 9, 8];

// (1)
function max(arr) {
  return Math.max(...arr);
}

// console.log(max([1, 5, 3, 4, 2]));

// (2)
function minMax(arr) {
  let minMaxArr = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  minMaxArr.push(min);
  minMaxArr.push(max);

  return minMaxArr;
}

// (2) - CHỮA
function minMax(arr) {
  let min = (max = arr[0]);
  for (let number of arr) {
    if (number > max) max = number;
    if (number < min) min = number;
  }
  return [min, max];
}

// console.log(minMax([7, 5, 3, -4, 141]));

// (3)
function avg(arr) {
  let sum = 0;
  let result = 0;
  for (let index of arr) {
    sum += index;
  }

  return (result = sum / arr.length);
}

// (3) - CHỮA
function avg(arr) {
  let total = arr.reduce(function (sum, number) {
    sum += number;
    return sum;
  });
  return total / arr.length;
}

// (4)
function swap(arr, x, y) {
  let firstValue = arr[x];
  arr[x] = arr[y];
  arr[y] = firstValue;

  return arr;
}

// console.log(Math.max(...[1, 4, 2, 5, 2, 5]));

// (5)
function secondLargest(arr) {
  let newArr = [];
  for (let index of arr) {
    if (index !== Math.max(...arr)) newArr.push(index);
  }
  return Math.max(...newArr);
}

// console.log(secondLargest(testArr));

// (6)
function mix(arr1, arr2) {
  //   debugger;
  let newArr = [];
  let bigArr = arr1;
  let smallArr = arr2;
  if (smallArr.length > bigArr.length) {
    bigArr = arr2;
    smallArr = arr1;
  }

  for (let index1 of bigArr) {
    newArr.push(index1);
    bigArr.shift;
    for (let index2 of smallArr) {
      newArr.push(index2);
      smallArr.shift();
      break;
    }
  }
  return newArr;
}

// (6.2)
// function mix(arr1, arr2) {
//   let newArr = [];
//   let lengthArr = [arr1.length, arr2.length];
//   for (let i = 0; i < Math.max(...lengthArr); i++) {
//     if (typeof arr1[i] !== "undefined") newArr.push(arr1[i]);
//     if (typeof arr2[i] !== "undefined") newArr.push(arr2[i]);
//   }
//   return newArr;
// }

// console.log(mix(testArr, testArr2));
// console.log(typeof testArr2[5] !== "undefined");

// (7) - CHỮA
function shuffle(arr) {
  for (let index = 0; index < arguments.length; index++) {
    const randomIndex =
      Math.floor.random() * (arr.length - 1 - (index + 1)) + index + 1;
    swap(arr, index, randomIndex);
  }
}

// (8)
// function interesection(arr1, arr2) {
//   // debugger;
//   let newArr = [arr1, arr2].flat();
//   let count = {};
//   return newArr.reduce(function (a, b) {
//     // debugger;
//     if (!count[b]) {
//       count[b] = 1;
//     } else {
//       count[b]++;
//     }
//     if (count[b] > 1) {
//       a.push(b);
//     }
//     return a;
//   }, []);
// }

// console.log(interesection(testArr, testArr2));

// (8.1)
function interesection(arr1, arr2) {
  let newArr = [];
  for (let index1 of arr1) {
    for (let index2 of arr2) {
      if (index1 === index2) newArr.push(index1);
      continue;
    }
  }
  return newArr;
}

// console.log(interesection(testArr, testArr2));

// (9)
function differnce(arr1, arr2) {
  debugger;
  let filterArr1 = removeDuplicate(arr1);
  let filterArr2 = removeDuplicate(arr2);
  let arr1Diff = filterArr1.reduce(function (newArr, value) {
    debugger;
    let checker;
    for (let index of filterArr2) {
      if (value !== index) {
        checker = index;
        continue;
      } else {
        checker = index;
        break;
      }
    }
    if (value !== checker) newArr.push(value);
    return newArr;
  }, []);
  let arr2Diff = filterArr2.reduce(function (newArr, value) {
    let checker;
    for (let index of filterArr1) {
      if (value !== index) {
        checker = index;
        continue;
      } else {
        checker = index;
        break;
      }
    }
    if (value !== checker) newArr.push(value);
    return newArr;
  }, []);

  return arr1Diff.concat(arr2Diff);
}

// console.log(differnce(testArr, testArr2));

// (10)
function removeDuplicate(arr) {
  let filter = {};
  let newArr = [];
  for (let index of arr) {
    if (!filter[index]) {
      filter[index] = 1;
    } else {
      filter[index]++;
    }
    if (filter[index] === 1) {
      newArr.push(index);
    }
  }
  return newArr;
}

// console.log(removeDuplicate([1, 2, 3, 4, 5, 4, 3, 5, 6]));

// (11)
function filterRange(arr, a, b) {
  return arr.filter(function (value) {
    return value >= a && value <= b;
  });
}

// console.log(filterRange([5, 3, 8, 1], 1, 4));

// (12)
const users1 = [
  { name: "John", surname: "Smith", id: 1 },
  { name: "Pete", surname: "Hunt", id: 2 },
  { name: "Mary", surname: "Key", id: 3 },
];

function getNames(users) {
  return users.map(function (name) {
    return name.name;
  });
}

// console.log(getNames(users));

// (13)

function mapFullName(users) {
  let name = {};
  return users.map(function ({ name, surname, id }) {
    return { fullname: name + " " + surname, id: id };
  });
}

// console.log(mapFullName(users));

// (14)
const users2 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

function greaterThan(users, age) {
  return users.filter(function (name) {
    if (name.age > age) return name;
  });
}

// console.log(greaterThan(users2, 29));

// (15)
let user = [{}];

function aveAge(users) {
  let result = 0;
  users.reduce(function (total, user) {
    return (total += user.age);
  }, 0);
  return total / users.length;
}

// (16)

function sortUsersByAge(users) {
  users = users.sort(function (name1, name2) {
    return name2.age - name1.age;
  });
  return users;
}

console.log(sortUsersByAge(users2));
