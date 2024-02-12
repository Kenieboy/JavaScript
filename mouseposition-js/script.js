"use strict";

document.addEventListener("mousemove", function (event) {
  var x = event.clientX;
  var y = event.clientY;
  var coordinates = "X: " + x + ", Y: " + y;
  document.getElementById("coordinates").innerText = coordinates;
});

document.addEventListener("click", (e) => {
  console.log(e.screenX, e.screenY);
});
