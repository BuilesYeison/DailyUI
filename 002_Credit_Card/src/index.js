const cardNumberInfo = document.querySelector(".number-info");
const cardExpiryInfo = document.querySelector(".expiry-info");
const cardNameInfo = document.querySelector(".name-info");
const inputs = document.querySelectorAll("input");
const cdType = document.querySelector(".cd-type");
const advice = document.querySelector(".advice");
const modal = document.querySelector(".modalize");
const modalCta = document.querySelector(".modal-cta")
const btnProceed = document.querySelector(".btn");
let creditCardInfo = {
    number: [],
    expiry: "",
    holder:"",
    cvv:""
}
const mastercardStartWith = ["51","52","53","54","55","222100-272099"]

inputs.forEach((input)=>{
    input.addEventListener('input',()=>{
        switch(input.id){
            case "card_number":
                cardNumberInfo.innerHTML = input.value
                if(cardNumberInfo.textContent.startsWith("4")/*&&cardNumberInfo.textContent.length>=13*/){
                    cdType.innerHTML = "<i class='cd-type bx bxl-visa' ></i>"
                }else{
                    cdType.innerHTML = "<i class='bx bx-credit-card-front' ></i>"
                }
                mastercardStartWith.forEach(n=>{
                    if(cardNumberInfo.textContent.startsWith(n)){
                        cdType.innerHTML = "<i class='cd-type bx bxl-mastercard' ></i> MasterCard"
                    }
                });

                //validation
                if(cardNumberInfo.textContent.length<13){
                    advice.innerHTML = "Must be more than 13 characters";
                }else{
                    advice.innerHTML = "";
                }
                if(cardNumberInfo.textContent.length === 0){
                    advice.innerHTML = "";
                }
                break;
            case "card_expiry":
                cardExpiryInfo.innerHTML = input.value
                break
            case "card_name":
                cardNameInfo.innerHTML =  input.value.toUpperCase()
                break
            default:
                console.log("nop");
                break;
        }
    });
});

btnProceed.addEventListener("click",()=>modal.style.display = "inherit");
modalCta.addEventListener("click",() => modal.style.display = "none");