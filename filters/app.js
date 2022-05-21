const form = document.querySelector(".form");
const inputValue = document.querySelector("#search");
const btnContainer = document.querySelector(".filter-btns");
const ItemsContainer = document.querySelector(".items-container");
let newItems = [...products];

let displayBtns = ["all", ...new Set(newItems.map((item) => item.company))];
btnContainer.innerHTML = displayBtns
  .map((item) => {
    return `<button type="button" class="btn">${item}</button>`;
  })
  .join("");

const initialDisplay = () => {
  let displayItems = newItems
    .map((item) => {
      const { title, image, company, price } = item;
      return `<article class="card">
          <div class="card-body">
            <img
              src="${image}"
              alt="${title}"
              class="img"
            />
          </div>
          <div class="card-footer">
            <h4>${title}</h4>
            <p>$${price}</p>
          </div>
        </article>`;
    })
    .join("");
  ItemsContainer.innerHTML = displayItems;
};
initialDisplay();
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  let criteria = inputValue.value;
  newItems = products.filter((items) =>
    items.title.toLowerCase().includes(criteria.toLowerCase())
  );
  if (newItems.length < 1) {
    return (ItemsContainer.innerHTML =
      '<h3 class="error"> Sorry No items match your criteria ! </h3>');
  }
  initialDisplay();
});
let filterButtons = [...btnContainer.querySelectorAll(".btn")];
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let criteria = e.target.textContent.toLowerCase();
    newItems = products.filter((items) => {
      if (criteria === "all") {
        return items;
      }
      return items.company.toLowerCase() === criteria;
    });
    inputValue.value = "";
    initialDisplay();
  });
});
