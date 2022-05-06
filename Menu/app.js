const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/pexels-viktoria-alipatova-2130166.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/pexels-valeria-boltneva-1833349.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/pexels-sebastian-coman-photography-3655916.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/pexels-sebastian-coman-photography-3590401.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/pexels-malidate-van-842142.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/pexels-dmitry-zvolskiy-1721932.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/pexels-cottonbro-3338537.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/pexels-chan-walrus-1059943.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/pexels-anthony-leong-2092906.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const displayItems = document.querySelector(".items-container");
let displayBtns = new Set(["all", ...menu.map((item) => item.category)]);
displayBtns = [...displayBtns];

const buttonContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", () => {
  let menuItems = menu.map((item) => {
    const { id, title, price, img, desc } = item;
    return `<article class="card" id='${id}'>
          <div class="card-header">
            <img
              src="${img}"
              alt="${title}"
              class="img"
            />
          </div>
          <div class="card-body">
            <h5 class="name">
              ${title} <span class="price">$${price}</span>
            </h5>
            <p>
             ${desc}
            </p>
          </div>
        </article>`;
  });
  displayItems.innerHTML = menuItems;
  let menuButtons = displayBtns
    .map((item) => `<button type="button" class="menu-btn">${item}</button>`)
    .join("");
  buttonContainer.innerHTML = menuButtons;
  let filterBtn = buttonContainer.querySelectorAll(".menu-btn");
  filterBtn.forEach((item) =>
    item.addEventListener("click", (e) => {
      let criteria = e.currentTarget.textContent;
      let allItems = menu;
      if (criteria === "all") {
        let allItems = menu.map((item) => {
          const { id, title, price, img, desc } = item;
          return `<article class="card" id='${id}'>
          <div class="card-header">
            <img
              src="${img}"
              alt="${title}"
              class="img"
            />
          </div>
          <div class="card-body">
            <h5 class="name">
              ${title} <span class="price">$${price}</span>
            </h5>
            <p>
             ${desc}
            </p>
          </div>
        </article>`;
        });
        displayItems.innerHTML = allItems;
      } else {
        allItems = menu
          .filter((item) => item.category === criteria)
          .map((food) => {
            const { id, title, price, img, desc } = food;
            return `<article class="card" id='${id}'>
          <div class="card-header">
            <img
              src="${img}"
              alt="${title}"
              class="img"
            />
          </div>
          <div class="card-body">
            <h5 class="name">
              ${title} <span class="price">$${price}</span>
            </h5>
            <p>
             ${desc}
            </p>
          </div>
        </article>`;
          });

        displayItems.innerHTML = allItems;
      }
    })
  );
});
