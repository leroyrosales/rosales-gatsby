// This file is automatically enqueued thanks to the Parent theme.
// Go bananas with it.

jQuery(document).ready(function($) {

	/* Removes "," with "+" in Supports */
	jQuery(".supports").each(function() {
	    $(this).html($(this).html().split(',').join(" + "));
	});

});

jQuery(document).ready(function(){
     jQuery('.menu .dropdown > a').hover(function(e){  
          e.preventDefault();
          if (jQuery(this).parent().children('.sub-menu:first').is(':visible')) {
               jQuery(this).parent().children('.sub-menu:first').hide();
          } else {
               jQuery(this).parent().children('.sub-menu:first').show();
          }
     });
});


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("mobilenav").style.opacity = "1";
    document.getElementById("mobilenav").style.display = "block";
    document.body.style.overflow = "hidden";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("mobilenav").style.opacity = "0";
    document.getElementById("mobilenav").style.display = "none";
    document.body.style.overflow = "visible";
}

jQuery('textform').click(function(){
   jQuery(this).toggleClass('active');
});