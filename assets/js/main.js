// open-close toggel button

const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");

navOpen.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// Remove link mobile

const navLinks = document.querySelectorAll(".nav__items");

const linkClick = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};

navLinks.forEach((e) => e.addEventListener("click", linkClick));

// Animation On Scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log(entry);
    if (
      (entry.isIntersecting &&
        entry.target.classList.contains("hidden-left")) ||
      entry.target.classList.contains("hidden-right") ||
      entry.target.classList.contains("hidden-bottom")
    ) {
      entry.target.classList.add("show");
    }
    if (!entry.isIntersecting) {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
const hiddenElementsRight = document.querySelectorAll(".hidden-right");
const hiddenElementsBottom = document.querySelectorAll(".hidden-bottom");
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));
hiddenElementsBottom.forEach((el) => observer.observe(el));
