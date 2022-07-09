let self = {
  // property
  name: "Duy",
  age: 28,
  job: "Marketing",
  relationship: "single",
  phone: "0968955683",

  //   method
  eat() {
    console.log("Oh yeah! T-T");
  },

  sunday() {
    console.log("Đi chơi thôi");
  },
};

// cú pháp truy cập đối tượng

//  2 cách họi\

// Ưu tiên sử dụng Dot notation nếu dung camelCase
// DOT NOTATION: obj.prop || obj.prop()

// BRACKET obj["prop"] || obj["method"]()
// Sử dụng với key là 1 biến

// Tên thuộc tính (prop) không bị giới hạn đặt tên biến
// được lưu dưới dạng chuỗi (phải đặt trong "")

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };

// const key = prompt("Nhập key vào");
// console.log(obj[key]);

// duyệt qua các key trong thuộc đối tượng
for (let key in self) {
  // key = "isHandsome"
  console.log(key + ": " + self[key]);
}

let ba = {
  name: "Ba",
  speak() {
    console.log("Hello I'm ", this.name);
  },
};

let sang = {
  name: "Sang",
};

sang.speak = ba.speak;

ba.speak();
sang.speak();

// this là đối tượng trước dấu chấm

let dog = {
  name: "Bingo",
  age: 1,
  breed: "Corgi",
  legs: 4,

  bark() {
    console.log(this.name + " is barking");
  },

  run() {
    console.log(this.name + " is running on " + this.legs + " legs");
  },

  crazy() {
    this.bark();
    this.run();
  },

  // chuyển object to primitive\
  // tự động gọi khi cần chuyển đối tượng về nguyên thuỷ
  toString() {
    return this.name;
  },

  valueOf() {
    return this.age;
  },
};

console.log(dog - 1);

// key được lưu theo dạng chuỗi
// Contructor

function Book(isbn, author, title, page) {
  this.isbn = isbn;
  this.author = author;
  this.title = title;
  this.page = page;
}

const book1 = new Book("1", "Ba", "JS", 10);
const book2 = new Book("２", "Béo", "JS", 10);
const book3 = new Book("3", "Bị", "JS", 10);
const book4 = new Book("4", "Bí", "JS", 10);
const book5 = new Book("4", "Bá", "JS", 10);
const book6 = new Book("4", "Bư", "JS", 10);

console.log(book1);
console.log(book6);

// tính kế thừa của object
function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  console.log(this.name + " is barking ...");
};

Dog.prototype.eat = function () {
  console.log(this.name + " is eating ...");
};

let sam = new Dog("Sam", 1, "Bull");

console.log(sam);
sam.bark();
sam.eat();

let bingo = new Dog("Bìngo", 2, "PitBull");

console.log(bingo);
bingo.bark();
bingo.eat();

