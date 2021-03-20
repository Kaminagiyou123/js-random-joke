const btn = document.querySelector(".btn");
const img = document.querySelector(".container img");
const content = document.querySelector(".content");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  img.classList.add("shake-img");
  content.textContent = joke;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, Math.random() * 1000);
}
