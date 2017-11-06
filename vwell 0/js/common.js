$(document).ready(function() {

	$(".down").click(function() {
		$("html, body").animate({ scrollTop: $(".header_main").height() }, "slow");
		return false;
	});

	$(".section_last_news .owl-carousel").owlCarousel({
		items: 3,
		loop: true,
		margin: 30,
	});

	$(".section_reviews .owl-carousel").owlCarousel({
		items: 2,
		loop: true,
		margin: 30,
	});
	
});