
function scrollfirst() {
  $('html,body').animate({
      scrollTop: $(".lowercontent").offset().top},
      1000);

}
$('.parallax-window').parallax({imageSrc: '/images/backgroundparall.jpg'});
