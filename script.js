const checkbox = document.querySelector("#checkbox");
const iconCover = document.querySelector(".cover");
const header = document.querySelector(".header");
const container = document.querySelector(".container");
const content = document.querySelector(".content");

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
content.style.fontSize = localStorage.getItem("radioButton");

// EVent Listener function
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

// Add Event Listeners to Radio buttons...
const radioBtns = document.querySelectorAll('[type="radio"]');

for (let i = 0; i < radioBtns.length; i++) {
  const radioBtn = radioBtns[i];
  console.log(radioBtn.checked);

  radioBtn.addEventListener("change", () => {
    if (radioBtn.checked) {
      content.style.fontSize = radioBtn.dataset.radio;

      // SET Local Storage to save the font size selected by user
      localStorage.setItem("radioButton", radioBtn.dataset.radio);
    }
  });
}

// Add Change Event for switching themes...
checkbox.addEventListener("change", themeSwitcher);
