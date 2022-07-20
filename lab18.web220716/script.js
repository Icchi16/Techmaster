// script.js
const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];

function createFruitItem(fruit) {
  const li = document.createElement("li");
  li.textContent = fruit;

  return li;
}

function createFruitList() {
  const list = document.createElement("ul");
  fruitList.forEach(function (fruit) {
    list.append(createFruitItem(fruit));
  });
  //   list.append(items);
  return list;
  //   console.log;
}
const app = document.getElementById("app");
app.append(createFruitList());
