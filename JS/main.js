var header = document.getElementsByTagName("header")[0];
console.log(header)
window.addEventListener("scroll", ()=>{
    window.scrollY > 0 ? header.classList.add("headerBg") : header.classList.remove("headerBg")
})