# **********************************************************
#	EXT:news
# **********************************************************
plugin.tx_news {

	view {
		templateRootPaths {
			2 = EXT:news/Resources/Private/Templates/Styles/Twb/Templates/
			3 = EXT:t3sbootstrap/Resources/Private/Extensions/news/Templates/Styles/Twb/Templates/
		}
		partialRootPaths {
			2 = EXT:news/Resources/Private/Templates/Styles/Twb/Partials/
			3 = EXT:t3sbootstrap/Resources/Private/Extensions/news/Templates/Styles/Twb/Partials/
		}
		layoutRootPaths {
			2 = EXT:news/Resources/Private/Templates/Styles/Twb/Layouts/
			3 = EXT:t3sbootstrap/Resources/Private/Extensions/news/Templates/Styles/Twb/Layouts/
		}

	}

	settings {
		thumbnail {
			# 2,3 or 4 columns
			columns = 3
			width = 400
			height = 250
		}
		mediaObject {
			width = 100
			height = 100
		}

		lightbox.enable = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}

		media {
			popup {
				bodyTag >
				wrap = |
				width = {$styles.content.textmedia.linkWrap.width}
				height = {$styles.content.textmedia.linkWrap.height}
				JSwindow = 0
				directImageLink = 1
				linkParams.ATagParams.dataWrap >

				linkParams.ATagParams.stdWrap.cObject = COA
				linkParams.ATagParams.stdWrap.cObject {
				    96 = TEXT
					96.data = DB:{TSFE:currentRecord}:uid
					96.data.insertData = 1
				    96.noTrimWrap = | data-lightbox="lightboxGroup-|" |
				    96.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.group}

				    97 = TEXT
					97.data = file:current:uid
					97.data.insertData = 1
				    97.noTrimWrap = | data-lightbox="image-|" |
				    97.if.isFalse = {$plugin.t3sbootstrap_configuration.extensions.lightbox.group}

				    98 = TEXT
				    98.data = file:current:description // file:current:title
					98.stdWrap.htmlSpecialChars = 1
				    98.wrap = data-title="|"
				    98.required	= 1
				}

				dataAttribute = {$plugin.t3sbootstrap_configuration.extensions.lightbox.dataAttribute}
				lightboxGroup = {$plugin.t3sbootstrap_configuration.extensions.lightbox.group}
				if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
			}
		}
	}
}

