import { login } from "./api.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  try {
    const { data, headers } = await login({ username, password });
    const [_, token] = headers.authorization.split(" ");
    localStorage.setItem("token", token);
    console.log(token);

    alert("Login Sucessfully, redirect to homepage");

    window.location.href = "index.html";
  } catch (response) {
    const { data, headers } = await login({ username, password });
    const { token } = headers.authorization.split(" ");
    console.log(data, token);

    console.log(response);
    alert(response.data.error);
  }
});
