// HERE PLACE YOUR CODE FOR BURGER MENU
// MENU BUTTON
const menuToggle = document.querySelector(".menu-toggle");
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

// BURGER TOGGLE LIST ON MOBILE
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
// BURGER CLOSING ON MOBILE
function hide() {
  menu.classList.remove("active");
}
// BURGER CLOSING
close_menu.addEventListener("click", hide);

// HERE PLACE YOUR CODE FOR FORM
let inputEmailReady = document.querySelector(".email-input-two");
let formReady = document.querySelector(".ready-to-start");

formReady.addEventListener("submit", function () {
  if (inputEmailReady) {
    alert("Pavyko!!!!");
  } else {
    alert("Veskite dar karta...");
  }
});

// HERE PLACE YOUR EXTRA CODES AND NAME THEM PROPERLY
