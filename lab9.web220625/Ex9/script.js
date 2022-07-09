function usd2vnd(amount) {
  let result = amount * 23000;
  return result + "đ";
}

console.log("3 đô Mẽo sang VND là: " + usd2vnd(2));
console.log("10 đô Mẽo sang VND là: " + usd2vnd(10));

function findArea(a, b) {
  let result = a * b;
  return result;
}

console.log("Diện tích hình chữ nhật với các cạnh 2, 3  là: " + findArea(2, 3));
console.log("Diện tích hình chữ nhật với các cạnh 3, 5  là: " + findArea(3, 5));

function celsiusToFahrenheit(c) {
  let result = c * 1.8 + 32;
  return result + "°C";
}

console.log("0°F sang °C là: " + celsiusToFahrenheit(0));
console.log("0°F sang °C là: " + celsiusToFahrenheit(37));
console.log("0°F sang °C là: " + celsiusToFahrenheit(100));

function pow(a, b) {
  let result = a ** b;
  return result;
}

console.log("2^2 là: " + pow(2, 2));
console.log("3^3 là: " + pow(3, 3));
console.log("5^1 là: " + pow(5, 1));

function findAreaOfTriangle(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  //   hoặc viết là:  let result = (p * (p - a) * (p - b) * (p - c))**0.5;
  //                  return result;
}

console.log(
  "Diện tích tam giác có các cạnh 10, 17, 21 là: " +
    findAreaOfTriangle(10, 17, 21)
);
