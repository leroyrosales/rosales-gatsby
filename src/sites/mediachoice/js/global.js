/**
 * This script adds the jquery effects to the Media Choice Theme.
 *
 * @package MediaChoice\JS
 * @author StudioPress
 */

( function($) {

	// Adds class to fourth employee img child for hiding on mobile devices
	$('.employee-img:nth-child(4)').addClass('hidden-xs');

	// Adds class to fifth employee img child for hiding on mobile devices
	$('.employee-img:nth-child(5)').addClass('hidden-xs hidden-sm');

	var $body         = $( 'body' ),
		$content      = $( '.offscreen-content' ),
		headerHeight  = $( '.site-header' ).height(),
		$siteHeader   = $( '.site-header' ),
		$siteInner    = $( '.site-inner' ),
		sOpen         = false,
		windowHeight  = $(window).height();

	$(document).ready(function() {


		// Set offscreen container height.
		$( '.offscreen-container' ).css({
			'height': windowHeight + 'px'
		});

		// Toggle the offscreen content.
		$( '.offscreen-content-toggle' ).click(function() {
			__toggleOffscreenContent();
		});

	});

	// Add white class to site container after 50px.
	$(document).on( 'scroll', function() {

		if ( $(document).scrollTop() > 50 ) {
			$( '.site-container' ).addClass( 'white' );

		} else {
			$( '.site-container' ).removeClass( 'white' );
		}

	});

	// Push the .site-inner down dependant on the header height.
	if ( ! $body.hasClass( 'front-page' ) ) {

		__repositionSiteHeader( headerHeight, $siteInner );

		$(window).resize(function() {

			// Update header height value.
			headerHeight = $siteHeader.height();
			__repositionSiteHeader( headerHeight, $siteInner );


		});

	}

	// Function to toggle the offscreen content.
	function __toggleOffscreenContent() {

		if (sOpen) {
			$content.fadeOut();
			$body.toggleClass( 'no-scroll' );
			sOpen = false;
		} else {
			$content.fadeIn();
			$body.toggleClass( 'no-scroll' );
			sOpen = true;
		}

	}

	// Function to get the CSS value of the position property of the passed element.
	function __getPositionValue( selector ) {

		var position = $( selector ).css( 'position' );

		return position;

	}

	// Function to position the site header.
	function __repositionSiteHeader( headerHeight, $siteInner ) {

		if ( 'fixed' == __getPositionValue( '.site-header' ) ) {
			$siteInner.css( 'margin-top', (headerHeight * 1) + 'px' );
		} else {
			$siteInner.removeAttr( 'style' );
		}

	}

	// Function to remove site-inner margin for pages with Featured Images
	if(document.getElementById("featured-image")){
		$siteInner.css( 'margin-top', 0 );
	} 

	$( '.team-container p:empty' ).remove();

})(jQuery);