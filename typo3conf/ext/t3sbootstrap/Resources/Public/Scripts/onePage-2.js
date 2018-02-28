// jQuery for page scrolling feature - requires jQuery Easing plugin
function onResize(winWidth) {
	if ( winWidth < 768) {
		$('ul.nav.navbar-nav').removeClass('nav-justified')
		$('#page-footer .nav-pills').removeClass('pull-right');		
		$('.top-background-image .container').removeClass('vcenter');
		$('.top-background-image').css('height','auto');				
	} else if (winWidth >= 768) {
		$('ul.nav.navbar-nav').addClass('nav-justified');
		$('#page-footer .nav-pills').addClass('pull-right');
		$('.top-background-image .container').addClass('vcenter');		
		$('.top-background-image').css('height','100vH');
	}		
}



jQuery(function() {

	jQuery('.page-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		return false;
	});

	// Closes the Responsive Menu on Menu Item Click
	jQuery('.navbar-collapse ul li a').click(function() {
		if (this.id !== 'languageswitch') {
			jQuery('.navbar-toggle:visible').click();	
		}
	});
	
	jQuery('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		jQuery('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});	


	var winWidth = $(window).width();
	onResize(winWidth);

	$(window).on('resize', function(){
		var winWidth = $(window).width();
		onResize(winWidth);
	});


	if ( winWidth < 768 ) {
		$('#main-navbar').addClass('navbar-fixed-top');
		var navBarHeight = $('main-navbar').outerHeight();
		jQuery('body').css('padding-top', (navBarHeight-1)+'px');			
	} else if (winWidth >= 768) {
		// navbar fixed top
		var navpos = $('#main-navbar').offset();
		var navheight = $('#main-navbar').outerHeight();			
		$(window).bind('scroll', function() {
			if ($(window).scrollTop() > navpos.top) {
				$('#main-navbar').addClass('navbar-fixed-top');
				$('body').css('marginTop',navheight);
			} else {
				$('#main-navbar').removeClass('navbar-fixed-top');
				$('body').css('marginTop','0');
			}
		});		
	}

});
