$( document ).ready(function(){

$(".button-collapse").sideNav();
$('.parallax').parallax();
// $('.carousel').carousel();
$('.carousel.carousel-slider').carousel({fullWidth: true}, "next");


	// scroll down page to the about me section
	$("#aboutMe").on("click", function() {
		$("html, body").animate({ scrollTop: $("#scrollAboutMe").offset().top }, "slow");
	});

	// scroll down page to the about me section
	$("#portfolio").on("click", function() {
		$("html, body").animate({ scrollTop: $("#scrollPortfolio").offset().top }, "slow");
	});

	// scroll down page to the contact section
	$("#connect").on("click", function() {
		$("html, body").animate({ scrollTop: $("#scrollContact").offset().top }, "slow");
	});

	$("#submit").on("click", function() {
		event.preventDefault();
	});

});