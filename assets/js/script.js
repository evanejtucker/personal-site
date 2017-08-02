$( document ).ready(function(){

$(".button-collapse").sideNav();
$('.parallax').parallax();

// scroll down page to the about me section
$("#aboutMe").on("click", function() {
	$("html, body").animate({ scrollTop: "370px" }, "slow");
})

// scroll down page to the contact section
$("#contact").on("click", function() {
	$("html, body").animate({ scrollTop: "1900px" }, "slow");
})

$("#submit").on("click", function() {
	event.preventDefault();
})

});