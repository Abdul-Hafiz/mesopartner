temp.lightbox.jsFooterInline = COA
temp.lightbox.jsFooterInline {
	10 = TEXT
	10.value (
	lightbox.option({
	  'resizeDuration': 200,
	  'wrapAround': true,
	  'albumLabel' : 'Bild %1 von %2'
	});


	)
	10.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
}

temp.textmedia.jsFooterInline = COA
temp.textmedia.jsFooterInline {
	10 = TEXT
	10.value (
function centerImage(object, winWidth, intext) {
	var intextFigures = object.find('figure'),
		float = object.data('float');

	if(winWidth < 768) {
		if(intext)
			object.removeClass('center-block').removeClass('pull-left').removeClass('pull-right').addClass('intext');
		jQuery(intextFigures).each(function() {
			jQuery(this).removeClass('center-block').removeClass('pull-left').removeClass('pull-right').addClass('center-block');
		});
	} else if (winWidth >= 768) {
		if(intext)
			object.removeClass('center-block').removeClass('pull-left').removeClass('pull-right').addClass(float);
		jQuery( intextFigures ).each(function() {
			jQuery(this).removeClass('center-block').removeClass('pull-left').removeClass('pull-right').addClass(float);
		});
	}
}

	)
}

lib.jsFooterInline = COA
lib.jsFooterInline {
	1 < temp.textmedia.jsFooterInline

	5 = TEXT
	5.value (
jQuery(function() {
	var winWidth = viewportSize.getWidth(),
		carousel = jQuery('.carousel'),
		textmedia = jQuery('.textmedia');

	if (carousel.length) {
		jQuery('.carousel-inner .item:first-of-type').addClass( 'active' );
	}
  
	)

	# center figures on mobile devices < 768px
	6 = TEXT
	6.value (
	if (textmedia.length) {
		jQuery('.textmedia .intext').each(function(){
			centerImage(jQuery(this), winWidth, true);
		});
		jQuery('.textmedia .noWrap').each(function(){
			centerImage(jQuery(this), winWidth, false);
		});

		jQuery(window).resize(function() {
			var winWidth = viewportSize.getWidth();
			jQuery('.textmedia .intext').each(function(){
				centerImage(jQuery(this), winWidth, true);
			});
			jQuery('.textmedia .noWrap').each(function(){
				centerImage(jQuery(this), winWidth, false);
			});
		});

		jQuery('.carousel-inner img').removeAttr('width').removeAttr('height');

	}

	)
	# affix animate
	7 = TEXT
	7.value (

	var offsetHeight = {$plugin.t3sbootstrap_configuration.navigation.scrollspy.data-offset}

	$('body').scrollspy({
	   offset: offsetHeight
	});

	jQuery('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		jQuery('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - (offsetHeight)
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	)
	7.if.isInList.data = TSFE:id
	7.if.value = {$plugin.t3sbootstrap_configuration.pages.affix.uidList}

	8 = TEXT
	8.value (
	jQuery('[data-submenu]').submenupicker();
	jQuery('.dropdown-submenu .caret').remove();

	)
	8.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.submenu}

	# auto body padding
	9 = TEXT
	9.value (

	var navBarHeight = $('#main-navbar').outerHeight(),
		footerHeight = $('#page-footer').outerHeight();

	if ( $('#main-navbar').hasClass('navbar-fixed-top') ) {
		jQuery('body').css('padding-top', (navBarHeight-1)+'px');
	}

	if ( $('#page-footer').hasClass('sticky-footer') ) {
		jQuery('body').css('padding-bottom', footerHeight+'px');
	}

	)
	9.if.isTrue = {$plugin.t3sbootstrap_configuration.general.bodyPadding.auto}

	# link to top
	20 = TEXT
	20.value (
	var offset = 220;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});
	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	});

	)
	20.if.isTrue.field = tx_t3sbootstrap_linkToTop

	# mmenu - adjust for bootstrap 3
	25 = TEXT
	25.value (
	if(winWidth < 768) {
		var $menuLeft = jQuery('#bs-navbar-collapse-1 ul.navbar-left');
		var $menuRight = jQuery('#bs-navbar-collapse-1 ul.navbar-right');
		if ( $menuLeft.length ) {
			$menuLeft.removeAttr('class');
			$menuLeft.find( 'ul' ).removeAttr('class');
			jQuery($menuLeft.find( 'li' )).each(function(){
				if ( jQuery(this).hasClass('active') || jQuery(this).hasClass('Selected') ) {
					jQuery(this).removeAttr('class').addClass('Selected');
				}
			});
			$menuLeft.find( 'li a.dropdown-toggle' ).removeAttr('data-toggle').removeAttr('class');
			$menuLeft.wrap( '<nav id=\'menu-left\' class=\'padd-menu\'></nav>' );
			$('.navbar-header button').removeAttr('data-toggle data-target')
				.removeClass('collapsed')
				.wrap( '<a id="lml" href=\'#menu-left\'></a>' );
		}
		if ( $menuRight.length ) {
			$('.navbar-header button').css('float','none');
			$menuRight.removeAttr('class');
			$menuRight.find( 'ul' ).removeAttr('class');
			jQuery($menuRight.find( 'li' )).each(function(){
				if ( jQuery(this).hasClass('active') || jQuery(this).hasClass('Selected')) {
					jQuery(this).removeAttr('class').addClass('Selected');
				}
			});
			$menuRight.find( 'li a.dropdown-toggle' ).removeAttr('data-toggle').removeAttr('class');
			$menuRight.wrap( '<nav id=\'menu-right\' class=\'padd-menu\'></nav>' );
		}
	}

	)
	25.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.mmenu}
	# mmenu - main config (left/main navBar)
	26 = TEXT
	26.value (
	if(winWidth < 768 && $menuLeft.length) {
		jQuery('#menu-left').mmenu({
		   'extensions': [
			  'pagedim-black',
			  'theme-dark'
			],
			'counters': true,
			'navbars': [{
				'position': 'bottom',
				'content': [
				'<a class=\'fa fa-envelope\' href=\'#/\'></a>',
				'<a class=\'fa fa-twitter\' href=\'#/\'></a>',
				'<a class=\'fa fa-facebook\' href=\'#/\'></a>'
				]
			}]
		});
	}


	)
	26.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.mmenu}
	# mmenu - right config (if right navBar)
	27 = TEXT
	27.value (
	if(winWidth < 768 && $menuRight.length) {
		jQuery('#lml')
		.after('<a id=\'rml\' href=\'#menu-right\'><i class=\'fa fa-chevron-circle-down fa-lg pull-right  navbar-toggle\' aria-hidden=\'true\'></i></a>');
		jQuery('#menu-right').mmenu({
			'offCanvas': {
				'position': 'right'
			},
			'extensions': [
				'pagedim-black',
				'theme-dark'
			],
			counters: true
		});
	}

	)
	27.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.mmenu}
	# mmenu - remove .caret
	28 = TEXT
	28.value (
	if(winWidth < 768) {
		jQuery('.caret').remove();
	}

	)
	28.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.mmenu}

	# tooltip
	30 = TEXT
	30.value (
	jQuery('.page-content a').tooltip({placement:'{$plugin.t3sbootstrap_configuration.general.tooltip_placement}'});
	jQuery('[data-toggle="tooltip"]').tooltip()

	)
	30.if.isTrue = {$plugin.t3sbootstrap_configuration.general.tooltip}

	# sideebar submenu
	33 = TEXT
	33.value (
	jQuery('.sidebar .has-sub.active ul.sidebar-sub').show();

	)
	# lightbox
	50 < temp.lightbox.jsFooterInline
	50.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
	# navBar hover
	60 = TEXT
	60.value (
	function toggleNavbarMethod() {
		if (jQuery(window).width() >= 768) {
			jQuery('ul.nav li.dropdown').hover(function() {
				jQuery(this).find(' > .dropdown-menu').stop(true, true).delay(200).fadeIn();
				jQuery(this).addClass('open');
			}, function() {
				jQuery(this).find(' > .dropdown-menu').stop(true, true).delay(200).fadeOut();
				jQuery(this).removeClass('open');
			});
		}
	}
	toggleNavbarMethod();

	)
	60.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.hover}
	# clickable parent
	65 = TEXT
	65.value (
	function bindNavbar() {
		jQuery('.dropdown-submenu a').click(function() {
			if (jQuery(window).width() >= 768) {
				if (jQuery(this).next('.dropdown-menu').is(':visible')) {
					window.location = '/'+jQuery(this).attr('href');
				}
			} else {
				if (jQuery(this).next('.dropdown-menu').is(':hidden')) {
					window.location = '/'+jQuery(this).attr('href');
				}
			}
		});
		jQuery('.dropdown-toggle').click(function() {
			if (jQuery(this).next('.dropdown-menu').is(':visible')) {
				window.location = '/'+jQuery(this).attr('href');
			}
		});
	}
	jQuery(window).resize(function() {
		bindNavbar();
	});
	bindNavbar();

	)
	65.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.clickableParent}
	# sitemap
	70 = TEXT
	70.value (
	jQuery('.tree').treed({openedClass : 'glyphicon-folder-close', closedClass : 'glyphicon-folder-open'});

	)
	70.if.isInList.data = TSFE:id
	70.if.value = {$plugin.t3sbootstrap_configuration.pages.sitemap.uidList}
	80 = TEXT
	80.value (
	if (location.hash) jQuery(location.hash).collapse('show');

	)
	# viewportChecker
	85 = TEXT
	85.value (
	jQuery('.animated').viewportChecker({offset: 1});

	)
	85.if.isTrue = {$plugin.t3sbootstrap_configuration.animateCss}
	# closing 1.
	99 = TEXT
	99.value = });
}

temp.textmedia.jsFooterInline >
temp.lightbox.jsFooterInline >