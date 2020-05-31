// ============================================================================
//
// HIDE TOPBAR ON SCROLL DOWN, SHOW ON SCROLL UP
//
// ============================================================================


$(function(){

  // Hide topbar on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.js-topbar').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the topbar, add class .c-topbar--up.
      // This is necessary so you never see what is "behind" the topbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.js-topbar').removeClass('c-topbar--down').addClass('c-topbar--up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.js-topbar').removeClass('c-topbar--up').addClass('c-topbar--down');
          }
      }

      lastScrollTop = st;
  }

});


