let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
let navLinks = document.querySelector("nav-links");
let links = document.querySelector(".nav-links li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
