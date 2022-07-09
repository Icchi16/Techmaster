let dog = {
  name: "Beo",
  age: 2,
  breed: "Pitbull",
  gender: "Male",
  color: "Black",
  legs: 4,
  "favorite food": "Rice",

  eat() {
    console.log(
      this.name + " is eating " + this["favorite food"] + " ,yum yum..."
    );
  },

  run() {
    console.log(this.name + " is running on " + this.legs + " legs...");
  },

  bark() {
    console.log("Woof woof woof ...");
  },
};

//
console.log(dog);
//
console.log(dog.name);
//
console.log(dog.color);
dog.color = "Brown";
console.log(dog.color);
//
console.log(dog.age);
dog.age += 2;
console.log(dog.age);
//
dog.eat();
//
dog.run();
//
for (let key in dog) {
  console.log(key);
}
//
for (let value in dog) {
  console.log(dog[value]);
}
//
dog["isCrazy"] = true;
console.log(dog);
//
dog.crazy = function () {
  // debugger;
  for (let i = 1; i <= 5; i++) {
    if (this.isCrazy == false) {
      console.log(this.name + " is not crazy");
      break;
    } else {
      this.run() + this.bark();
    }
  }
};

//
if (dog.isCrazy) {
  dog.isCrazy = false;
} else {
  dog.isCrazy = true;
}
//
dog.crazy();
console.log(dog);
//
delete dog.isCrazy;
console.log(dog);
// //
dog.crazy();

