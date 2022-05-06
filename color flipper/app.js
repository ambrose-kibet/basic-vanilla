const colors = [
  "#14213d",
  "#fca311",
  "#11fc7b",
  "#5711fc",
  "#d11a94",
  "#ee670d",
  "#ee0d0d",
  "#0deeee",
];
let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let dispayText = document.querySelector(".text");
let displayColor;
btn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * colors.length);
  displayColor = colors[randomNumber];
  dispayText.textContent = displayColor;
  body.style.backgroundColor = displayColor;
});
