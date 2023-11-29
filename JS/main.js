// HERE PLACE YOUR CODE FOR BURGER MENU
/* jshint esversion: 6 */
// Meniu migtukas
const menuToggle = document.querySelector(".menu-toggle");
// HERE PLACE YOUR CODE FOR FORM

// HERE PLACE YOUR EXTRA CODES AND NAME THEM PROPERLY
let inputEmail = document.querySelector(".email-input");
let form = document.querySelector("form");

form.addEventListener("submit", function () {
  if (inputEmail) {
    alert("Pavyko!!!!");
  } else {
    alert("Veskite dar karta...");
  }
});

// viduje meniu esantis listas Pricing About Contact
const menu = document.querySelector(".menu");

// meniu uzdarymo x migtukas
const close_menu = document.querySelector(".close-menu");

// Su sia funkcija mes gauname, nuspaudus meniu migtuka mums pasirodo musu html esantis listas
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
// Sita funkcija leis mums uzdaryti meniu
function hide() {
  menu.classList.remove("active");
}
// Nuspaudus close_menu yra iskvieciama funkcija hide kuri paslepia musu meniu lista
close_menu.addEventListener("click", hide);

// HERE PLACE YOUR CODE FOR FORM

// HERE PLACE YOUR EXTRE CODES AND NAME THEM PROPERLY

