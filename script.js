

// Agregar clase menu

const barra = document.querySelector(`.barra`)
const barraIcono = document.querySelector(`.barra i`)
const downMenu = document.querySelector(`.down-menu`)




barra.addEventListener("click",()=>{
    downMenu.classList.toggle("open")
    const open = downMenu.classList.contains("open")
    barraIcono.classList = open
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
})


//Mostrar y desaparecer navbar


let lastScrollTop = 0
let navbar = document.querySelector(".navbar")
window.addEventListener("scroll",()=>{
    let scrollTop = window.pageYOffset || document
    .documentElement.scrollTop

    if(scrollTop > lastScrollTop){
        navbar.style.top = "-60px"
    }else{
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop
})

