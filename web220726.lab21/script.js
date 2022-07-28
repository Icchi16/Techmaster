document.forms.ibm.addEventListener("submit", function (e) {
  e.preventDefault();
});

function calculateIbm() {
  let weight = +document.querySelector("input[name=weight]").value;
  let height = +document.querySelector("input[name=height]").value;
  let ibm;
  ibm = (weight / height ** 2).toFixed(2);

  const result = document.querySelector(".ibm-result");
  result.textContent = `Your result: ${ibm}`;

  const comment = document.querySelector(".comment");
  if (ibm < 18.5) {
    comment.textContent = "gaayf";
  } else if (ibm < 25) comment.textContent = "gaayf";
}

const submitBtn = document.querySelector("button[type=submit]");
submitBtn.addEventListener("click", calculateIbm);
