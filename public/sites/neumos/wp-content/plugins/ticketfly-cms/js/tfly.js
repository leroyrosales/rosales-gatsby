/*	Version: v1.5.3 */

var tfly = {};
/*tfly.util = function() {
    function privateMethod() {
    }
    return {
        publicMethod: function() {
        }
    };
}();*/

tfly.carousel = function() {
    // private members
    var tflyCurrentPosition = 0,
    tflyMaxCarousel = 4,
    tflyAutoCarousel = 1,
    tflyCarouselTimerTime = 5000,
    $j = jQuery.noConflict();

    // private methods
    function timer() {
        if (tflyAutoCarousel) {
            nextTimer();
            setTimeout(timer, tflyCarouselTimerTime );
        }
    }

    function nextTimer() {
        if ( tflyCurrentPosition < (tflyMaxCarousel-1) ) {
            tflyCurrentPosition = tflyCurrentPosition + 1;
        } else {
            tflyCurrentPosition = 0;
        }

        doSwitch( tflyCurrentPosition, 0 );
    }

   function doSwitch( i, userInput ) {
        if ( userInput ) {
            tflyAutoCarousel = 0;
        }

        $j = jQuery.noConflict();

        var c = $j( "#tfly-featured-events ul.images li" );
        c.animate( { opacity: 0 }, 300, function() {
            c.hide().css( "opacity", "1");
            $j( "#tfly-featured-events ul.images li:eq(" + i + ")" ).css( "opacity", "0" ).show().animate( { opacity: 1 }, 300 );
        } );

        var overlayContent = $j( "#overlay-content li:eq(" + i + ")" ).html();
        $j( "#overlay .change" ).html( overlayContent );

        tflyCurrentPosition = i;

        $j( "#tfly-featured-events ul.nav a" ).removeClass( "selected" );
        $j( "#tfly-featured-events ul.nav a#carousel_" + i ).addClass( "selected" );
    }


    return (function() {
        // Public members

        // Public methods
        this.prev = function() {
            if ( tflyCurrentPosition > 0 ) {
                tflyCurrentPosition = tflyCurrentPosition - 1;
            } else {
                tflyCurrentPosition = tflyMaxCarousel - 1;
            }

            doSwitch( tflyCurrentPosition, 1 );
        }

        this.next = function() {
            if ( tflyCurrentPosition < (tflyMaxCarousel-1) ) {
                tflyCurrentPosition = tflyCurrentPosition + 1;
            } else {
                tflyCurrentPosition = 0;
            }

            doSwitch( tflyCurrentPosition, 1 );
        }

        this.switchTo = function(i, userInput) {
            doSwitch(i, userInput);
        }

        // Setup
        var newMax = $j("#tfly-featured-events ul.images").children().size();
        tflyMaxCarousel = Math.min(tflyMaxCarousel, newMax);

        // make images full size
        $j( "#tfly-featured-events ul li img" ).css( "width", "100%" );

        // only show first event
        $j( "#tfly-featured-events ul li" ).css( "display", "none" );
        $j( "#tfly-featured-events ul li:first" ).css( "display", "block" );

        var str = '';
        var i = 0;
        for ( i = 0 ; i < tflyMaxCarousel; i++) {
            str = str + "<li><a id='carousel_" + i + "' href='#' onclick='carousel.switchTo(" + i + ", 1 ); return false'>" + ( i + 1 ) + "</a></li>";
        }

        str = str + "<li><a id='prev_carousel' href='#' onclick='carousel.prev(); return false'>&laquo;</a></li>";
        str = str + "<li><a id='next_carousel' href='#' onclick='carousel.next(); return false'>&raquo;</a></li>";

        $j( "#tfly-featured-events ul.nav" ).html( str );

        $j( "#tfly-featured-events ul.nav a#carousel_0" ).addClass( "selected" );

        setTimeout(timer, tflyCarouselTimerTime );
    });
}();


function tfly_set_frame_start() {
}

function tfly_set_frame() {
  var w = jQuery( "div#fancy_div ul" ).css("width");
  var h = jQuery( "div#fancy_div ul" ).css("height");
  jQuery( "div#fancy_outer").animate( { width: ( parseInt( w ) + 25 ) + "px", height: ( parseInt( h ) + 25 ) + "px" }, 250 );
}

function tfly_load() {
  // set up fancyBox

  ////
  // TMH 25 March 2010: Nobody seems to be using fancybox in the SVN so remove it.
  ////

  // jQuery( "a.fancybox").fancybox( {
  //  'hideOnContentClick': false,
  //  'overlayOpacity': 0.6
  // });
  //
  // jQuery( "a.fancybox-more" ).fancybox( {
  //  'frameWidth': 125,
  //  'frameHeight': 38,
  //  'overlayOpacity': 0.0,
  //  'callbackOnStart': tfly_set_frame_start,
  //  'callbackOnShow': tfly_set_frame
  // } );


//  jQuery('.popups').aqLayer({clone:true,closeBtn:true,attach:'nw',offsetY:0,offsetX:10});
}
/* location.href */
function tfly_fbs_click(tinyurl) {
  u=tinyurl;t=document.title;window.open('https://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');
  return false;
}

function tfly_show_dialog(elem, id, title) {
  $j = jQuery.noConflict();

  var tflyDialog = $j("#" + id);

  if (tflyDialog.is(':data(dialog)') && tflyDialog.dialog("isOpen")) {
    tflyDialog.dialog('close');
    tflyDialog.dialog('destroy');
  } else {
    tflyDialog.dialog({
      autoOpen: false,
      modal: false,
      resizable: false,
      draggable: ! $j(elem).hasClass('more'),
      title:false,
      height: 'auto',
      width: 'auto',
      open: function(event, ui) {
        if ($j(elem).hasClass('more')) {
          div = $j(this).parent('div');
          el  = $j(elem);
          win = $j(window);

          $j( this ).dialog({
            position: { my: "left top", at: "left bottom", of: elem }
          });
          $j(this).parent('div').addClass("fancy-close")

        }
      }
    });
    tflyDialog.dialog('open');
  }

  return false;
}

function tfly_toggle_artist_more(more_count) {
  $j = jQuery.noConflict();
    bio_elem = $j("#tfly-artist-bio-" + more_count);
    other_elem = $j("#tfly-more-" + more_count);
    first_link_elem = $j("#tfly-more-link-" + more_count);
    second_link_elem = bio_elem.prev("a");

    if (first_link_elem.text() == "Less") {
        first_link_elem.text("More");
        second_link_elem.text("(more)");
        second_link_elem.css("display", "inline");

        bio_elem.css("display", "none");
        second_link_elem.prev("span").css("display", "inline");
        other_elem.css("display", "none");
    } else {
        first_link_elem.text("Less");
        second_link_elem.css("display", "none");

        bio_elem.css("display", "inline");
        second_link_elem.prev("span").css("display", "none");
        other_elem.css("display", "block");
    }

    return false;
}

//jQuery( document ).ready( function() { tfly_load(); } );
function tfly_getGATrackerLinkUrl(trackerurl, linkurl)
{
    var ids = '';

    if( window.location.href.toString().indexOf('fb_action_ids=')  > 0  ){
        ids = 'fb_action_ids=' + tfly_getParameterByName('fb_action_ids');
    } else if( window.location.href.toString().indexOf('twitterId=')  > 0  ){
        ids = 'twitterId=' + tfly_getParameterByName('twitterId');
    }

    if( window.location.href.toString().indexOf('fb_ref=')  > 0  ){
        var fbref = tfly_getParameterByName('fb_ref');
        var re = new RegExp("ga:(.*?)__", "i");
        var tflyga = re.exec(fbref);
        if (typeof tflyga != 'undefined' && tflyga instanceof Array && tflyga.length > 1){
            var tflygaarray = tflyga[1].toString().split("|",2);
            if (typeof tflygaarray != 'undefined' && tflygaarray instanceof Array && tflygaarray.length > 1){
                linkurl = tfly_appendQueryVar( linkurl, 'utm_source=' + tflygaarray[0] + '&utm_medium=' + tflygaarray[1]);
            }
        }
        return  tfly_appendQueryVar( linkurl, ids);
    } else if( trackerurl.indexOf('(direct)')  > 0 )
    	return tfly_appendQueryVar(linkurl, ids);
    else
    	return tfly_appendQueryVar(trackerurl, ids);
}

function tfly_appendQueryVar(url, name)
{
    if( '' === name )
        return url;

    separator = url.indexOf('?') !== -1 ? "&" : "?";
    return url + separator + name;
}

function tfly_getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function tfly_openWindowGA(link) {
  _gaq.push(function() {
    var tracker = _gat._getTrackerByName('ec');  //add name param if needed
    var checkDirect = new String(tracker._getLinkerUrl(link.href));

    var linkGA = tfly_getGATrackerLinkUrl(checkDirect, link.href);
    window.open(linkGA);
    //return false;
  });
  return false;
}

function tfly_linkGA(link) {
  _gaq.push(function() {
    var tracker = _gat._getTrackerByName('ec');  //add name param if needed
    var checkDirect = new String(tracker._getLinkerUrl(link.href));

    var linkGA = tfly_getGATrackerLinkUrl(checkDirect, link.href);
//  	window.location.assign(linkGA);
  	window.location.href=linkGA;
  	return false;
  });
}

jQuery(document).ready(function() {
    jQuery( '#tflyPurFBShareDialog' ).dialog({
        width: 550,
        modal: true,
        dialogClass: 'cog-dialog tfly-share-dialog',
        resizable: false,
        autoOpen: false,
        draggable: false
        //position: [(jQuery(window).width() / 2) - (550 / 2), 200],
        //open: function() {jQuery('.ui-widget-overlay').addClass('tfly-overlay')}
    });

    /*jQuery( '#tflyPurTwitterShareDialog' ).dialog({
        width: 562,
        modal: true,
        dialogClass: 'cog-dialog tfly-share-dialog twitter-share-dialog',
        resizable: false,
        autoOpen: false,
        draggable: false,
        //position: [(jQuery(window).width() / 2) - (562 / 2), 200],
        open: function() {jQuery('.ui-widget-overlay').addClass('tfly-overlay')}
    }); */

    jQuery( '#tflyLyteDialog' ).dialog({
      width: 426,
      modal: true,
      dialogClass: 'cog-dialog lyte-soldout-dialog',
      resizable: false,
      autoOpen: true,
      draggable: false,
      open: function(){
        jQuery('.ui-widget-overlay').bind('click',function(){
          jQuery('#tflyLyteDialog').dialog('close');
        })
      }
      // open: function() {jQuery('.ui-widget-overlay').addClass('tfly-overlay')}
    });

});

var TFLY = TFLY || {};

TFLY.share = function(){

    var purchaseUrl = "https://www.ticketfly.com/purchase";

    function _showFBShareDialog(link) {
        jQuery('#tflyPurFBShareDialog').empty();

        var eventId = jQuery(link).attr('eventId');
        var targetUrl = jQuery(link).attr('targetUrl');
        var linkToEvent = jQuery(link).attr('linkToEvent');
        var fbPerms = jQuery(link).attr('fbPerms');
        var gaSrc = jQuery(link).attr('gaSrc');
        var gaMed = jQuery(link).attr('gaMed');
        var env = jQuery(link).attr('env');

        if('dev' === env) purchaseUrl = "https://www.tflydev.com/purchase"

        var sourceUrl = purchaseUrl + "/socialAction/fbShare/" + eventId + "?" ;
        if(targetUrl && targetUrl.length > 0) sourceUrl = sourceUrl + "targetUrl=" + encodeURIComponent(targetUrl) + "&";
        if(fbPerms && fbPerms.length > 0) sourceUrl = sourceUrl + "fbPerms=" + fbPerms + "&" ;
        if(gaSrc && gaSrc.length > 0) sourceUrl = sourceUrl + "gaSrc=" + gaSrc + "&" ;
        if(gaMed && gaMed.length > 0) sourceUrl = sourceUrl + "gaMed=" + gaMed + "&" ;

        jQuery("<iframe></iframe>",{
            src: sourceUrl,
            seamless:'seamless',
            width: 550,
            height:440,
            marginheight: "0",
            marginwidth: "0",
            frameborder: "0"
        }).appendTo(jQuery('#tflyPurFBShareDialog'));
        jQuery('#tflyPurFBShareDialog').dialog('open');
    }

    function _showTwitterShareDialog(link, includeTfly) {
        var eventId = jQuery(link).attr('eventId');
        var env = jQuery(link).attr('env');
        var targetUrl = jQuery(link).attr('targetUrl');

        if('dev' === env) purchaseUrl = "https://www.tflydev.com/purchase"

        jQuery('#tflyPurTwitterShareDialog').empty();

        var sourceUrl = purchaseUrl + "/socialAction/twitterShare/" + eventId + "?includeTfly=" + includeTfly + "&";
        if(targetUrl && targetUrl.length > 0) sourceUrl = sourceUrl + "targetUrl=" + encodeURIComponent(targetUrl)

        jQuery("<iframe></iframe>",{
            src: sourceUrl,
            seamless:'seamless',
            width: 562,
            height:221,
            marginheight: "0",
            marginwidth: "0",
            frameborder: "0"
        }).appendTo(jQuery('#tflyPurTwitterShareDialog'));
        jQuery('#tflyPurTwitterShareDialog').dialog('open');
    }

    return {
        showFBShareDialog : _showFBShareDialog,
        showTwitterShareDialog: _showTwitterShareDialog
    }
}();

function tfly_artist_bio_links() {
  jQuery('.artist-boxes .video, .artist-boxes .audio').bind('dialogclose', function (event, ui) {
    jQuery(this).html(jQuery(this).html());
  });

  // for inline-links
  jQuery('div.inline-links-wrap').each(function () {
    var inlinelinksUl = jQuery(this).children('ul');
    var inlinelinksli = inlinelinksUl.children('li');
    var inlineLinkswidth = 0;
    inlinelinksli.each(function () {
      var padding = parseInt(jQuery(this).css('padding-right')) + parseInt(jQuery(this).css('padding-left'));
      var both = ( jQuery(this).outerWidth(true) ) + padding;
      inlineLinkswidth += both;
    });
    var inlineLinks = jQuery(this).outerWidth();
    if (( inlineLinkswidth + 50 ) > inlineLinks) {
      var difference = ( ( inlineLinkswidth - inlineLinks ) + 50 );
      inlinelinksUl.after('<span class="link-slide"></span>');
    }
    var inlinelinksSpan = jQuery(this).children('span');
    inlinelinksSpan.click(function () {
      jQuery(this).each(function () {
        var parentWrap = jQuery(this).parent('div.inline-links-wrap');
        if (parentWrap.hasClass('slide-return')) {
          parentWrap.removeClass('slide-return');
          jQuery(this).prev('ul.inline-links').css('right', 0);
        } else {
          parentWrap.addClass('slide-return');
          jQuery(this).prev('ul.inline-links').css('right', difference);
        }
      });
    });
  });
}