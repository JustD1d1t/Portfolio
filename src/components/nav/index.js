const hamburger = document.querySelector(".menu__hamburger");
const menu = document.querySelector(".menu--mobile");

const toggleMenu = () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
  document.body.classList.toggle("overflow-hidden");
};

const toggleTypeMenu = () => {
  if (window.innerWidth > 991) {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
  }
};

const closeMenu = (e) => {
  if (
    e.keyCode === 27 &&
    menu.classList.contains("active") &&
    hamburger.classList.contains("active")
  ) {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  }
};

window.addEventListener("keydown", closeMenu);

hamburger.addEventListener("click", toggleMenu);

window.addEventListener("resize", toggleTypeMenu);
