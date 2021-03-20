const btn = document.querySelector(".btn");
const img = document.querySelector(".container img");
const content = document.querySelector(".content");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", () => {
  fetch(URL).then((data) =>
    data.json().then((response) => displayData(response.value))
  );
});

function displayData(data) {
  img.classList.add("shake-img");
  content.textContent = data;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, Math.random() * 1000);
}
