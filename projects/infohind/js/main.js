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

$(function() {
    function ratingEnable() {
        var currentRating = $('#detail-fontawesome-o').data('current-rating');

        $('.stars-detail-fontawesome-o .current-rating')
            .find('span')
            .html(currentRating);

        $('.stars-detail-fontawesome-o .clear-rating').on('click', function(event) {
            event.preventDefault();

            $('#detail-fontawesome-o')
                .barrating('clear');
        });

        $('#detail-fontawesome-o').barrating({
            theme: 'fontawesome-stars-o',
            showSelectedRating: false,
            initialRating: currentRating,
            onSelect: function(value, text) {
                if (!value) {
                    $('#detail-fontawesome-o')
                        .barrating('clear');
                } else {
                    $('.stars-detail-fontawesome-o .current-rating')
                        .addClass('hidden');

                    $('.stars-detail-fontawesome-o .your-rating')
                        .removeClass('hidden')
                        .find('span')
                        .html(value);
                }
            },
            onClear: function(value, text) {
                $('.stars-detail-fontawesome-o')
                    .find('.current-rating')
                    .removeClass('hidden')
                    .end()
                    .find('.your-rating')
                    .addClass('hidden');
            }
        });
    }

    ratingEnable();
});
