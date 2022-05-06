const About = document.querySelector(".tabs-container");
const btns = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".text-container");
About.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("btn-active");
      e.target.classList.add("btn-active");
    });
    articles.forEach((article) => {
      article.classList.remove("active-text");
    });
    let currentArticle = document
      .getElementById(id)
      .classList.add("active-text");
  }
});
