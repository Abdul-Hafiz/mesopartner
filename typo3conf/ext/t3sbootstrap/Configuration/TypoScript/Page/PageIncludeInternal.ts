page {
	# CSS files to be included
	includeCSS {
		bootstrap = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/css/bootstrap.min.css
		bootstrap.forceOnTop = 1
		bootstrap.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrapTheme = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/css/bootstrap-theme.min.css
		bootstrapTheme.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		fontAwesome = EXT:t3sbootstrap/Resources/Public/Contrib/Fontawesome/css/font-awesome.min.css
		fontAwesome.if.isTrue = {$plugin.t3sbootstrap_configuration.general.fontawesome}

		mmenu = EXT:t3sbootstrap/Resources/Public/Contrib/Mmenu/jquery.mmenu.all.css
		mmenu.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.mmenu}
				
		animate = EXT:t3sbootstrap/Resources/Public/Contrib/Animate/animate.min.css
		animate.if.isTrue = {$plugin.t3sbootstrap_configuration.animateCss}

	}
	# JS to be included
	includeJSFooterlibs {
		bootstrap = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/js/bootstrap.min.js

		mmenu = EXT:t3sbootstrap/Resources/Public/Contrib/Mmenu/jquery.mmenu.all.min.js
		mmenu.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.mmenu}

		jquery = EXT:t3sbootstrap/Resources/Public/Contrib/jquery.min.js
		jquery.forceOnTop = 1
	}
}


