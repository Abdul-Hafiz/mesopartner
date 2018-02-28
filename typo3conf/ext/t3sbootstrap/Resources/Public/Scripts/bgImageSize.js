/* parallax */
(function($){var ua=$.browser;var $window=$(window);var windowHeight=$window.height();$window.resize(function(){windowHeight=$window.height();});
$.fn.parallax=function(xpos,speedFactor,outerHeight){var $this=$(this);var getHeight;var firstTop;var paddingTop=0;$this.each(function(){firstTop=$this.offset().top;});if(outerHeight){getHeight=function(jqo){return jqo.outerHeight(true);};}else{getHeight=function(jqo){return jqo.height();};}
if(arguments.length<1||xpos===null)xpos="50%";if(arguments.length<2||speedFactor===null)speedFactor=0.1;if(arguments.length<3||outerHeight===null)outerHeight=true;var pattern=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i;function update(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){$this.each(function(){$this.css('backgroundPosition',"top left");$this.css('backgroundAttachment',"scroll");});return;}
var pos=$window.scrollTop();$this.each(function(){var $element=$(this);var top=$element.offset().top;var height=getHeight($element);if(top+height<pos||top>pos+windowHeight){return;}
$this.css('backgroundPosition',xpos+" "+Math.round((firstTop-pos)*speedFactor)+"px");});}
$window.bind('scroll',update).resize(update);update();};
})(jQuery);

var mobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	mobile = true;
}

jQuery(function($){
	function resizeBgImage(winWidth, objKey, value, key) {
		if ( winWidth < 769 && key == 768 ) {
			$('#s'+objKey+'.bgImageSize').css('background-image', 'url(' + value + ')');
		}
		if ( winWidth > 768 && winWidth < 993 && key == 992 ) {
			$('#s'+objKey+'.bgImageSize').css('background-image', 'url(' + value + ')');
		}
		if ( winWidth > 992 && winWidth < 1201 && key == 1200 ) {
			$('#s'+objKey+'.bgImageSize').css('background-image', 'url(' + value + ')');
		}
		if ( winWidth > 1200 && winWidth < 1921 && key == 1920 ) {
			$('#s'+objKey+'.bgImageSize').css('background-image', 'url(' + value + ')');
		}
		if ( winWidth > 1920 && winWidth < 2561 && key == 2560 ) {
			$('#s'+objKey+'.bgImageSize').css('background-image', 'url(' + value + ')');
		}
		if ( winWidth > 2560 && key == 'orig' ) {
			$('#s'+objKey+'.bgImageSize').css('background-image', 'url(' + value + ')');
		}
	}
	function backgroundSize() {
		var winWidth = $(window).width();
		$.each( TYPO3.settings.T3SBS, function( objKey, objValue ) {
			var $obj = jQuery.parseJSON(objValue);
			$.each( $obj, function( key, value ) {
				$(window).on('resize', function(){
					var winWidth = $(window).width();
					resizeBgImage(winWidth, objKey, value, key);
				});
				resizeBgImage(winWidth, objKey, value, key);
			});
		});
	}
	$('.parallax').each(function(){
		var speed='0.1';
		if(typeof $(this).attr('data-speed')!='undefined'&&$(this).attr('data-speed')!=''){
			speed=$(this).attr('data-speed');
		}
		$(this).parallax('50%',speed);
	});

	backgroundSize();

	if (mobile){
		$('.background-image').removeClass('background-fixed');
	}

});
