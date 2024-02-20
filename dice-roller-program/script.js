function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  let values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="img/${value}.png" alt="Dice-${value}"/>`);
  }

  console.log(images);
  console.log(values);

  diceImages.textContent = `<p>dice: ${values.join(", ")}</p>`;
  diceImages.innerHTML = images.join("");
}
