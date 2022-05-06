const openBtn = document.querySelector(".bars-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
openBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
