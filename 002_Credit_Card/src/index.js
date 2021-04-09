const cardNumberInfo = document.querySelector(".number-info");
const cardExpiryInfo = document.querySelector(".expiry-info");
const cardNameInfo = document.querySelector(".name-info")
const inputs = document.querySelectorAll("input")

//npm run build continuar con la actualizacion en directo de la tarjeta, agregar validaciones a los inputs, subir a git
inputs.forEach((input)=>{
    input.addEventListener('input',()=>{
        switch(input.id){
            case "card_number":
                cardNumberInfo.innerHTML = input.value
                break;
            default:
                console.log("nop");
                break;
        }
    });

});
//console.log(inputs)