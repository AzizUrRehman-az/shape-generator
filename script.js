let height = document.getElementById("height");
let width = document.getElementById("width");
let output = document.getElementById("box");
var color = document.getElementById("colorChoice");

const btnGenerate = document.getElementById("btnGenerate");
const btnReset = document.getElementById("btnReset");

btnGenerate.addEventListener("click", function () {
  height = height.value;
  width = width.value;
  color = color.value;

  output.style.height = height + "px";
  output.style.width = width + "px";
  output.style.backgroundColor = color;

  console.log(height, width);
});

btnReset.addEventListener("click", function () {
  window.location.reload();
});
