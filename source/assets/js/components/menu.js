// ============================================================================
//
// MOBILE NAVIGATION MENU
//
// ============================================================================


$(function(){

  $('.js-menu-trigger').click(function(){
    $('.js-menu-container').show();
    return false;
  });

  $('.js-menu-close').click(function(){
    $('.js-menu-container').hide();
    return false;
  });

});


