
page {
	# CSS files to be included
	includeCSS {
		bootstrapt3s = EXT:t3sbootstrap/Resources/Public/Styles/t3sbootstrap.css
		bootstrapt3s.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrapLess = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/less/bootstrap.less
		bootstrapLess.forceOnTop = 1
		bootstrapLess.if.isTrue = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrap4c = EXT:t3sbootstrap/Resources/Public/Styles/bootstrap_4.css

		onePage = EXT:t3sbootstrap/Resources/Public/Styles/onePage-{$plugin.t3sbootstrap_configuration.general.onePage.variant}.css
		onePage.if.value = pagets__t3sbootstrap_10
		onePage.if.equals.data = pagelayout

		stickyFooter = EXT:t3sbootstrap/Resources/Public/Styles/stickyFooter.css
		stickyFooter.if.isTrue = {$plugin.t3sbootstrap_configuration.styles.footer.sticky}

		bootstrapGlyphicons = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/css/glyphicons.css
		bootstrapGlyphicons.if.isTrue = {$plugin.t3sbootstrap_configuration.general.dyncss}

		treed = EXT:t3sbootstrap/Resources/Public/Styles/treed.css
		treed.if.isInList.data = TSFE:id
		treed.if.value = {$plugin.t3sbootstrap_configuration.pages.sitemap.uidList}

		lightbox = EXT:t3sbootstrap/Resources/Public/Contrib/Lightbox/css/lightbox.css
		lightbox.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}

		submenu = EXT:t3sbootstrap/Resources/Public/Contrib/Submenu/bootstrap-submenu.min.css
		submenu.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.submenu}

	}

	# JS to be included
	includeJSFooter {

		treed = EXT:t3sbootstrap/Resources/Public/Scripts/treed.js
		treed.if.isInList.data = TSFE:id
		treed.if.value = {$plugin.t3sbootstrap_configuration.pages.sitemap.uidList}

		jquery_easing = EXT:t3sbootstrap/Resources/Public/Contrib/jquery.easing.min.js
		jquery_easing.if.value = pagets__t3sbootstrap_10
		jquery_easing.if.equals.data = pagelayout

		jquery_easing2 = EXT:t3sbootstrap/Resources/Public/Contrib/jquery.easing.min.js
		jquery_easing2.if.isInList.data = TSFE:id
		jquery_easing2.if.value = {$plugin.t3sbootstrap_configuration.pages.affix.uidList}

		onePage = EXT:t3sbootstrap/Resources/Public/Scripts/onePage-{$plugin.t3sbootstrap_configuration.general.onePage.variant}.js
		onePage.if.value = pagets__t3sbootstrap_10
		onePage.if.equals.data = pagelayout

		lightbox = EXT:t3sbootstrap/Resources/Public/Contrib/Lightbox/js/lightbox.js
		lightbox.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}

		viewportchecker = EXT:t3sbootstrap/Resources/Public/Contrib/Animate/jquery.viewportchecker.js
		viewportchecker.if.isTrue = {$plugin.t3sbootstrap_configuration.animateCss}

		viewportSize = EXT:t3sbootstrap/Resources/Public/Contrib/viewportSize-min.js

		submenu = EXT:t3sbootstrap/Resources/Public/Contrib/Submenu/bootstrap-submenu.min.js
		submenu.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.submenu}

	}

	jsFooterInline.5 < lib.jsFooterInline

}

lib.jsFooterInline >
