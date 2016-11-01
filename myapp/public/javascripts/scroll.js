
function scrollfirst() {
  $('html,body').animate({
      scrollTop: $(".lowercontent").offset().top},
      1000);

}

  $("#in").click(function(){
      $(".target").fadeIn( 'slow', function(){
        $(".log").text('Fade In Transition Complete');
      });
  });

  function fadetoPhoto() {
      $(".maintarg").fadeOut( 'slow', function(){
        $(".splendidChap").fadeIn( 'slow', function(){
          $(".log").text('Fade In Transition Complete');
        });
      });
  }
  function fadetoDeveloper() {
      $(".maintarg").fadeOut( 'slow', function(){
        $(".developer").fadeIn( 'slow', function(){
          $(".log").text('Fade In Transition Complete');
        });
      });
  }
