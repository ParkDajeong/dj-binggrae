$(function() {
  // pc nav
  $(".gnb__main-item, .gnb__sub-area").hover(function() {
    $(".gnb__bg").addClass("on");
    $(".gnb__sub").stop().slideDown(350);
    $(".gnb__sub-area").addClass("on"); 
  }, function() {
    $(".gnb__bg").removeClass("on");
    $(".gnb__sub").stop().slideUp(250);
    $(".gnb__sub-area").removeClass("on");
  });

  // mobile nav
  $(".btn-menu").on("click", function() {
    $(this).toggleClass("on");
    $(".gnb-mo").slideToggle(300);
    $(".header__inner").toggleClass("on");
  });

  $(".gnb-mo__main-link").on("click", function() {
    if(!$(this).parent().hasClass("on")) {
      $(".gnb-mo__sub").slideUp(300);
      $(".gnb-mo__main-item").removeClass("on");
    }
    $(this).siblings(".gnb-mo__sub").slideToggle(300);
    $(this).parent().toggleClass("on");
  });

  $(".gnb-mo__footer-menu-link").on("click", function() {
    $(this).parent().toggleClass("on");
    $(this).siblings(".gnb-mo__footer-sub").toggleClass("on");
  });
});