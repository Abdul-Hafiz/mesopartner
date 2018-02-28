// jQuery to collapse the navbar on scroll
jQuery(window).scroll(function() {
	if (jQuery(".navbar").offset().top > 50) {
		jQuery(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		jQuery(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});

function onResize(winWidth) {
	if ( winWidth < 768) {
		jQuery('.navbar-left').removeClass('pull-right');				
	} else if (winWidth >= 768) {
		jQuery('.navbar-left').addClass('pull-right');
	}		
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(function() {

	jQuery('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		jQuery('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});	

	jQuery('.page-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		return false;
	});

	// Closes the Responsive Menu on Menu Item Click
	jQuery('.navbar-collapse ul li a').click(function() {
		if (!$(this).hasClass('dropdown-toggle')) {
			jQuery('.navbar-toggle:visible').click();	
		}
	});

	var winWidth = $(window).width();
	onResize(winWidth);

	$(window).on('resize', function(){
		var winWidth = $(window).width();
		onResize(winWidth);
	});


});
