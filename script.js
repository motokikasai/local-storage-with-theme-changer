const checkbox = document.querySelector("#checkbox");
const header = document.querySelector(".header");
const container = document.querySelector(".container");

// GET Local Storage onload...

const switcher = () => {
  if (checkbox.checked) {
    container.classList.add("container-dark");
    header.classList.add("header-dark");
  } else {
    container.classList.remove("container-dark");
    header.classList.remove("header-dark");
  }

  //   SET Local Storage to save the theme selected by user
  localStorage.setItem("checkbox", checkbox.checked);
};

// Add Change Event for switching themes...
checkbox.addEventListener("change", switcher);
