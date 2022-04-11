const btnRandom = document.getElementById("random");
const btnHex = document.getElementById("hex");
const title = document.getElementById("color");
const hearth = document.getElementById("hearth");
const textC = document.getElementById("text");
const input = document.getElementById("input");

// Button Random
btnRandom.addEventListener("click", function random() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  title.style.color = `#${randomColor}`;
  document.getElementById("randomColor").style.background = `#${randomColor}`;
  hearth.style.color = `#${randomColor}`;
  textC.textContent = `#${randomColor}`;
});

// Checking if the input is Valid (The user dont have to type # )
var inputx = document.getElementById("input");
input.addEventListener("keyup", (event) => {
  let regEx = /^[0-9a-fA-F]+$/;
  let isHex = regEx.test(event.target.value.toString());
  if (!isHex) {
    input.value = input.value.slice(0, -1);
  }
});

// Button Hex
btnHex.addEventListener("click", function hex() {
  document.getElementById("hexColor").style.background = `#${input.value}`;
});
