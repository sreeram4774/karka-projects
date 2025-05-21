<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ',7,_}=Zy{*$4%qKM7DoL# Epz>n8J`VT_Q&<n|-DJsAH&E2&ERa`yjW5@,ws92~{' );
define( 'SECURE_AUTH_KEY',   '9QY^,!aTt.`t*AoU.)li^HUZQH$IfZ91y^o-3$|MSuTb(@RizW$sE}=(5hEq/FvJ' );
define( 'LOGGED_IN_KEY',     'e3e,cKVHpLzW+H7naQf 5]MLrtkshyBpA!;~;~RPcU9U3crlW/~zA)k(,D#Rxp2,' );
define( 'NONCE_KEY',         '<tj<y/n8e|%MceF<%G.F*xrdE+`o$oJz,1(%>c1<oE]Ard-(GYzv^p(b9e>i^5=p' );
define( 'AUTH_SALT',         '{Zo5)=!:[MCrL2!d,fQ|0+R~IomQa((9=q(bLIy>Y86]8CFE!{F,JnXkO`K<<or-' );
define( 'SECURE_AUTH_SALT',  'EZ6:m@nNE46bDc&ri@PKOK8ggMxnjRb.{W<.,Dc*@<FVTlwe>L^}<rhJZ0u}9bqY' );
define( 'LOGGED_IN_SALT',    'Bk@h+:~dDYJi,ec2>INF|h*f59NpN$Z{7Ylq5}&?9JhDq|Ze0_X{?y*jBoN wQ,R' );
define( 'NONCE_SALT',        'r+  BJI~.D7n^MVL=(TJim7j(f{$,[dcB}:Ogo1ok=S=;5,wULAg/BKPb/!1G_.2' );
define( 'WP_CACHE_KEY_SALT', '_gUsCoNJo*W,%w/ zf;Py5kB=7F_+~^0sI!tIUm=Y}`Hu^<cUVUT__bzQ$Z-;_lP' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
