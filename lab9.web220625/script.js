// alert để hiện thị một thông báo trên trình duyệt
// alert(message)
// alert("Hello World!");

// Không bắt buộc ";" để kết thúc dòng lệnh
// Thuòng alert ít khi sử dụng do dừng chạy dòng lệnh

console.log("Xin chào Duy");
// Console.log để hiển thị thông báo (giá trị)
//  kêt quả ra tab Console
//  console.log(data);

// Ưu tiên sử dụng console.log

// Biến:
// Chương trình máy tình cần có input (data) để hoạt động
// Sau đó trả kết quả (output - cũng là data)

// Mỗi một trương trình con là 1 hàm function

// Có 3 cách khai biển: var, let, const
// let với const chỉ có thể khai báo một lần
// "const" dành cho hằng số không thay đổi như pi, ngày sinh, ...
// const thường được viết HOA const MY_BIRTHDAY = "..."

// cú pháp: keyword variableName = value;
let myName = "Duy";
let myAge = "28";
let myJob = "Marketer";
let myHobbies = "Design + Tech";
// Khia báo biến kèm vơi giá trị

let myPhoneNumber;
// Khai báo biến không kèm giá trị
// Biến giống như một cái hộp để thứ đựng các giá trị bên trong

myPhoneNumber = "0912345678";

// Thay đổi dữ liệu
myJob = "Dev";

console.log(myName);
console.log(myAge);
console.log(myJob);
console.log(myHobbies);
console.log(myPhoneNumber);

let todayLuckyNumber = 68;
let myHeight = 1.74;

let myLastName = "Nghiêm ";
//  Text đặt trong "" '' ``

let aimIHandsome = true; // 1
let aimIRich = false; // 0
//  Logic (Boolean) - chỉ có 2 hằng số true/false

let somthing; // sử dụng undefined cho giá trị chưa xác định được
// undefined - dại diện cho một giá trị chưa được xác định

let abc = null;
// null - đại diện cho một biến không có giá trị

// các khai biến tren là kiểu cơ bản - primitive
// object (đối tượng) - kiểu phức hợp
//  cho phép lưu trũ nhiều giá trị trong 1 biến duy nhất
// mỗi giá trị (value) ánuh xạ với 1 khoá (ket/proprerty)
// key: value
//

let duy = {
  name: "Duy",
  age: 28,
  job: "Marketer",
  hobbies: "Design + Tech",
  isHansome: true,
};

// in ra toan bo gia tri
console.log(duy);
console.error("WTF");

// cú pháp để truy cập từng giá trị đơn lẻ
// obj.key (dot notation)
console.log(duy.name);
console.log(duy.isHansome);

console.log(typeof todayLuckyNumber);
// kiểm tra loại biến
// jees quả là một chuỗi đại diện cho kiểu

console.log(typeof myName);
console.log(typeof isHansome);
console.log(typeof duy);

// function chương trình là
// cách để cấu trúc mã (gói các đoạn mã thành 1
// block/khối mã)

function greeting(name) {
  // function funcName(){}
  // console.log("Hàm nhận vào tham số có giá trị là:", name);
  console.log("Chào mừng", name, "đến với trang web");
  // sử dụng "," cho phép in hàng loạt giá trị
  console.log("Chào mừng " + name + " đến với trang web!");
}

// Gọi hàm: funcName();
greeting("Ba"); // name = "Ba"
greeting("Đạt"); // name = "Đạt"
greeting("Tuấn"); // name = "Tuấn"
greeting("Duy"); // name = "Duy"

// Input của hàm được khai báo bên trong () parameters

function sum(a, b) {
  let result = a + b;
  //   Sử dụng câu lệnh return để trả lại kết quả cho vị trí
  // gọi hàm
  return result;
}

const result = sum(1, 2);
console.log("Kết quả phép tính 1 + 2 = " + result);

// sub(a,b) thực hiện trừ a và b, trả lại kết quả
// div(a,b) thực hiện trừ a và b, trả lại kết quả
// mul(a,b) thực hiện trừ a và b, trả lại kết quả

// gọi mỗi hàm 2 lần, thông báo kết quả ra console

function sub(a, b) {
  let result = a - b;
  return result;
}

function div(a, b) {
  let result = a / b;
  return result;
}

function mul(a, b) {
  let result = a * b;
  return result;
}

console.log("Kết quả phép tính trừ 100 - 56 = " + sub(100, 56));
console.log("Kết quả phép tính trừ 24 - 60 = " + sub(24, 60));
console.log("Kết quả phép tính chia 10 / 5 = " + div(10, 5));
console.log("Kết quả phép tính trừ 13 / 4 = " + div(13, 4));
console.log("Kết quả phép tính nhân 0 x 4 = " + mul(0, 4));
console.log("Kết quả phép tính nhân 26 x 4 = " + mul(26, 4));

// Quy tắc chuyển đổi
// Có 1 toán hạng la chuỗi thì sẽ chuyển toản hạng còn lại thành chuỗi
//  Nhưng các kiểu dữ liệu khác thì chuyển về số và ra kết quả cộng số

//  Với tất cả các toán tử khác - * / % ** => chuyển về số => tính toán số

// Nếu là cộng NaN vơi chuỗi => trả về chuỗi
// Nếu là các phép tính khác là trả về NaN
