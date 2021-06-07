<?php
/**
 * BuddyPress - Members Loop
 *
 * Querystring is set via AJAX in _inc/ajax.php - bp_legacy_theme_object_filter()
 *
 * @package BuddyPress
 * @subpackage bp-legacy
 */

/**
 * Fires before the display of the members loop.
 *
 * @since 1.2.0
 */
do_action( 'bp_before_members_loop' ); ?>

<?php if ( bp_get_current_member_type() ) : ?>
	<p class="current-member-type"><?php bp_current_member_type_message() ?></p>
<?php endif; ?>

<?php if ( bp_has_members( bp_ajax_querystring( 'members' ) ) ) : ?>

	

	<?php

	/**
	 * Fires before the display of the members list.
	 *
	 * @since 1.1.0
	 */
	do_action( 'bp_before_directory_members_list' ); ?>

	<ul id="members-list" class="item-list">

	<?php while ( bp_members() ) : bp_the_member(); ?>

		<li <?php bp_member_class(); ?>>
<div class="item-avatar">
<a href="<?php bp_member_permalink(); ?>"><?php bp_member_avatar( array( 'type' => 'full', 'width' => 100, 'height' => 133 ) ); ?></a>
</div>

			<div class="item">
				<div class="item-title">
					<a href="<?php bp_member_permalink(); ?>">
					<?php 
						echo bp_member_profile_data('field=Last Name');
						echo ', ';
						echo bp_member_profile_data('field=First Name');
					?>	
					</a>


				</div>

				<?php

				/**
				 * Fires inside the display of a directory member item.
				 *
				 * @since 1.1.0
				 */
				do_action( 'bp_directory_members_item' ); ?>

				<?php
				 /***
				  * If you want to show specific profile fields here you can,
				  * but it'll add an extra query for each member in the loop
				  * (only one regardless of the number of fields you show):
				  *
				  * bp_member_profile_data( 'field=the field name' );
				  */
				  echo '<i>' ;
				  echo xprofile_get_field_data('4');
				  echo '</i>'; 
				  echo bp_member_profile_data('field=Company') . '';
				  echo '<div class="member-since">' ;
				  echo  bp_member_profile_data('field=Member since','Y');
				  echo '</div>' ; 
				  
				?>
			</div>

			<div class="clear"></div>
		</li>

	<?php endwhile; ?>

	</ul>

	<?php

	/**
	 * Fires after the display of the members list.
	 *
	 * @since 1.1.0
	 */
	do_action( 'bp_after_directory_members_list' ); ?>

	<?php bp_member_hidden_fields(); ?>


<?php else: ?>

	<div id="message" class="info">
		<p><?php _e( "Sorry, no members were found.", 'buddypress' ); ?></p>
	</div>

<?php endif; ?>

<?php

/**
 * Fires after the display of the members loop.
 *
 * @since 1.2.0
 */
do_action( 'bp_after_members_loop' ); ?>
