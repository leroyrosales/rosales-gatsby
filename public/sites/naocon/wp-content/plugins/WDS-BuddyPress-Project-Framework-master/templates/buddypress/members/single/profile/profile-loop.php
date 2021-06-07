<?php
/**
 * BuddyPress - Members Profile Loop
 *
 * @package BuddyPress
 * @subpackage bp-legacy
 */

/** This action is documented in bp-templates/bp-legacy/buddypress/members/single/profile/profile-wp.php */


do_action( 'bp_before_profile_loop_content' ); ?>

<?php if ( bp_has_profile() ) : ?>

	<?php while ( bp_profile_groups() ) : bp_the_profile_group(); ?>

		<?php if ( bp_profile_group_has_fields() ) : ?>

			<?php

			/** This action is documented in bp-templates/bp-legacy/buddypress/members/single/profile/profile-wp.php */
			do_action( 'bp_before_profile_field_content' ); ?>

			<div class="bp-widget <?php bp_the_profile_group_slug(); ?>">


<table class="profile-fields">
<div class="one-fourth first">
	<div id="item-header-avatar">
		<a href="<?php bp_displayed_user_link(); ?>">
			<?php 
				// Displays Avatar
				bp_displayed_user_avatar( array( 'type' => 'full', 'height' => 300, 'width' => 300 ) ); 
			?>
		</a>
	</div><!-- #item-header-avatar -->

	<?php echo '<div class="info-box">';
		// Occupation
      	echo '<em>' . xprofile_get_field_data('13') . '</em><br/>';
      	// Company
      	echo xprofile_get_field_data('5') . '<br/>'; 
      	// Member since
	  	echo xprofile_get_field_data('6') . '<br/>'; 
	?>
	<?php 
	if ( is_user_logged_in() ) {
		if(xprofile_get_field_data('7') || xprofile_get_field_data('26') || xprofile_get_field_data('27') || xprofile_get_field_data('12') || xprofile_get_field_data('29') || xprofile_get_field_data('30')){
		echo '<br>Contact Information:<br>'; 

		// Contact Cell
		if( xprofile_get_field_data('7') ) {
		echo 'Cell: <a href="tel:' . strip_tags(xprofile_get_field_data('7')) . '">' . strip_tags(xprofile_get_field_data('7')) . '</a><br>';
		} else { }

		// Contact Work
		if( xprofile_get_field_data('26') ) {
		echo 'Work: <a href="tel:' . strip_tags(xprofile_get_field_data('26')) . '">' . strip_tags(xprofile_get_field_data('26')) . '</a><br>';
		} else { }

		// Contact Fax
		if( xprofile_get_field_data('27') ) {
		echo 'Fax: <a href="tel:' . strip_tags(xprofile_get_field_data('27')) . '">' . strip_tags(xprofile_get_field_data('27')) . '</a><br>';
		} else { }

		// Contact Email
		if( xprofile_get_field_data('12') ) {
		echo 'Email: <a href="mailto:' . strip_tags(xprofile_get_field_data('12')) . '">' . strip_tags(xprofile_get_field_data('12')) . '</a><br>';
		} else { }

		// Contact LinkedIn
		if( xprofile_get_field_data('29') ) {
		echo '<a href="' . strip_tags(xprofile_get_field_data('29')) . '" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a> ';
		} else { }

		// Contact Twitter
		if( xprofile_get_field_data('30') ) {
		echo '<a href="https://twitter.com/' . strip_tags(xprofile_get_field_data('30')) . '" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>';
		}
		
		} 
		else { }
		// End info-box and three-fourths divs
		echo '</div></div>';
		}
	?> 

</div>
</div><!---End one-fourth-->
<div class="three-fourths">
	<?php 
		// Name
		echo '<h2 class="member-name">' . strip_tags(xprofile_get_field_data('28')) . ' '. strip_tags(xprofile_get_field_data('1')) .'</h2>';
	?>

	<?php 
	if( xprofile_get_field_data('9') ) {
		// Bio
		echo '<div class="member-bio">' . nl2br(xprofile_get_field_data('9')) . '</div>';
  	} else { 
	  
	} ?>
	
	<?php 
	if( xprofile_get_field_data('11') ) {
		// Elected for Quote
		echo '<h4>Elected for:</h4><br><div class="elected-quote">' . xprofile_get_field_data('11') . '</div>'; 
  	} else { 
	  
	} ?>
	
	<?php 
		if( xprofile_get_field_data('15') ) {
		// Member Expertise
		echo '<h4>Member Expertise:</h4><br><div class="one-half first">' . xprofile_get_field_data('15') . '<br/>' . xprofile_get_field_data('16') . '<br/>' . xprofile_get_field_data('17') . '</div><div class="one-half">' . xprofile_get_field_data('18') . '<br/>' . xprofile_get_field_data('19') . '<br/>' . xprofile_get_field_data('20') . '</div>';
	} else { }
	?>

<!-- Displays nominee profile is user is Membership Committee member -->
<?php if(current_user_can("access_s2member_level2")) {	
	
	if( xprofile_get_field_data('22') ) {
		// Reason for Election quote
		echo '<h4>Reason for Election:</h4><br><div class="elected-quote">' . xprofile_get_field_data('22') . '</div>';
  	} else { }

	if( xprofile_get_field_data('23') ) {
		// Nomination form
		echo '<h4>Nomination Form:</h4><br><a href="' . strip_tags(xprofile_get_field_data('23')) . '" class="button" target="_blank">' . 'Nomination Form' . '</a>';
  	} else { }

	if( xprofile_get_field_data('24') ) {
		// Reference Form A
		echo '<h4>Reference Form A:</h4><br><a href="' . strip_tags(xprofile_get_field_data('24')) . '" class="button" target="_blank">' . 'Reference Form A' . '</a>';
  	} else { }

	if( xprofile_get_field_data('25') ) {
		// Reference Form B
		echo '<h4>Reference Form B:</h4><br><a href="' . strip_tags(xprofile_get_field_data('25')) . '" class="button" target="_blank">' . 'Reference Form B' . '</a>';
  	} else { }

	if( xprofile_get_field_data('21') ) {
		// Nominee Status
		echo '<h4>Nominee Status:</h4><br>' . xprofile_get_field_data('21') . '';
  	} else { }
  	}
?>
<!-- End nominee profile for Membership Commitee Member -->
</div><!---end three-fourths-->

</table>
			</div>

			<?php

			/** This action is documented in bp-templates/bp-legacy/buddypress/members/single/profile/profile-wp.php */
			do_action( 'bp_after_profile_field_content' ); ?>

		<?php endif; ?>

	<?php endwhile; ?>

	<?php

	/** This action is documented in bp-templates/bp-legacy/buddypress/members/single/profile/profile-wp.php */
	do_action( 'bp_profile_field_buttons' ); ?>

<?php endif; ?>

<?php

/** This action is documented in bp-templates/bp-legacy/buddypress/members/single/profile/profile-wp.php */
do_action( 'bp_after_profile_loop_content' ); ?>
