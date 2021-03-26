jQuery(document).ready(function() {
	var add_lightbox_string = ewd_ulb_php_add_data.add_lightbox.replace(/&quot;/g, '"');
	var add_lightbox_array = jQuery.parseJSON(add_lightbox_string);

	var lightbox_added = false;

	if (jQuery.inArray("all_images", add_lightbox_array) !== -1) {
		jQuery("img").each(function() {
			if (jQuery(this).height() > ewd_ulb_php_add_data.min_height && jQuery(this).width() > ewd_ulb_php_add_data.min_width) {
				jQuery(this).parent().addClass('ewd-ulb-lightbox');
				jQuery(this).parent().data('ulbsource', jQuery(this).attr('src').replace(/-150x150/g, ''));
			}
		});
	}

	if (jQuery.inArray("all_youtube", add_lightbox_array) !== -1) {
		jQuery("iframe").each(function() {
			if (jQuery(this).height() > ewd_ulb_php_add_data.min_height && jQuery(this).width() > ewd_ulb_php_add_data.min_width) {
				var youtube = jQuery(this).attr('src').match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
				if (youtube) {
					jQuery(this).parent().addClass('ewd-ulb-lightbox');
					jQuery(this).parent().addClass('ewd-ulb-iframe-parent');
					jQuery(this).parent().append('<div class="ewd-ulb-overlay"></div>');
					jQuery(this).parent().data('ulbsource', jQuery(this).attr('src').split("?")[0]);
					jQuery(this).parent().data('ulbheight', jQuery(this).attr('height'));
					jQuery(this).parent().data('ulbwidth', jQuery(this).attr('width'));
				}
			}
		});
	}

	if (jQuery.inArray("image_class", add_lightbox_array) !== -1) {
		var class_array = ewd_ulb_php_add_data.image_class_list.split(',');
		jQuery(class_array).each(function(index, el) {
			jQuery("."+el).each(function() {
				if (jQuery(this).height() > ewd_ulb_php_add_data.min_height && jQuery(this).width() > ewd_ulb_php_add_data.min_width) {
					jQuery(this).parent().addClass('ewd-ulb-lightbox');
					jQuery(this).parent().data('ulbsource', jQuery(this).attr('src'));
				}
			});
		});
	}

	if (jQuery.inArray("image_selector", add_lightbox_array) !== -1) {
		var selector_array = ewd_ulb_php_add_data.image_selector_list.split(',');
		jQuery(selector_array).each(function(index, el) {
			jQuery(el).each(function() {console.log("height: " + jQuery(this).height()); console.log("width: " + jQuery(this).width());
				if (jQuery(this).height() >= ewd_ulb_php_add_data.min_height && jQuery(this).width() >= ewd_ulb_php_add_data.min_width) {
					jQuery(this).parent().addClass('ewd-ulb-lightbox');
					jQuery(this).parent().data('ulbsource', jQuery(this).attr('src'));
				}
			});
		});
	}

	if (jQuery.inArray("galleries", add_lightbox_array) !== -1) {
		jQuery(".gallery").each(function() {
			jQuery(this).find('a').each(function() {
				if (jQuery(this).find("img").length) {
					var img = jQuery(this).find('img').first();
					if (img.height() > ewd_ulb_php_add_data.min_height && img.width() > ewd_ulb_php_add_data.min_width) {	
						jQuery(this).addClass('ewd-ulb-lightbox');
						jQuery(this).data('ulbsource', img.attr('src').replace(/-150x150/g, ''));
						jQuery(this).data('ulbtitle', img.attr('alt'));
						jQuery(this).data('ulbdescription', img.attr('alt'));
					}
				}
			})
		});

	} 
});