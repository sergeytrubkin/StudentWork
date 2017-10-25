$(function() {

  // main-nav
  var button = $(".burger");
  var menu = $(".main-nav");

  menu.removeClass("main-nav--nojs");
  button.removeClass("burger--nojs");

  $(button).on("click", function(e) {
    e.preventDefault();

    $(this).toggleClass("burger--close");
    $(".main-nav").toggleClass("main-nav--opened");
  });

});
