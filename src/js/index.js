// Make Moblie navigation work

const btnNavEL = document.querySelector(".btn-moblie-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});