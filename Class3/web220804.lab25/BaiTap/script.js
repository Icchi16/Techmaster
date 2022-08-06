let categoryStatus = document.querySelector(".mb-category");

categoryStatus.addEventListener("change", () => {
  console.log(categoryStatus.value);
  categoryLinkArr.forEach((index) => {
    const indexValue = index.textContent.toLowerCase().trim();
    index.classList.remove("selected");
    if (indexValue === categoryStatus.value) {
      index.classList.add("selected");
    }
  });
});

const categoryLinkArr = document.querySelectorAll(".category-link");

categoryLinkArr.forEach((index) => {
  index.addEventListener("click", () => {
    categoryLinkArr.forEach((index) => {
      index.classList.remove("selected");
    });
    index.classList.add("selected");
    categoryStatus.value = index.textContent.toLowerCase().trim();
  });
});

const hamMenu = document.querySelector(".menu-ham");
console.log(hamMenu);

hamMenu.addEventListener("click", () => {
  const modalMenu = document.querySelector(".ham-nav");
  modalMenu.classList.toggle("hidden");
});
