const checkbox = document.querySelector("#checkbox");
const header = document.querySelector(".header");
const container = document.querySelector(".container");

console.log(checkbox.checked);

const switcher = () => {
  if (checkbox.checked) {
    container.classList.add("container-dark");
    header.classList.add("header-dark");
  } else {
    container.classList.remove("container-dark");
    header.classList.remove("header-dark");
  }
};

checkbox.addEventListener("change", switcher);
