var header = document.getElementsByTagName("header")[0];
var navbarLeft = document.querySelector('.navbar-left');
var navbarRight = document.querySelector('.navbar-right');
var menuIcon = document.querySelector('#menu-icon');

window.addEventListener("scroll", ()=>{
    window.scrollY > 0 ? header.classList.add("headerBg") : header.classList.remove("headerBg")
})

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbarLeft.classList.toggle('active');
    navbarRight.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    menuIcon.classList.remove('bx-x');
    navbarLeft.classList.remove('active');
    navbarRight.classList.remove('active');
})
