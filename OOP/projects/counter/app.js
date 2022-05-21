function Counter(element, value) {
  this.increaseBtn = element.querySelector(".inc");
  this.decreaseBtn = element.querySelector(".dec");
  this.resetBtn = element.querySelector(".res");
  this.valueDOM = element.querySelector(".count-amount");
  this.valueDOM.textContent = value;
  this.value = value;
  this.resetBtn.addEventListener("click", this.reset.bind(this));
  this.decreaseBtn.addEventListener("click", this.decrease.bind(this));
  this.increaseBtn.addEventListener("click", this.increase.bind(this));
}
Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};
const first = document.querySelector(".first");
const second = document.querySelector(".second");

// functionality
const firstCounter = new Counter(first, 101);
const secondCounter = new Counter(second, 201);
