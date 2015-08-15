$(document).ready(function(){

  var navigation = $('nav');

  $(window).bind('scroll', function() {
    if (document.body.clientWidth > 749) {
      if ($(window).scrollTop() > 277) {
        navigation.fadeIn();
      } else {
        navigation.fadeOut();
      }
    } else if(document.body.clientWidth < 440){
      if ($(window).scrollTop() > 120) {
        navigation.fadeIn();
      } else {
        navigation.fadeOut();
      }
    } else {
      if ($(window).scrollTop() > 115) {
        navigation.fadeIn();
      } else {
        navigation.fadeOut();
      }
    }
  });

  $('a[href*=#]:not([href=#])').click(function() {
    var selected = $(this).attr("href");

    if (document.body.clientWidth > 817) {
      $('html, body').animate({scrollTop:$(selected).position().top - 50}, 'slow');
    } else {
      $('html, body').animate({scrollTop:$(selected).position().top - 40}, 'slow');
    }
  });

});
