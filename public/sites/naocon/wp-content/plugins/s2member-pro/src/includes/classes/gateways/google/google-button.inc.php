<?php
// @codingStandardsIgnoreFile
/**
* Shortcode `[s2Member-Pro-Google-Button /]`.
*
* Copyright: © 2009-2011
* {@link http://websharks-inc.com/ WebSharks, Inc.}
* (coded in the USA)
*
* This WordPress plugin (s2Member Pro) is comprised of two parts:
*
* o (1) Its PHP code is licensed under the GPL license, as is WordPress.
* 	You should have received a copy of the GNU General Public License,
* 	along with this software. In the main directory, see: /licensing/
* 	If not, see: {@link http://www.gnu.org/licenses/}.
*
* o (2) All other parts of (s2Member Pro); including, but not limited to:
* 	the CSS code, some JavaScript code, images, and design;
* 	are licensed according to the license purchased.
* 	See: {@link http://s2member.com/prices/}
*
* Unless you have our prior written consent, you must NOT directly or indirectly license,
* sub-license, sell, resell, or provide for free; part (2) of the s2Member Pro Add-on;
* or make an offer to do any of these things. All of these things are strictly
* prohibited with part (2) of the s2Member Pro Add-on.
*
* Your purchase of s2Member Pro includes free lifetime upgrades via s2Member.com
* (i.e., new features, bug fixes, updates, improvements); along with full access
* to our video tutorial library: {@link http://s2member.com/videos/}
*
* @package s2Member\Google
* @since 1.5
*/
if(!defined('WPINC')) // MUST have WordPress.
	exit ("Do not access this file directly.");

if (!class_exists ("c_ws_plugin__s2member_pro_google_button"))
	{
		/**
		* Shortcode `[s2Member-Pro-Google-Button /]`.
		*
		* @package s2Member\Google
		* @since 1.5
		*/
		class c_ws_plugin__s2member_pro_google_button
			{
				/**
				* Shortcode `[s2Member-Pro-Google-Button /]`.
				*
				* @package s2Member\Google
				* @since 1.5
				*
				* @attaches-to ``add_shortcode("s2Member-Pro-Google-Button");``
				*
				* @param array $attr An array of Attributes.
				* @param string $content Content inside the Shortcode.
				* @param string $shortcode The actual Shortcode name itself.
				* @return inner Return-value of inner routine.
				*/
				public static function sc_google_button ($attr = FALSE, $content = FALSE, $shortcode = FALSE)
					{
						return c_ws_plugin__s2member_pro_google_button_in::sc_google_button ($attr, $content, $shortcode);
					}
			}
	}
