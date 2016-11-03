
var depth = 0
var loaded = "none"
/*
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

*/
  window.onload = function (event) {
    window.location.hash = "#home";
  };

  function fadetoPhoto() {
      $(".maintarg").fadeOut( 'slow', function(){
        $(".splendidChap").fadeIn( 'slow', function(){
            window.location.hash = "#splendidChap";
            loaded = ".splendidChap"
        });
      });
  }
  function fadetoDeveloper() {
      $(".maintarg").fadeOut( 'slow', function(){
        $(".developer").fadeIn( 'slow', function(){
          window.location.hash = "#developer";
          loaded = ".developer"
        });
      });
  }

  window.onhashchange = function(){
    switch(location.hash) {
      case '#home':
        loadhome()
      break;
      case '#has2':
      break;
    }
  }
  
function loadhome(argument) {
   $(loaded).fadeOut( 'slow', function(){
           $(".maintarg").fadeIn( 'slow', function(){
          console.log("i ran")
        });
      });
}