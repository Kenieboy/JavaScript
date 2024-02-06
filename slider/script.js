const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const img = document.querySelectorAll(".slider img");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = img.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((btn) => {
    btn.style.backgroundColor = "transparent";
  });
};

buttons.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    btn.style.backgroundColor = "white";
  })
);

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800})`;
  slideNumber = length;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});