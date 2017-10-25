var button = document.querySelector(".burger");

button.addEventListener("click", function(event) {
  event.preventDefault();
  button.classList.toggle("burger--close");
})

button.classList.remove("burger--nojs");
