const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();

  console.log(randomNumber);

  const bgClr = (document.body.style.backgroundColor = colors[randomNumber]);
  color.textContent = bgClr;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
