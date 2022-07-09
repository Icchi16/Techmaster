// let arr = [5, 4, 6, 2];
let arr = [
  { name: "Đạt", age: 23, weight: 45 },
  { name: "Sang", age: 27, weight: 60 },
  { name: "Tuấn", age: 23, weight: 70 },
  { name: "Công", age: 24, weight: 98 },
];

// // function logData(data) {
// //   console.log(data);
// // }

// // function duy(callback) {
// //   console.log("Duy đi mua bò húc");
// //   let boHuc = "RedBUll";
// //   requester(boHuc);
// // }

// // function ba(boHuc) {
// //   console.log("Uống", boHuc);
// // }

// // let arr = ["Sang", "Tuấn", "Đạt", "Thuần"];

// // Có thể khai báo hàm không tên trong hàm callback
// // arr.forEach(function (name) {
// //   console.log(name.toUpperCase());
// // });

// arr.forEach(function (name) {
//   console.log(name);
// });

// arr.forEach(console.log);

// // forEach gọi hàm callback 1 lần với mỗi
// // giá trị trong mảng, callback có thể nhận
// // tối đa 3 tham số(value, index, arr)

// // FIND
// let name;
// let test = arr.find(function (name) {
//   if (name.startsWith("T")) return true;
//   else return false;
// });

// console.log(test);

// // find() sử dụng để tìm 1 giá trị trong mảng khớp với
// // điều kiện được đánh giá bởi hàm callback truyền vào

// // callback phải được trả về là kết quả boolean (true|false)
// // cho biết giá trị đó có phù hợp với điều kiện hay không

// let test2 = arr.filter(function (name) {
//   return name.startsWith("T");
// });

// console.log(test2);

// // map()

// let test3 = arr.map(function (name) {
//   return name[0];
// });
// console.log(test3);

// let test4 = arr.map(function (name) {
//   return name.length;
// });

// console.log(test4);

let test5 = arr.reduce(function (total, number) {
  total += number;
  return total;
});

console.log(test5);
// Sort() sắp xếp theo chuỗi: tự động chuyển value về string và so sánh string
// sort() chỉ hoạt động tốt nếu các giá trị là chuỗi
// callback truyền vào sort phải trả về 1 giá trị số nguyên (âm, 0, dương)
// cho biết giá trị nào nhỏ hơn

let test6 = arr.sort(function (num1, num2) {
  if (num1 < num2) return -1;
  else return 1;
});

console.log(test6);

let test7 = arr.sort(function (stu1, stu2) {
  if (stu1.name > stu2.name) return 1;
  else return -1;
});

console.log(test7);

// về tìm hiểu finIndex() , reduceRight(), some()
