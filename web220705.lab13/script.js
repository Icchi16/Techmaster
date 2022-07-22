// let n = 10;

// typeof n;

// n = new Number(10);

// n.toString(); // chuyển đổi hệ cơ số
// n.toFixed(2); //giới hạn về số thập phân

//  - indexOf không tìm thấy giá trị sẽ trả về -1

// (1)
// function capitalize(str) {
//   return console.log(
//     str.trim().slice(0, 1).toUpperCase() + str.trim().slice(1).toLowerCase()
//   );
// }

function capitalize(str) {
  let name;
  let firstLetter;
  let rest;
  name = str.trim();
  firstLetter = name.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  rest = name.slice(1);
  rest = rest.toLowerCase();
  name = firstLetter + rest;
  return console.log(name);
}

capitalize("    chao em anh dung day tu chieu!     ");

// 1. Là dãy ký tự đặt trong "", '', ``
// 2. Mỗi ký tự trong chuỗi thì được đánh thứ tự
// (chỉ mục - index) bắt đầu từ 0
// 3. Chuỗi là một đối tượng built-in, và có các phương thức kế
// thừa từ String.Prototype
// 4. Chuỗi là bất biến immutable, các phương thức của chuỗi thì không
// biết đổi chuỗi mà trả về 1 chuỗi mới
// 5. Lưu ý tất cacr phương thức đều có thể nối được |
// Thuộc tính length cho biết độ dài chuỗi

// LƯU Ý KI TÌM HIỂU PHƯƠNG THỨC
// 1. Phương thức thuộc về kiểu đổi tượng nào/sử dụng để làm gì
// 2. Các phương thức nhận tham số gì/trả về kết quả là gì
// 3. Các phương thức có biến đổi trực tiếp giá trị (đối tương) hay không

// CÁC LƯU Ý VỀ DATETIME
// 1. Các giá trị khi được tạo/thay đổi thì tự động điều chỉnh (adjust)
//  nếu như giá trị không phù hợp/vượt quá phạm vi
// 2. Giá trị tháng thì trong khoảng 0 - 11, khi thao tác phải
// tăng/giảm 1 tháng
// 3. Một số phương thức Date.now()/getTime() => trả về số
//  miliseconds đã trôi qua tính từ thời điểm UNIX Time

// // typeof Array = object
// length cập nhật theo số phần tử trong mảng;
// length = 0 ==> xóa sạch phẩn tử trong mảng

let names = ["Hùng", "Dũng", "Trung", "Tùng", "Dung"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let name of names) {
  console.log(name);
}
//  for sử dụng cho tất cả cá loại sequence

for (let char of "Hello") {
  console.log(char);
}
