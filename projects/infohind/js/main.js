/*!
 * Main.js
 * Author: Ajithkumar
 * url: ajithsimon.com
 */
function isMobile() {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    if (isMobile.matches) {
        return true;
    } else {
        return false;
    }
}
if (!isMobile()){
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
    });
}

//on scroll navbar shadow
$(document).ready(function(){
 $(window).scroll(function(){
  var y = $(window).scrollTop();
  if( y > 0 ){
      $("#top-shadow").css({'display':'block', 'opacity':y/20});
  } else {
      $("#top-shadow").css({'display':'block', 'opacity':y/20});
  }
 });
});