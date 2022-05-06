const modalOverlay = document.querySelector(".modal-overlay");
const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
openBtn.addEventListener("click", () => {
  modalOverlay.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("show");
});
