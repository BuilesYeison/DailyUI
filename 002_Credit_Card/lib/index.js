"use strict";

var cardNumberInfo = document.querySelector(".number-info");
var cardExpiryInfo = document.querySelector(".expiry-info");
var cardNameInfo = document.querySelector(".name-info");
var inputs = document.querySelectorAll("input");
var cdType = document.querySelector(".cd-type");
var advice = document.querySelector(".advice");
var modal = document.querySelector(".modalize");
var modalCta = document.querySelector(".modal-cta");
var btnProceed = document.querySelector(".btn");
var creditCardInfo = {
  number: [],
  expiry: "",
  holder: "",
  cvv: ""
};
var mastercardStartWith = ["51", "52", "53", "54", "55", "222100-272099"];
inputs.forEach(function (input) {
  input.addEventListener('input', function () {
    switch (input.id) {
      case "card_number":
        cardNumberInfo.innerHTML = input.value;

        if (cardNumberInfo.textContent.startsWith("4")
        /*&&cardNumberInfo.textContent.length>=13*/
        ) {
            cdType.innerHTML = "<i class='cd-type bx bxl-visa' ></i>";
          } else {
          cdType.innerHTML = "<i class='bx bx-credit-card-front' ></i>";
        }

        mastercardStartWith.forEach(function (n) {
          if (cardNumberInfo.textContent.startsWith(n)) {
            cdType.innerHTML = "<i class='cd-type bx bxl-mastercard' ></i> MasterCard";
          }
        }); //validation

        if (cardNumberInfo.textContent.length < 13) {
          advice.innerHTML = "Must be more than 13 characters";
        } else {
          advice.innerHTML = "";
        }

        if (cardNumberInfo.textContent.length === 0) {
          advice.innerHTML = "";
        }

        break;

      case "card_expiry":
        cardExpiryInfo.innerHTML = input.value;
        break;

      case "card_name":
        cardNameInfo.innerHTML = input.value.toUpperCase();
        break;

      default:
        console.log("nop");
        break;
    }
  });
});
btnProceed.addEventListener("click", function () {
  return modal.style.display = "inherit";
});
modalCta.addEventListener("click", function () {
  return modal.style.display = "none";
});