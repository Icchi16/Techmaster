import { signup } from "./api.js";

const form = document.querySelector(".signup-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;
  const firstname = form.elements.firstname.value;
  const lastname = form.elements.lastname.value;

  try {
    await signup({
      username,
      password,
      firstname,
      lastname,
    });

    alert("Đăng ký thành công!");
  } catch ({ response }) {
    console.log(response.data.error);
    alert(response.data.error);
  }
});
