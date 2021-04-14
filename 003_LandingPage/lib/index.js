"use strict";

var header = document.getElementById("header");
var aboutImg = document.querySelector(".about-img");
var about = document.querySelector(".about-content");
var darkModeSwitch = document.querySelector(".dark-mode-switch");
var darkModeIcon = document.querySelector(".bx-dark-mode");
darkModeSwitch.addEventListener("input", function (evy) {
  if (darkModeSwitch.checked) {
    darkModeIcon.classList.add("bxs-sun");
    darkModeIcon.classList.remove("bxs-moon");
  } else {
    darkModeIcon.classList.remove("bxs-sun");
    darkModeIcon.classList.add("bxs-moon");
  }
});
header.addEventListener("mousemove", function (evt) {
  document.querySelectorAll(".layer").forEach(function (element) {
    var speed = element.getAttribute("data-speed");
    var x = (window.innerWidth - evt.pageX * speed) / 100;
    var y = (window.innerHeight - evt.pageY * speed) / 100;
    element.style.transform = "translateX(".concat(x, "px) translateY(").concat(y, "px)");
  });
});
about.addEventListener("mousemove", function (evt) {
  var speed = aboutImg.getAttribute("data-speed");
  var x = (window.innerWidth - evt.pageX * speed) / 100;
  var y = (window.innerHeight - evt.pageY * speed) / 100;
  aboutImg.style.transform = "translateX(".concat(x, "px) translateY(").concat(y, "px)");
});