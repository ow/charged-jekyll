$(function() {
    var siteUrl = 'http://'+(document.location.hostname||document.location.host);
    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
        console.log(this.pathname);
        if(this.pathname != "/podcast") {
          if(this.pathname != "/") {
            e.preventDefault();
            History.pushState({}, "", this.pathname);
          }
        }
    });

    History.Adapter.bind(window, 'statechange', function(){
        var State = History.getState();
        $.get(State.url, function(data){
            document.title = $(data).find("title").text();
            $('.contents').html($(data).find('.contents'));
            _gaq.push(['_trackPageview', State.url]);
        });
    });



  var cookieSet = Cookies.get('charged_convert');

  if(cookieSet != "true") {
    $('.collapse-hide').fadeIn();
    $('.collapse-show').fadeOut();
    $('.convert').removeClass("collapsed");
  }
  else {
    $('.collapse-show').fadeIn(750);
  }

   $('#close').click(function(){
    collapseConvert();
   });

});

function collapseConvert(){
  Cookies.set('charged_convert', 'true', { expires: 7 });
  $('.collapse-hide').fadeToggle();
  $('.collapse-show').fadeToggle(250);
  $('.convert').toggleClass("collapsed");
}

