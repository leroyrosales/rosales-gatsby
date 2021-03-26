/**
 * This script adds basic features to the J. Celeste Lay theme.
 *
 * @package J. Celeste Lay\JS
 * @author StudioPress
 * @license GPL-2.0+
 */

 // Add Keyboard Accessibility.
(function($) {

 	$( '.content .entry *' )
 	.focus( function() {
 		$(this).closest( '.entry' ).addClass( 'focused' );
 	})
 	.blur( function() {
 		$(this).closest( '.entry' ).removeClass( 'focused' );
 	});

	 $("a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 3000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

})(jQuery);
