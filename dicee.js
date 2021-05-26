var n = Math.floor(Math.random() * 6);
n += 1;
var m = Math.floor(Math.random() * 6);
m += 1;
var a = "images/dice" + n + ".png";
var b = "images/dice" + m + ".png";
document.querySelector(".img1").setAttribute("src", a);
document.querySelector(".img2").setAttribute("src", b);
if (n < m) {
  document.querySelector("h1").textContent = "Player Two Won!";
}
if (n > m) {
  document.querySelector("h1").textContent = "Player One Won!";
}
if (n === m) {
  document.querySelector("h1").textContent = "It's a Draw!";
}
