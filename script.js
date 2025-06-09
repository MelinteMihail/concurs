AOS.init();

window.addEventListener("scroll", function () {
  const arrow = document.querySelector(".arrow");

  if (window.scrollY > 10) {
    arrow.classList.add("hide");
  } else {
    arrow.classList.remove("hide");
  }
});
