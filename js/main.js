$(function() {
  // pc nav
  $(".gnb__main-item, .gnb__sub-area").hover(function() {
    $(".gnb__bg").addClass("on");
    $(".gnb__sub").stop().slideDown(350);
    $(".gnb__sub-area").addClass("on"); 
  }, function() {
    $(".gnb__bg").removeClass("on");
    $(".gnb__sub").stop().slideUp(350);
    $(".gnb__sub-area").removeClass("on");
  });
});