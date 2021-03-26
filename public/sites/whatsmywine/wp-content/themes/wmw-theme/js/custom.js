(function($) {
	"use strict";

		// Hero slider
		$('.carousel').carousel({
		  interval: 5000,
		  keyboard: true
		})

		$('.carousel-indicators li:first').addClass('active');
    	$('.carousel-inner .item:first').addClass('active');

    	// Hide slide controls if only 1 slide
	    if(jQuery(".carousel-inner .item").length == 1){
    		jQuery('.carousel-control, .carousel-indicators').hide();
    	}

		// Carousel
		$('.slick-slider').slick({
		    infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: true
		});

		
		$('.customer-slider').slick({
		    infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: true,
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

        if($('.post .img-wrap img').length !== 0 && $('#masonry').length === 0 ){
            $('.post .img-wrap img').each(function(){
               $(this).parents('.post-thumb').width($(this).width());
                $(this).addClass('visibility-show');
            });
        }



		$(window).load(function(){
			var $container = $('#masonry');
			// initialize
			$container.masonry({
				itemSelector: '.post',
				percentPosition: true
			});
		});

		// Masonry
		/*$('#masonry').masonry({
			itemSelector: '.post',
			percentPosition: true
		});*/

		// Venobox modal
		 $('.venobox').venobox();

		// Wrap body content
	    $("body").wrapInner( "<div class='wrapper'></div>");

	    // Wrap body content
	    $('.contact-form').addClass('scrollme animateme').attr('data-when','enter').attr('data-from','1').attr('data-to','0').attr('data-scale','1.8').attr('data-opacity','0');

		// Blog sidebar height
		
		if ($(window).width() > 768) {
			$('#sidebar, .posts').matchHeight();		
		}

		// Smooth scrolling
		/* from http://imakewebthings.com/jquery-waypoints/ Wicked credit to http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html */
		var scrollElement = 'html, body';
		jQuery('html, body').each(function () {
			var initScrollTop = jQuery(this).attr('scrollTop');
			jQuery(this).attr('scrollTop', initScrollTop + 1);
			if (jQuery(this).attr('scrollTop') == initScrollTop + 1) {
				scrollElement = this.nodeName.toLowerCase();
				jQuery(this).attr('scrollTop', initScrollTop);
				return false;
			}    
		});
		
		// Smooth scrolling for internal links
		jQuery(".nav a[href^='#'], .top a[href^='#']").on('click',function(event) {
			event.preventDefault();
			
			var jQuerythis = jQuery(this),
			target = this.hash,
			jQuerytarget = jQuery(target);
			
			jQuery(scrollElement).stop().animate({
				'scrollTop': jQuerytarget.offset().top -100
			}, 1500, 'swing', function() {
				window.location.hash = target;
			});
			
		});

		// Add class is section has a background image
		$('body').each(function() {
		    $('.section', this).each(function() {
		        if($(this).css('background-image') != 'none') {
		            $(this).addClass('dark bg-img');
		        }
		    });
		});

		$('section:has(.logo)').addClass('no-padding-bottom');

		// Back to top link
		$(document).scroll(function () {
			var y = $(this).scrollTop();
		    if (y > 2000) {
		        $('.top').fadeIn("slow");
		    } else {
		        $('.top').fadeOut("slow");
		    }
		});

		// Tabs
		$( "#tabs, #horz_tabs" ).tabs();

		// Accordion
		$( "#accordion:nth-child(1n)" ).accordion({
			heightStyle: "content",
			active: false,
			collapsible: true
	    });

	    // Wrap body content
		$('.play').on('click', function(ev) {
			$(this).parent().find('.video').addClass('player');
			$(this).fadeOut(300);
			$(this).parent().find(".video").attr('src', $(".video").attr('src') + '?autoplay=1'); 
		});

	    // Equal height pricing
	    jQuery('.price, .response > div, .gallery .item, .item .blurb').matchHeight();

	    // Set button width inside pricing tables
	    var width = $('.price').width();
		$('.price .btn').width(width - 60);

	    $(window).resize(function() {

		    var width = $('.price').width();
			$('.price .btn').width(width - 60);

		});

		// Burger icon
		$('.menu').on('click',function(){
	        $(this).find('#nav_icon').toggleClass('open');
	        $('.nav').toggleClass('opennav');
	        $('.hero').toggleClass('open');
	        $('.wrapper').toggleClass('open');
	    });

	    // Add classes to divs
	    $('.dark-hex-icn').parent().addClass('icon scrollme');
	    $('.icon.scrollme').parent().addClass('icon-wrapper');
	    $('.mobile-slide').parent().parent().addClass('usp-wrap scrollme');
	    $('.price').parent().css({ padding: '0' });
	    $('.price').parent().parent().addClass('pricing');
	    $('.hero').parent().parent().parent().parent().addClass('hero-wrapper');

	    
		$('.open-map a').on('click',function(e){
            $(".fw-map").toggleClass('remove');
            $(this).text(function(i, text){
	        	return text === "Our location" ? "Hide map" : "Our location";
	      	});
	      	return false;
		});

		// Hide nav on click for mobile & tablet
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.nav li a').click(function(event) {
				$('.nav').removeClass('opennav');
				$('#nav_icon, .wrapper, .hero').removeClass('open');
			});
		}


})(jQuery);