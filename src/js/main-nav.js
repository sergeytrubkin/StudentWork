var button = document.querySelector(".burger");
var menu = document.querySelector(".main-nav");

button.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--opened");
})

menu.classList.remove("main-nav--nojs");
