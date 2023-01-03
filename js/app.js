document.querySelector(".bars__menu").addEventListener("click", animateBars);
document.querySelector(".bars__menu").addEventListener("click", mostrarMenu);


let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let container__menu = document.querySelector(".navigation");


function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

}

function mostrarMenu() {
   if (container__menu.classList.contains("navigation")) {
       container__menu.classList.remove("navigation");
   } else  {
       container__menu.classList.add("navigation");
   }
   
}






