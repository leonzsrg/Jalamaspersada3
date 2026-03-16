const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
navToggle.addEventListener('click',()=>{
navMenu.classList.add('show-menu')
})
}

if(navClose){
navClose.addEventListener('click',()=>{
navMenu.classList.remove('show-menu')
})
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const sr = ScrollReveal({
origin:'top',
distance:'60px',
duration:2000,
delay:300
})

sr.reveal('.home__data')
sr.reveal('.home__img',{delay:500})
sr.reveal('.layanan__card',{interval:200})