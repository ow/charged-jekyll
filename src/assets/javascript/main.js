$(function() {
    var siteUrl = 'http://'+(document.location.hostname||document.location.host);
    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
        console.log(this.pathname);
        if(this.pathname != "/podcast") {
          if(this.pathname != "/about") {
            if(this.pathname != "/archive") {
              if(this.pathname != "/") {
                e.preventDefault();
                History.pushState({}, "", this.pathname);
                NProgress.start();
                $("html, body").animate({ scrollTop: 0 }, 200, function(){
                  finishedLoading();
                });
              }
            }
          }
        }
    });

    History.Adapter.bind(window, 'statechange', function(){
        var State = History.getState();
        $.get(State.url, function(data){
            document.title = $(data).find("title").text();
            $('.contents').html($(data).find('.contents'));
            ga('set', { page: State.url});
            ga('send', 'pageview');
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

  $('.post-link').hover(function(){
    var captureID = "#length-" + this.id;
    $(captureID).fadeIn();
  }, function(){
      var captureID = "#length-" + this.id;
      $(captureID).fadeOut();
  });

});



function collapseConvert(){
  Cookies.set('charged_convert', 'true', { expires: 7 });
  $('.collapse-hide').fadeToggle();
  $('.collapse-show').fadeToggle(250);
  $('.convert').toggleClass("collapsed");
}

function finishedLoading(){
  NProgress.done();
}

$(document).ready(function () {  
  var top = $('#sticky').offset().top;
  height = $('#sticky').innerHeight();

  var bottom = $('.footer-convert').offset().top - (height / 2);

 
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    console.log("Current: " + y + "Collision" + bottom);
    if (y >= top){
      $('#sticky').addClass('stick');
        if (y >= bottom) {
          $('#sticky').toggleClass('stick');
        }
    }
    else {
      $('#sticky').removeClass('stick');
    }
  });
});