const count = document.querySelector(".count");
const togglers = document.querySelectorAll(".btn");
let countValue = 0;
togglers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const theClass = e.target.classList;
    if (theClass.contains("dec")) {
      countValue--;
    } else if (theClass.contains("inc")) {
      countValue++;
    } else {
      countValue = 0;
    }
    count.textContent = countValue;
  })
);
