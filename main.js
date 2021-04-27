/*$(function() {
  $('#menu-container').hover(function() {
    $('#')
  })
})*/


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("#menu").css({ top: '-20%' })
    } else {
      $("#menu").css({ top: '0%'})
    }
});

$("#menu-container").mouseover(function(event) {
  $("#menu").css({ top: '0%' })
});

$("#menu-container").mouseleave(function(event) {
  $("#menu").css( {top: '-20%'})
});
