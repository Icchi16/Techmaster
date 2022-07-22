// (1)
const guess_list = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  for (let key in guess_list) {
    switch (key) {
      case name:
        return console.log(
          "Hi, I'm " + key + ", and I'm from " + guess_list[key]
        );
        break;
      default:
        return console.log("Hi! I'm a guess");
    }
  }
}

// (2)
const family = {
  Susan: 32,
  Fred: 34,
};

let familyAfterNYears = {};

function afterNYears(family, years) {
  debugger;
  for (let key in family) {
    family[key] += years;
    familyAfterNYears[key] = family[key]; //taif sao
  }
  return console.log(familyAfterNYears);
}

// (3)

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function calcNameScore(name) {
  // debugger;
  let result = 0;

  for (let i = 0; i < name.length; i++) {
    // result += scores[name[i]];
    result += scores[name[i]];
  }

  switch (true) {
    case result <= 60:
      return console.log("NOT TOO GOOD");
      break;
    case result <= 300:
      return console.log("PRETTY GOOD");
      break;
    case result <= 600:
      return console.log("VERY GOOD");
      break;
    default:
      return console.log("THE BEST");
  }
}

// (4)
const obj = { a: 1, b: 2, c: 3 };
let invertObj = {};

function invert(obj) {
  for (let key in obj) {
    //   store = obj[key];
    invertObj[obj[key]] = key;
  }
  return console.log(invertObj);
}

// (5)
const items = {
  tv: 300,
  ipad: 1000,
};

function totalAmount(items) {
  let result = 0;
  for (let key in items) {
    result += items[key];
  }
  return result;
}

totalAmount(items);

// (6)
const items2 = {
  "Gucci Fur": 3000,
  Icecream: 4,
  "Dolce Gabana Heels": 4000,
  Humbergur: 10,
};

function expensiveItems(items) {
  let more1000Items = {};
  for (let key in items) {
    if (items[key] >= 1000) {
      more1000Items[key] = items[key];
    }
  } return more1000Items
}
