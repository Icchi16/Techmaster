// Control Structure: Cấu trúc điều khiển

// các cấu trúc:
// if else
// loop while
//

// switch case
// do while
// try catch

// IF ELSE
// Luuw ý về promt()
// 1. Nếu người dùng chọn cancel => null
// 2. Kết quả trả về khi người dùng nhập giá trị => string

let input = prompt("Vui lòng nhập một số bất kỳ", 0);
if (input % 2 == 0) {
  console.log("Đố là số chắn");
} else {
  console.log("Đó là số lẻ");
}

// CÁC LOẠI IF
// 1.
// 2. thực hiện đọna mã trong if nếu điều kiện đúng, néu điều kiện không đúng thì không làm gì cả

// if (condition) {
// }

// 3. Kiểm tra lần lượt từng điều kiện

// if (condition) {
// } else if (condition){
// }

// CÁCH ĐẺ LÀM IF ELSE TỐT:
// Khi các điều kiện nó không liên quan đến nhau => tách riêng ra từng if else
// VD

// Khi mà điều kiện nó liên quan đến nhau => kiểm tra điều kiện nhỏ nhất
// (biến / tập giá trị nhỏ nhất)
// Kết họp các điều kiện lại trong điều kiện có thể
// Nếu condition là biểu thức => tính toán trước => gắn vào biến => dễ đọc

// Cú pháp switch case:
switch (value) {
  case case1:
    // do sth
    break;
  case case2:
    // do sth
    break;
  default:
  // do sth
}

// néu ko có break thì sẽ không test các case khác
// có 2 cú pháp để điều khiển vòng lặp: "break" và "continue"
//  điểm khách việt với if else:
// switch chỉ có thể gán gia trị cho value
// if else có thể cho phép sử dụng 1 chuỗi lệnh
