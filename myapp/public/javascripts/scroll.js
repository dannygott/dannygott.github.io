
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
    if(loaded == "none"){
      $(".maintarg").fadeOut( 'slow', function(){
        $(".Photographer").fadeIn( 3000, function(){
            window.location.hash = "#Photographer";
            loaded = ".Photographer"
        });
        $(".Photoglide").animate({
            top: "-=50vw",
          }, 1000 );
      });
    }
  }
  function fadetoDeveloper() {
    if(loaded == "none"){
      $(".maintarg").fadeOut( 'slow', function(){
        $(".developer").fadeIn( 'slow', function(){
          window.location.hash = "#developer";
          loaded = ".developer"
        });
      });
    }
  }
  function fadetoChap() {
    if(loaded == "none"){
      $(".maintarg").fadeOut( 'slow', function(){
        $(".splendidChap").fadeIn( 'slow', function(){
          window.location.hash = "#splendidChap";
          loaded = ".splendidChap"
        });
      });
    }
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

function loadhome() {
  if(loaded != "none" && checkhover() != "A"){
    resetanimation()
   $(loaded).fadeOut( 'slow', function(){
           $(".maintarg").fadeIn( 'slow', function(){
          loaded = "none"
          window.location.hash = "#home";
        });
      });
  }
}

function checkhover(){
 var element = $(':hover');
    if(element.length)
    {
        var domElement = element[element.length - 1];
        var tagName = domElement.tagName;
        return tagName
    }
}
function resetanimation() {
  $(".Photoglide").animate({
      top: "+=50vw",
    }, 2 );

}
