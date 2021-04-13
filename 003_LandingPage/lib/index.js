"use strict";

var header = document.getElementById("header");
header.addEventListener("mousemove", function (evt) {
  document.querySelectorAll(".layer").forEach(function (element) {
    var speed = element.getAttribute("data-speed");
    var x = (window.innerWidth - evt.pageX * speed) / 100;
    var y = (window.innerHeight - evt.pageY * speed) / 100;
    element.style.transform = "translateX(".concat(x, "px) translateY(").concat(y, "px)");
  });
});