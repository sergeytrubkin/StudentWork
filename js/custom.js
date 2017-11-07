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


  /*  плавный скролл
  ==================================  */

  $(".main-nav__link, .logo__link").on("click", function(e){

    e.preventDefault();
    var currentBlock = $(this).attr("href"),
    currentBlockOffset = $(currentBlock).offset().top;

    $(".burger").removeClass("burger--close");
    $(".main-nav").removeClass("main-nav--opened");

    $("html, body").animate({
      scrollTop: currentBlockOffset - 40
    }, 750);

  });


  /*  фиксированное меню при скролле
  ===================================*/

  var headH = $("#js-main-menu").innerHeight(); // высота header'a

  $(document).on("scroll", function() {

    var documentScroll = $(this).scrollTop();

    if(documentScroll > headH + 150) {
      $("#js-main-menu").addClass("fixed main-nav__bg");
      $("#js-header").css("paddingTop", headH);
    } else {
      $("#js-main-menu").removeClass("fixed main-nav__bg");
      $("#js-header").removeAttr("style");
    }
  });

  console.log(headH);


});
