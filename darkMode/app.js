const articleContainer = document.querySelector(".article-container");
const toggleBtn = document.querySelector(".toggle-btn");
const main = document.documentElement;
toggleBtn.addEventListener("click", () => {
  main.classList.toggle("dark-theme");
  let theme = main.classList;
  localStorage.setItem("theme", theme);
});
window.addEventListener("DOMContentLoaded", () => {
  let tempTheme = localStorage.getItem("theme");
  if (tempTheme) {
    main.classList.add(tempTheme);
  } else {
    return;
  }
});

const displayArticles = articles
  .map((item) => {
    const { title, date, length, snippet } = item;
    const formatDate = moment(date).format("MMMM Do YYYY");
    return ` <article class="article">
        <h3>${title}</h3>
        <p><span class="date"> ${formatDate}</span> ${length}min read</p>
        <p>
          ${snippet}
        </p>
      </article>`;
  })
  .join("");

articleContainer.innerHTML = displayArticles;
