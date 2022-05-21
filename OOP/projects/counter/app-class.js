class Counter {
  constructor(element, amount) {
    this.value = amount;
    this.resetBtn = element.querySelector(".res");
    this.increaseBtn = element.querySelector(".inc");
    this.decreaseBtn = element.querySelector(".dec");
    this.valueDOM = element.querySelector(".count-amount");
    this.valueDOM.textContent = amount;
    this.increaseBtn.addEventListener("click", this.increase.bind(this));
    this.decreaseBtn.addEventListener("click", this.decrease.bind(this));
    this.resetBtn.addEventListener("click", this.reset.bind(this));
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}
const first = document.querySelector(".first");
const second = document.querySelector(".second");

const firstCounter = new Counter(first, 50);
const secondCounter = new Counter(second, 400);
