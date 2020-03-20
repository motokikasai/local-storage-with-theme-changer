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

const switcher = () => {
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

// Add Change Event for switching themes...
checkbox.addEventListener("change", switcher);
