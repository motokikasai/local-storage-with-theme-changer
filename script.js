const checkbox = document.querySelector("#checkbox");
const iconCover = document.querySelector(".cover");
const header = document.querySelector(".header");
const container = document.querySelector(".container");

// GET Local Storage onload...
if (localStorage.getItem("checkbox") == "true") {
  checkbox.checked = true;
  container.classList.add("container-dark");
  header.classList.add("header-dark");
  iconCover.style.right = "34px";
} else {
  container.classList.remove("container-dark");
  header.classList.remove("header-dark");
  iconCover.style.right = "80px";
}

const themeSwitcher = () => {
  if (checkbox.checked) {
    container.classList.add("container-dark");
    header.classList.add("header-dark");
    iconCover.style.right = "34px";
  } else {
    container.classList.remove("container-dark");
    header.classList.remove("header-dark");
    iconCover.style.right = "80px";
  }

  //   SET Local Storage to save the theme selected by user
  localStorage.setItem("checkbox", checkbox.checked);
};

const sizeController = () => {
  if (document.querySelector("#font-small").checked) {
    container.style.fontSize = "1rem";
  }
};

// console.log(document.querySelector("#font-medium").checked);

// Add Change Event for switching themes...
checkbox.addEventListener("change", themeSwitcher);

// Add Change Event for switching font sizes...
checkbox.addEventListener("change", sizeController);
