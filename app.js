let currentOutput = document.querySelector(".current-output");
let previousOutput = document.querySelector(".previous-output");
let btns = document.querySelectorAll(".input");
let acBtn = document.getElementById("ac");
let delBtn = document.getElementById("del");
let equalBtn = document.getElementById("equal");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentOutput.value !== btn.value) {
      currentOutput.innerText += btn.value;
    }
  });
});

acBtn.addEventListener("click", () => {
  previousOutput.innerText = "";
  currentOutput.innerText = "";
});

delBtn.addEventListener("click", () => {
  currentOutput.innerText = currentOutput.innerText.slice(0, -1);
});

equalBtn.addEventListener("click", () => {
  if (
    currentOutput.innerText !== "undefined" &&
    currentOutput.innerText !== ""
  ) {
    previousOutput.innerText = currentOutput.innerText;
    currentOutput.innerText = eval(currentOutput.innerText);
  }
});
