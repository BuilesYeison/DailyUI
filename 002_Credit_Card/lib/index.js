"use strict";

var cardNumberInfo = document.querySelector(".number-info");
var cardExpiryInfo = document.querySelector(".expiry-info");
var cardNameInfo = document.querySelector(".name-info");
var inputs = document.querySelectorAll("input"); //npm run build continuar con la actualizacion en directo de la tarjeta, agregar validaciones a los inputs, subir a git

inputs.forEach(function (input) {
  input.addEventListener('input', function () {
    switch (input.id) {
      case "card_number":
        cardNumberInfo.innerHTML = input.value;
        break;

      default:
        console.log("nop");
        break;
    }
  });
}); //console.log(inputs)