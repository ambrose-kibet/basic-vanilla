const url = "https://icanhazdadjoke.com/";
const container = document.querySelector(".section");
const fetchBtn = document.querySelector(".random-btn");
const jokeContainer = document.querySelector(".joke");

fetchBtn.addEventListener("click", () => {
  getJoke();
});

const getJoke = async () => {
  jokeContainer.textContent = "Loading...";
  try {
    const resp = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    const data = await resp.json();
    jokeContainer.textContent = data.joke;
  } catch (error) {
    console.log(error);
    jokeContainer.textContent = "something went wrong!";
  }
};
getJoke();
