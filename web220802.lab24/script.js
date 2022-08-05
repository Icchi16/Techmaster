import { getUser } from "./api.js";
import { getTasks } from "./api.js";
// import { addTasks } from "./api.js";

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
        <li class="user-list-li user-signout">Signout</li>
      </ul>
    </div>
   `;

    const singoutBtn = document.querySelector(".user-signout");
    singoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      if (confirm("Do You Want To Signout?")) {
        getUser();
        alert("You've Singed Out!");
      }
    });

    const renderTask = async () => {
      const {
        data: { data },
      } = await getTasks();
      console.log(data);
      const taskList = document.querySelector(".task-list");
      if (data.length === 0) {
        taskList.innerHTML = `<div class="task-none">There is no ongoing tasks. Add some more</div>`;
      } else {
        const taskHTML = data.map((index) => {
          `<div class="task flex" id="${index.id}">
            <div class="task-id">${index.id}</div>
            <div class="task-text">${index.title}</div>
            <label for="completed"
              >Status:<input type="checkbox" id="completed" class="completed ${
                index.completed === true ? "checked" : ""
              }"
            /></label>
          </div>`;
        });
        taskList.innerHTML = taskHTML.join("");
      }
    };

    renderTask();
  })
  .catch((err) => {
    console.log(err);
  });
