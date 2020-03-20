const checkbox = document.querySelector("#checkbox");
const iconCover = document.querySelector(".cover");
const header = document.querySelector(".header");
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const radioBtns = document.querySelectorAll('[type="radio"]');

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

// GET Local Storage for Font Size...
content.style.fontSize = localStorage.getItem("fontSize");

for (let i = 0; i < radioBtns.length; i++) {
  const radioBtn = radioBtns[i];

  console.log(localStorage.getItem("radioChecked"));

  if (radioBtn.getAttribute("id") === localStorage.getItem("radioChecked")) {
    radioBtn.checked = true;
  }
}

// Theme Switcher callback function
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

// Add Change Event to theme switcher
checkbox.addEventListener("change", themeSwitcher);

// Add Event Listeners to Radio buttons
for (let i = 0; i < radioBtns.length; i++) {
  const radioBtn = radioBtns[i];

  radioBtn.addEventListener("change", () => {
    if (radioBtn.checked) {
      content.style.fontSize = radioBtn.dataset.radio;

      // SET Local Storage to save the font size selected by user
      localStorage.setItem("fontSize", radioBtn.dataset.radio);
      localStorage.setItem("radioChecked", radioBtn.getAttribute("id"));
    }
  });
}
