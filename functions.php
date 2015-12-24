<?php
if ( ! function_exists( 'questingtheair_setup' ) ) :

function questingtheair_setup() {
  load_theme_textdomain( 'questingtheair', get_template_directory() . '/languages' );
  add_theme_support( 'title-tag' );
  add_theme_support( 'post-thumbnails' );

  // CSS
  function theme_styles() {
      wp_enqueue_style('theme_css', get_template_directory_uri() . '/css/questingtheair.min.css');
      // wp_enqueue_style('theme_fonts', 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600');
    }
  add_action( 'wp_enqueue_scripts', 'theme_styles');

  // JavaScript
  function theme_js() {


    // Conditionals for legacy IE browsers
    global $wp_scripts;

    wp_register_script('html5_shiv', 'https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js', '', '', false);
    wp_register_script('respond_js', 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js', '', '', false);

    $wp_scripts->add_data('html5_shiv', 'conditional', 'lt IE 9');
    $wp_scripts->add_data('respond_js', 'conditional', 'lt IE 9');
    // Theme JS and jQuery
    wp_enqueue_script('j_query', '//code.jquery.com/jquery-2.1.4.min.js', array(), '', true);
    wp_enqueue_script('theme_footer_js', get_template_directory_uri() . '/js/questingtheair.min.js', array('jquery'), '', true);

    }
  add_action('wp_enqueue_scripts', 'theme_js');

  register_nav_menus( array(
    'mainnav' => __( 'Main Navigation', 'questingtheair' ),
  ) );
}
endif; // questingtheair_setup
add_action( 'after_setup_theme', 'questingtheair_setup' );

?>
