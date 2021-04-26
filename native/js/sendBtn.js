const searchBtn = document.querySelector(".search-btn");
const searchBtnIcon = document.querySelector(".search-btn-icon");

searchBtn.addEventListener("click", () => {
  searchBtnIcon.classList.add("clicked");
  setTimeout(() => {
    searchBtnIcon.classList.remove("clicked");
  }, 1000);
  // searchBtnIcon.classList.toggle("clickedBack");
  // topicsListWrapper.classList.toggle("active");
});
