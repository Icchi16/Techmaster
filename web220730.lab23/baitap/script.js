const requestedAxios = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log("Get Data Success!");
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

const e = (tag, attributes, ...child) => {
  const element = document.createElement(tag);
  Object.assign(element, attributes);

  element.append(...child);
  return element;
};

const createPost = (id, title, body) => {
  return e(
    "div",
    { className: "post-card", id: id },
    e("h2", { className: "post-title" }, title),
    e("p", { className: "post-body" }, body),
    e("a", { className: "read-more", href: ""}, "Read more")
  );
};

const renderPost = async () => {
  const postContainer = document.querySelector(".post-container");
  console.log(postContainer);
  const { data } = await requestedAxios();
  const postList = data.map((index) =>
    postContainer.append(createPost(index.id, index.title, index.body))
  );

  console.log(data);
};

renderPost();

// const e = (tag, attributes, ...child) => {
//   const element = document.createElement("");
// };
