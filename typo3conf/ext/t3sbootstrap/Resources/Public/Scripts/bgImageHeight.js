jQuery(function() {

	if( TYPO3.settings.MINVH !== undefined ) {
		var winHeight = $(window).height();
		$.each( TYPO3.settings.MINVH, function( objKey, objValue ) {
			jQuery('#s'+objKey+'.background-image, #s'+objKey+'.background-color, #s'+objKey+'.parallax').css('height','auto').css('min-height',winHeight+'px');	
		});
	}

});
