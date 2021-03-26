(function($) {
	"use strict";

		// Burger icon
		$('.menu').on('click',function(){
	        $(this).find('#nav_icon').toggleClass('open');
	        $('.nav').toggleClass('opennav');
	        $('.hero').toggleClass('open');
	        $('.wrapper').toggleClass('open');
	    });

		// Hide nav on click for mobile & tablet
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.nav li a').click(function(event) {
				$('.nav').removeClass('opennav');
				$('#nav_icon, .wrapper, .hero').removeClass('open');
			});
		}


})(jQuery);