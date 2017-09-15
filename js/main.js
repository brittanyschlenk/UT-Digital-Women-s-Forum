$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
	console.log(distanceScrolled);
	if (distanceScrolled >= 100) {
		$('nav').addClass('scrolled');
	} else {
		$('nav').removeClass('scrolled');
	}
});

$('button').on('click', function() {
	$('button').css('color', 'red');
});

$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
