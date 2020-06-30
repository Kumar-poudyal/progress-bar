$(function() {
	initprogressBar();
});

function initprogressBar() {
	function heightCalc() {
		var scroll = $(window).scrollTop();
		var dh = $(document).height();
		var wh = $(window).height();
		var scrollPercentage = (scroll / (dh-wh) * 100);
		var bar = $('.myBar')
		bar.css('width', scrollPercentage + '%');
	}

	$(window).scroll(function() {
		heightCalc();
	});

	$(window).on("orientationchange resize load", function(){
		heightCalc();
	});
}