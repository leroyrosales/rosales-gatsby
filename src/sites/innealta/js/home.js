/**
 * This script adds the jquery effects to the front page of the Innealta Theme.
 *
 * @package Innealta\JS
 * @author Austinite Web Design
 * @license GPL-2.0+
 */

(function( $ ){
	


	if (document.location.hash) {
			window.setTimeout(function () {
				document.location.href += '';
			}, 10);
	}

	// Owl Carousel functions for our carousel
	var owl = $('.featured');
		owl.owlCarousel({
		items:1,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:false,
		touchDrag: true,
		dots:true,
		nav:true,
		navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
		// Responsive done via styling but keeping this in for future reference
		responsive : {
			    // breakpoint from 0 up
			    0 : {
			        items : 1
			    },
			    // breakpoint from 480 up
			    480 : {
					items : 1
			    },
			    // breakpoint from 768 up
			    800 : {
			    	items : 1
			    }
		}
	});
	var teamCarousel = $('.team-posts-list');
		teamCarousel.owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		touchDrag: true,
		autoplayTimeout: 3000,
		dots:false,
		nav:true,
		navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
		// Responsive done via styling but keeping this in for future reference
		responsive : {
			    // breakpoint from 0 up
			    0 : {
			        items : 1
			    },
			    // breakpoint from 480 up
			    480 : {
					items : 2
			    },
			    // breakpoint from 768 up
			    800 : {
			    	items : 2
			    }
		}
	});
	// jQuery('.play').on('click',function(){
	// 	owl.trigger('autoplay.play.owl',[1000])
	// });
	// jQuery('.stop').on('click',function(){
	// 	owl.trigger('autoplay.stop.owl')
	// });
	

	// Image section height.
	var windowHeight = $( window ).height();

	$( '.header-section' ) .css({'height': windowHeight +'px'});

	$( window ).resize(function(){

		var windowHeight = $( window ).height();

		$( '.header-section' ) .css({'height': windowHeight +'px'});

	});

})(jQuery);
