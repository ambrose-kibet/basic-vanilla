const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let dispayText = document.querySelector(".text");

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
btn.addEventListener("click", () => {
  let displayColor = "#";
  for (let index = 0; index < 6; index++) {
    displayColor += hex[getRandomNumber()];
  }
  body.style.backgroundColor = displayColor;
  dispayText.textContent = displayColor;
});
