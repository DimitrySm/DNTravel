const menuButton = document.querySelector(".menu-button");
const topicsListWrapper = document.querySelector(".topics__list__wrapper");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("clicked");
  topicsListWrapper.classList.toggle("active");
});
