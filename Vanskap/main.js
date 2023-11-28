import "./style.css";

const menuBar = document.querySelector("[data-menuBar]");
const dataNavigation = document.querySelector("[data-navigation]");

menuBar.addEventListener("click", () => {
  // console.log("itsworking");

  dataNavigation.classList.toggle("active");
});
