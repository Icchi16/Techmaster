import { getUser } from "./api.js";
// import { getTodo } from "./api.js";

getUser()
  .then((user) => {
    document.querySelector(".user-info").innerHTML = `
    <div class="avatar-box">
      <img
        src="https://todo-api-with-auth.herokuapp.com${user.avatar}"
        alt="${user.firstname}"
        class="user-avatar"
      />
      </div>
      <div class="user-name">${user.firstname} ${user.lastname}</div>
      <div class="user-menu-container">
      <ul class="user-list-ol absolute">
        <li class="user-list-li user-profile">Profile</li>
        <li class="user-list-li user-avatar">Avatar</li>
        <li class="user-list-li user-signout">Sign out</li>
      </ul>
    </div>
   `;

    const singoutBtn = document.querySelector(".user-signout");
    singoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      if (confirm("Do You Want To Sign Out?")) {
        getUser();
        alert("You've Singed Out!");
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
