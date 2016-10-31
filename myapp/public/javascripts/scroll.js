
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
        $(".log").text('Fade Out Transition Complete');
      });
  }

  var waypoint = new Waypoint({
    element: document.getElementsByClassName("maintarg"),
    handler: function() {
      notify('Basic waypoint triggered')
    }
  })
