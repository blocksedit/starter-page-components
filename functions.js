/* Menu item active state */

var currentURL = window.location.href;
var navItems = document.querySelectorAll('a');

function matchExact(r, str) {
  var match = str.match(r);
  return match && str === match[0];
}

for (var i = 1; i < navItems.length; ++i) {
  if (matchExact(currentURL.match(navItems[i].href), currentURL)) {
    navItems[i].classList.add("on");
  }
}

/* Mobile navigation */

document.querySelector(".menu").onclick = function() {
  document.querySelector("nav.primary").classList.add("mobile");
}
document.querySelector(".close").onclick = function() {
  document.querySelector("nav.primary").classList.remove("mobile");
}