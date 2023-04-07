const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click',()=>{
    links.classList.toggle("show_nav");
})

//!------------- Flip Card Script------------------------

let ProductBox = document.getElementById('productBox');
let frontImg = document.getElementById('frontImg');
let backImg = document.getElementById('backImg');

const flipRight = () =>{
    ProductBox.style.transform = "rotateY(180deg)";
    frontImg.style.left = "650px";
    backImg.style.left = "20px";
    frontImg.style.transform = "rotate(-30deg)";
    backImg.style.transform = "rotate(0deg)";
}
const flipLeft = () =>{
    ProductBox.style.transform = "rotateY(0deg)";
    frontImg.style.left = "20px";
    backImg.style.left = "-650px";
    frontImg.style.transform = "rotate(0deg)";
    backImg.style.transform = "rotate(-30deg)";
}