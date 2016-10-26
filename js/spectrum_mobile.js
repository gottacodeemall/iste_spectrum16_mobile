$(document).ready(function() {

$("#nav-icon").click(
  function() {
 $("#nav").stop().animate(
 {
   left: '0',
   opacity:1
 },
 500,
 'easeInSine'
 );
});

$(".nav-close").click(
  function() {
 $("#nav").stop().animate(
 {
   left: '-60vw',
   opacity:0.6
 },
 1500,
 'easeOutBounce'
 );
});

$("#roll").click(function(){
  $("#nav").stop().animate(
  {
    left: '0',
    opacity:1
  },
  500,
  'easeInSine'
  );
});

$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});


	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});
