const months = [
  "january",
  "february",
  "march",
  "april",
  "May",
  "june",
  "july",
  "August",
  "september",
  "november",
  "december",
];
const day = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "Friday",
  "Sutarday",
  "sunday",
];
const deadLine = document.querySelector(".endDate");
let days = document.querySelector(".days").firstChild.nextSibling;
let hours = document.querySelector(".hours").firstChild.nextSibling;
let mins = document.querySelector(".mins").firstChild.nextSibling;
let secs = document.querySelector(".secs").firstChild.nextSibling;
let GiveAway = document.querySelector(".contdown-container");
const finalDate = new Date(2022, 04, 22, 17, 30, 30);
deadLine.textContent = `${day[finalDate.getDay()]}, ${finalDate.getDate()} ${
  months[finalDate.getMonth()]
} ${finalDate.getFullYear()} ${finalDate.getHours()}:${finalDate.getMinutes()} hrs`;

const getRemainingTime = (future) => {
  let now = new Date();
  let daysCalc = 1000 * 60 * 60 * 24;
  let hoursCalc = 1000 * 60 * 60;
  let minsCalc = 1000 * 60;
  let secsCalc = 1000;
  let remMs = future.getTime() - now.getTime();
  let remdays = Math.floor(remMs / daysCalc);
  let remHrs = Math.floor((remMs % daysCalc) / hoursCalc);
  let remMins = Math.floor(((remMs % daysCalc) % hoursCalc) / minsCalc);
  let remSecs = Math.floor(
    (((remMs % daysCalc) % hoursCalc) % minsCalc) / secsCalc
  );
  const format = (a) => {
    if (a < 10) {
      return `0${a}`;
    } else {
      return a;
    }
  };
  days.textContent = format(remdays);
  hours.textContent = format(remHrs);
  mins.textContent = format(remMins);
  secs.textContent = format(remSecs);
  if (remMs < 0) {
    clearInterval(contDown);
    GiveAway.innerHTML = `<h4 class='expired'> Sorry! this GiveAway has ended</h4>`;
  }
};
let contDown = setInterval(() => {
  getRemainingTime(finalDate);
}, 1000);
