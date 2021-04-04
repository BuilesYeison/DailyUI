//iniatilize html objects as constants
const verifyEmailCard = document.querySelector(".verify-email-card");
const finalCard = document.querySelector(".final-card");
const dateCard = document.querySelector(".date-card");
const emailCard = document.querySelector(".email-card");
const inputEmail = document.getElementById("email");
const inputDate = document.getElementById("date");
const inputUserName = document.getElementById("username");
const inputPasswd = document.getElementById("passwd");
const inputRepeatPasswd = document.getElementById("repeat-passwd")
const emailCardButton = document.querySelector(".email-card-button");
const dateCardButton = document.querySelector(".date-card-button");
const finalCardButton = document.querySelector(".final-card-button");
const usernameHtmlText = document.querySelector(".username-text");
const checkBoxNews = document.getElementById("ckboxNews");

//the buttons are disabled for default
emailCardButton.classList.add("disabled-next-button");
dateCardButton.classList.add("disabled-next-button");
finalCardButton.classList.add("disabled-next-button");

//initialize variables that will have user information
let inputEmailValue;
let inputDateValue;
let ckIsChecked;
let userName;
let passwd;
let repeatPasswd;
let userCreated;

function user(email,receiveNews, bornDate, username, password){ //class with user that will get user information
    this.email = email;
    this.receiveNews = receiveNews;
    this.bornDate = bornDate;
    this.username = username;
    this.password = password;
}

function finalCardValidation(){//final vard validation for username passwords inputs
    userName = inputUserName.value;
    passwd = inputPasswd.value;
    repeatPasswd = inputRepeatPasswd.value;
    if(userName.length>2 && passwd.length >7 && repeatPasswd.length >7 && passwd === repeatPasswd){
        return true;
    }else{
        return false;
    }
}

inputEmail.addEventListener('input', (test)=>{//email validation
    inputEmailValue = inputEmail.value
    let atindex = inputEmailValue.indexOf('@');
    if(atindex === -1){
        emailCardButton.classList.add("disabled-next-button")
    }else{
        emailCardButton.classList.remove("disabled-next-button")
    }
});

[inputUserName,inputPasswd,inputRepeatPasswd].forEach(input=>{ //add validation for these three inputs
    input.addEventListener('input', (test)=>{
        if(finalCardValidation() === true){
            finalCardButton.classList.remove("disabled-next-button");
        }else{
            finalCardButton.classList.add("disabled-next-button");
        }
    
    });
});

inputDate.addEventListener('input', (test)=>{ //born date validation
    inputDateValue = inputDate.value
    if(inputDateValue.length > 0){
        dateCardButton.classList.remove("disabled-next-button")
    }else{
        dateCardButton.classList.add("disabled-next-button")
    }
});

emailCardButton.addEventListener('click',(evt)=>{ //actions when the user wants to continue with the register
    ckIsChecked = checkBoxNews.checked;
    emailCard.style.display = "none";
    dateCard.style.display = "grid";
    dateCard.classList.add("animated-card")
});

dateCardButton.addEventListener('click',(evt)=>{//actions when the user wants to continue with the register
    inputDateValue = inputDate.value;
    dateCard.style.display = "none";
    finalCard.style.display = "grid";
    finalCard.classList.add("animated-card")
});

finalCardButton.addEventListener('click',(evt)=>{//actions when the user wants to continue with the register
    userCreated = new user(inputEmailValue, ckIsChecked,inputDateValue,userName,passwd);//create an object with user information
    console.log(userCreated)
    finalCard.style.display = "none";
    verifyEmailCard.style.display = "grid";
    usernameHtmlText.innerHTML = userCreated.username;
    usernameHtmlText.style.color = "#f05454";
});