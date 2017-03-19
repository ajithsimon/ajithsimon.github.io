/*!
 * Main.js
 * Author: Ajithkumar
 * url: ajithsimon.com
 */
$('ul.nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
});