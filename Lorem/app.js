const paragraphs = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
        tenetur eaque tempora dolor nostrum reiciendis, adipisci voluptatibus
        et. Minus, incidunt doloribus voluptas earum quasi eveniet accusamus
        autem natus, deleniti similique odit perferendis ab! Quo asperiores
        animi consequuntur qui est.`,
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae facilis
        dolore omnis provident, obcaecati, consequuntur magnam at blanditiis
        porro aliquam molestias eius in corporis quibusdam.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro ad
        dolorem ea possimus natus aliquam, fuga vero recusandae nobis
        reprehenderit eius animi laudantium? Dolorum non numquam voluptate modi
        ipsam, dolores assumenda harum officia iure ad fugit minima consequatur
        sapiente.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
        molestiae velit veniam, similique dolor veritatis blanditiis dolores
        laboriosam ullam, accusantium fugiat eius. Velit, fugiat ab. Aut.`,
  ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure minus
        repellat ab explicabo recusandae saepe! Sit, aspernatur corrupti enim
        omnis assumenda recusandae ratione sapiente aut dolore modi cupiditate
        ducimus, iste, minus quos!`,
  ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
        dolores rerum qui ullam at aut dicta veritatis et natus praesentium.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt
        quod quam eaque dolore magnam deleniti placeat ipsa, earum quisquam a
        reprehenderit, sint nam?`,
  ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        porro dolorum, autem quibusdam nobis magni quos fugiat maxime earum
        sequi blanditiis deleniti voluptate at soluta praesentium quidem cumque
        nulla tenetur beatae?`,
  ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        porro dolorum, autem quibusdam nobis magni quos fugiat maxime earum
        sequi blanditiis deleniti voluptate at soluta praesentium quidem cumque
        nulla tenetur beatae?`,
];
const thisForm = document.querySelector(".form");
const value = document.getElementById("form-input");
const paragraphsContainer = document.querySelector(".lorem");
thisForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let plenght = value.value;
  if (plenght) {
    plenght = Number(plenght);
    let newPara = paragraphs.slice(0, plenght);
    let items = newPara.map((item) => `<p>${item}</p>`);
    paragraphsContainer.innerHTML = items;
  } else {
    items = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    paragraphsContainer.innerHTML = items;
  }
});
