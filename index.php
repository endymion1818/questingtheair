<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="container site-masthead" role="banner">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'picard' ); ?></a>
	<div class="site-branding">
		<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
		<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
	</div>
	<?php if ( has_nav_menu( 'primary' ) ) : ?>
		<nav class="main-navigation" role="navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'primary', ) ); ?>
		</nav><!-- #site-navigation -->
	<?php endif; ?>
</header>

<div id="page" class="container">
	<div id="content" class="site-content">
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">
				<noscript>

					<?php if ( have_posts() ) : ?>

						<?php while ( have_posts() ) : the_post(); ?>

						<article class="article">

						<h1><?php the_title();?></h1>
						<small><?php _e('By ', 'questingtheair'); the_author(); _e('on ', 'questingtheair'); the_date(); ?>
						<?php the_content();?>

						</article>

						<?php endwhile; ?>

						<?php the_posts_navigation(); ?>

					<?php else : ?>

						<?php get_template_part( 'content', 'none' ); ?>

					<?php endif; ?>

				</noscript>
				<article class="article" id="hasscript">

				</div>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- #content -->
</div><!-- .container -->

<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="site-info container">
		<p><?php _e('theme by Ben Read at ', 'questingtheair');?> <a href="http://deliciousreverie.co.uk" title="Delicious Reverie: blog of developer / designer Benjamin Read"><?php _e('Deliciousreverie.co.uk');?></a>
	</div><!-- .site-info -->
</footer>

<!-- Templates -->
<?php include('partials/tpl_postlist.php');?>

<?php wp_footer(); ?>

</body>
</html>
