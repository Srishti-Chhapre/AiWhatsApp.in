//navbar animation code

const box = document.getElementById("navbar");
navbar.addEventListener("animationend", () => {
  navber.style.animation = "move 1s forwards";
});
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");
  setTimeout(() => {
    navbar.classList.add("show-logo");
  }, 100);
  // Expand navbar after 2 seconds
  setTimeout(() => {
    navbar.classList.add("expand");
  }, 1000);
});
