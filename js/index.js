burger = document.querySelector(".burger");
dropDownMenu = document.querySelector(".dropDown__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("on");
  dropDownMenu.classList.toggle("active");
});
