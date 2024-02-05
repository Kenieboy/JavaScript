const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakebutton = document.querySelector(".shake");
// const width = canvas.width;
// const height = canvas.height;

const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
const MOVE_AMOUNT = 10;

console.log(width, height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

window.addEventListener("keydown", handleKey);

function handleKey(e) {
  // e.preventDefault();

  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
    console.log("Trigger Key!");
  }
}

function draw({ key }) {
  let hue = 0;

  hue += 1;
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

  ctx.beginPath();

  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function clearCanvas() {
  canvas.classList.add("shake");
  canvas.addEventListener(
    "animationend",
    function () {
      console.log("done the shake!");
      canvas.classList.remove("shake");
    },
    { once: true }
  );
  ctx.clearRect(0, 0, width, height);
}

shakebutton.addEventListener("click", clearCanvas);
