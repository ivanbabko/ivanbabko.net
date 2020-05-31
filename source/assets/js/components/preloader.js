// ============================================================================
//
// FULL PAGE PRELOADER
//
// ============================================================================


$(document).ready(function() {
    $('.js-preloader').addClass('u-opacity-0');
    window.setTimeout(function(){
      $('.js-preloader').addClass('u-hide');
    }, 600);
})
