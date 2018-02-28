page {
	# CSS files to be included
	includeCSS {
		bootstrap = //maxcdn.bootstrapcdn.com/bootstrap/{$plugin.t3sbootstrap_configuration.bootstrap.version}/css/bootstrap.min.css
		bootstrap.external = 1
		bootstrap.excludeFromConcatenation = 1
		bootstrap.disableCompression = 1
		bootstrap.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrapTheme = //maxcdn.bootstrapcdn.com/bootstrap/{$plugin.t3sbootstrap_configuration.bootstrap.version}/css/bootstrap-theme.min.css
		bootstrapTheme.external = 1
		bootstrapTheme.excludeFromConcatenation = 1
		bootstrapTheme.disableCompression = 1
		bootstrapTheme.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		mmenu = //cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/{$plugin.t3sbootstrap_configuration.mmenu.version}/css/jquery.mmenu.all.min.css
		mmenu.external = 1
		mmenu.excludeFromConcatenation = 1
		mmenu.disableCompression = 1
		mmenu.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.mmenu}

		fontAwesome = //maxcdn.bootstrapcdn.com/font-awesome/{$plugin.t3sbootstrap_configuration.fontawesome.version}/css/font-awesome.min.css
		fontAwesome.external = 1
		fontAwesome.excludeFromConcatenation = 1
		fontAwesome.disableCompression = 1
		fontAwesome.if.isTrue = {$plugin.t3sbootstrap_configuration.general.fontawesome}

		animate = //cdnjs.cloudflare.com/ajax/libs/animate.css/{$plugin.t3sbootstrap_configuration.animate.version}/animate.min.css
		animate.external = 1
		animate.excludeFromConcatenation = 1
		animate.disableCompression = 1
		animate.if.isTrue = {$plugin.t3sbootstrap_configuration.animateCss}
	}
	# JS to be included
	includeJSFooterlibs {
		mmenu = //cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/{$plugin.t3sbootstrap_configuration.mmenu.version}/js/jquery.mmenu.all.min.js
		mmenu.external = 1
		mmenu.excludeFromConcatenation = 1
		mmenu.disableCompression = 1
		mmenu.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.mmenu}

		bootstrap = //maxcdn.bootstrapcdn.com/bootstrap/{$plugin.t3sbootstrap_configuration.bootstrap.version}/js/bootstrap.min.js
		bootstrap.external = 1
		bootstrap.excludeFromConcatenation = 1
		bootstrap.disableCompression = 1

		jquery = //code.jquery.com/jquery-{$plugin.t3sbootstrap_configuration.jquery.version}.min.js
		jquery.external = 1
		jquery.excludeFromConcatenation = 1
		jquery.disableCompression = 1
	}
}
