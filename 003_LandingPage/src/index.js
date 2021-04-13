const header = document.getElementById("header")

header.addEventListener("mousemove",(evt)=>{
    document.querySelectorAll(".layer").forEach(element => {
        const speed = element.getAttribute("data-speed")
        const x = (window.innerWidth - evt.pageX*speed)/100
        const y = (window.innerHeight - evt.pageY*speed)/100

        element.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
});
