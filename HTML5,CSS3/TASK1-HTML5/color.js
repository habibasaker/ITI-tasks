let redRange = document.getElementById("red");
let greenRange = document.getElementById("green");
let blueRange = document.getElementById("blue");

let para = document.getElementById("txt");

redRange.addEventListener("input", changeColor);
greenRange.addEventListener("input", changeColor);
blueRange.addEventListener("input", changeColor);

function changeColor() {

    let r = redRange.value;
    let g = greenRange.value;
    let b = blueRange.value;

   para.style.color ="rgb(" + r + "," + g + "," + b + ")";
}