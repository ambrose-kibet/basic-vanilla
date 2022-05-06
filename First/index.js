const btn = document.querySelector(".btn");
const topHeading = document.querySelector(".new");
const bottomHeading = document.querySelector(".old");
btn.addEventListener(
  "click",
  (e) => {
    if (!topHeading.classList.contains("blue")) {
      topHeading.classList.add("blue");
      bottomHeading.classList.add("red");
      topHeading.classList.remove("red");
      bottomHeading.classList.remove("blue");
    } else {
      topHeading.classList.remove("blue");
      bottomHeading.classList.remove("red");
      topHeading.classList.add("red");
      bottomHeading.classList.add("blue");
    }
    console.log("i");
    setTimeout(() => {
      console.log("helo");
    });
  },
  0
);
