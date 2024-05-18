document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".header__nav ul");

  mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});
