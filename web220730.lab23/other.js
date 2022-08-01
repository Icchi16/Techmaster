// let sum = (a, b) => (sum = a + b);

// AJAX
// Kỹ thuật cho pehps client và server giao tiếp/
// trao đổi dữ liệu ,mà không cần phải reload trang

// HTTP

// Trang tĩnh (HTML CSS) => JavaScript => reload trang
//  Trao đổi qua HTTP

// Gửi đi HTTP Request
// Startline : Path - Method _ HTTP Version
// Method GET (đọc dữ liệu) POST (tạo mới dữ liệu) PUT (chỉnh dữ liệu)
// Header
// Body

// -> Gửi về HTTP Response
// Status (Thành Công hay thất bại)
// 1xx - 2xx (thành công)
// 3xx (chuyển hướng)
// 4xx (lỗi phía client)
// 5xx (lõi server)

// Header: Meta
// Body: Data

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

// //   sử dụng thư viện thứ 3
// // Axios

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

const getUsers = () => axios.get("https://jsonplaceholder.typicode.com/users");

const e = (tag, attributes, ...children) => {
  //  Tạo ra thể tương úng vs tag
  const element = document.createElement(tag);

  // Gán tất cả thuộc tính cho element
  Object.assign(element, attributes);

  // Thêm các phần tử con
  element.append(...children);
  return element;
};

const createUserCard = (name, email, phone) => {
  e(
    "div",
    { className: "user" },
    e("div", { className: "user-name" }, name),
    e("div", { className: "user-email" }, email),
    e("div", { className: "user-phone" }, phone)
  );

  //   const userCard = document.createElement("div");
  //   userCard.classList.add("user");

  //   const userName = document.createElement("div");
  //   userName.classList.add("user-name");
  //   userName.textContent = name;

  //   const userMail = document.createElement("div");
  //   userMail.classList.add("user-email");
  //   userMail.textContent = email;

  //   const userPhone = document.createElement("div");
  //   userPhone.classList.add("user-phone");
  //   userPhone.textContent = phone;

  //   userCard.append(userName, userMail, userPhone);
};

const renderUserList = async () => {
  try {
    const { data } = await getUsers();

    // const html = data
    //   .map((user) => {
    //     return `<div class="user">
    //     <div class="user-name">${user.name}</div>
    //     <div class="user-email">${user.email}</div>
    //     <div class="user-phone">${user.phone}</div>`;
    //   })
    //   .join("");

    // document.querySelector(".user-list").innerHTML = html;

    const users = data.map(createUserCard);
    document.querySelector(".user-list").append(users);
  } catch (err) {
    console.log(err);
  }
};

renderUserList();

// innerHTML
