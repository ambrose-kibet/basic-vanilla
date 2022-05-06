const togglerBtn = document.querySelector(".bars-btn");
const links = document.querySelector(".links");
let linkHeight = links.getBoundingClientRect().height;
togglerBtn.addEventListener("click", (e) => {
  links.classList.toggle("show");
  if (!links.classList.contains("show")) {
    links.style.height = `${linkHeight}px`;
  } else {
    links.style.height = "0px";
  }
});
