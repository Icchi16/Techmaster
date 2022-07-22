// VONG LẶP LOOP

// for (begin; conditionl; step) {}

for (let i = 1; i < 11; i = i + 1) {
  console.log(i);
}

for (let i = 1; i < 101; i++) {
  if (i % 2 == 0) console.log(i);
}

for (let i = 1; i < 11; i++) {
  console.log("3 x " + i + " = " + 3 * i);
}

3;
for (let i = 100; i > 0; i--) if (i % 2 != 0) console.log(i);

// // WHILE
// // while sử dụng khi

let accept = false;

while (accept === false) {
  // console.log("Yêu anh đi ;)")
  accept = confirm("Yêu anh đi ;D");
}

console.log("Đi hotel thôi!");

// const user = {
//   username: "Duy",
//   password: "123456",
// };

// let username;
// let password;

// while (username != user.username || password != user.password) {
//   username = prompt("Tên tài khoản");
//   password = prompt("Nhập mật khẩu");
// }

// console.log("Chào mừng " + user.username + " quay trở lại");

// "CONTINUE"
//  bỏ qua thao tác hiện tại -> chuyển sang tiếp theo

// "BREAK"
// dừng vòng lặp

const girls = ["Xinh", "Xấu", "Xấu", "Xinh", "Xấu"];
for (let each of girls) {
  if (each != "Xinh") {
    break;
  }
  console.log("Nhắn tin");
  console.log("Đi chơi");
  console.log("Đi xem phim");
  console.log("Đi ăn");
  console.log("Tặng Iphone 13 Pro Max");
  console.log("Mua sắm");
}
