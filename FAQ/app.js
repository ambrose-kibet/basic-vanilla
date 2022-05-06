const show = document.querySelectorAll(".btn-plus");
const hide = document.querySelectorAll(".btn-minus");
const toggleBtn = document.querySelectorAll(".toggle");
hide.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.nextElementSibling.classList.add(
      "hide"
    );
    e.currentTarget.classList.add("hide");
    e.currentTarget.previousElementSibling.classList.remove("hide");
  });
});
show.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.nextElementSibling.classList.remove(
      "hide"
    );
    e.currentTarget.classList.add("hide");

    e.currentTarget.nextElementSibling.classList.remove("hide");
  });
});
toggleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
  });
});
