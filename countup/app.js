const all = [...document.querySelectorAll(".number")];

const updateCount = () => {
  all.forEach((item) => {
    const value = parseInt(item.dataset.value);
    let el = item;
    let initialvalue = 0;
    let increment = Math.ceil(value / 1000);

    const increase = setInterval(() => {
      initialvalue += increment;
      if (initialvalue > value) {
        el.textContent = `${value}+`;
        clearInterval(increase);
        return;
      }
      el.textContent = `${initialvalue}+`;
    }, 1);
  });
};
updateCount();
