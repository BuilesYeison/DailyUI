const header = document.getElementById("header");
const aboutImg = document.querySelector(".about-img");
const about = document.querySelector(".about-content");
const darkModeSwitch = document.querySelector(".dark-mode-switch");
const darkModeIcon = document.querySelector(".bx-dark-mode");
const emailInput = document.querySelector("#email");

darkModeSwitch.addEventListener("input",evy=>{
    if(darkModeSwitch.checked){
        darkModeIcon.classList.add("bxs-sun")
        darkModeIcon.classList.remove("bxs-moon")
        emailInput.style.color = "#FBFEFF"
        document.querySelector("#main").style.backgroundColor = "#03080A"
        document.querySelectorAll(".text").forEach(text=>{
            text.style.color = "#FBFEFF"
            console.log(text)
        })
    }else{
        darkModeIcon.classList.remove("bxs-sun")
        darkModeIcon.classList.add("bxs-moon")
        emailInput.style.color = "#03080A"
        document.querySelector("#main").style.backgroundColor = "#FBFEFF"
        document.querySelectorAll(".text").forEach(text=>{
            text.style.color = "#03080A"
            console.log(text)
        })
    }
})

header.addEventListener("mousemove", evt => {
    document.querySelectorAll(".layer").forEach(element => {
        const speed = element.getAttribute("data-speed")
        const x = (window.innerWidth - evt.pageX * speed) / 100
        const y = (window.innerHeight - evt.pageY * speed) / 100

        element.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
});

about.addEventListener("mousemove", evt => {
    const speed = aboutImg.getAttribute("data-speed")
    const x = (window.innerWidth - evt.pageX * speed) / 100
    const y = (window.innerHeight - evt.pageY * speed) / 100

    aboutImg.style.transform = `translateX(${x}px) translateY(${y}px)`})