"use strict";

var header = document.getElementById("header");
var aboutImg = document.querySelector(".about-img");
var about = document.querySelector(".about-content");
var darkModeSwitch = document.querySelector(".dark-mode-switch");
var darkModeIcon = document.querySelector(".bx-dark-mode");
var emailInput = document.querySelector("#email");
darkModeSwitch.addEventListener("input", function (evy) {
  if (darkModeSwitch.checked) {
    darkModeIcon.classList.add("bxs-sun");
    darkModeIcon.classList.remove("bxs-moon");
    emailInput.style.color = "#FBFEFF";
    document.querySelector("#main").style.backgroundColor = "#03080A";
    document.querySelectorAll(".text").forEach(function (text) {
      text.style.color = "#FBFEFF";
      console.log(text);
    });
  } else {
    darkModeIcon.classList.remove("bxs-sun");
    darkModeIcon.classList.add("bxs-moon");
    emailInput.style.color = "#03080A";
    document.querySelector("#main").style.backgroundColor = "#FBFEFF";
    document.querySelectorAll(".text").forEach(function (text) {
      text.style.color = "#03080A";
      console.log(text);
    });
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