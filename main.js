/*$(function() {
  $('#menu-container').hover(function() {
    $('#')
  })
})*/

$(document).ready(function(){
    $(this).scrollTop(0);
});


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("#menu").css({ top: '-20%' })
      $("#menu-container").on('mouseover', function() {
        $("#menu").css({ top: '0%'})
      });
      $("#menu-container").on('mouseleave', function() {
        $("#menu").css({ top: '-20%'})
      });

    } else {
      $("#menu").css({ top: '0%'})
        $("#menu-container").off('mouseover mouseleave');
    }
});

/*$("#menu-container").mouseover(function(event) {
    $("#menu").css({ top: '0%' })
});

$("#menu-container").mouseleave(function(event) {
  ("#menu").css( {top: '-20%'})
});*/
