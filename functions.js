/* Mobile navigation */

document.querySelector(".menu").onclick = function() {
  document.querySelector("nav.primary").classList.add("mobile");
}
document.querySelector(".close").onclick = function() {
  document.querySelector("nav.primary").classList.remove("mobile");
}