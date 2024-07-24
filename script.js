const searchContainer = document.querySelector(".search");
const button = document.querySelector(".btn");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  searchContainer.classList.toggle("active");

  if (searchContainer.classList.contains("active")) {
    input.focus();
  }
});
