#-------------------------------------------------------------------------------
#	FluidContent - configuration
#-------------------------------------------------------------------------------
lib.fluidContent{
    templateRootPaths >
    templateRootPaths {
        10 = {$styles.templates.templateRootPath}
        2 = {$plugin.tx_t3sbootstrap.view.templateRootPath}
        1 = EXT:t3sbootstrap/Resources/Private/Templates/Content/
        0 = EXT:fluid_styled_content/Resources/Private/Templates/
    }
    partialRootPaths >
    partialRootPaths {
        10 = {$styles.templates.partialRootPath}
        2 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
        1 = EXT:t3sbootstrap/Resources/Private/Partials/
        0 = EXT:fluid_styled_content/Resources/Private/Partials/
    }
    layoutRootPaths >
    layoutRootPaths {
        10 = {$styles.templates.layoutRootPath}
        2 = {$plugin.tx_t3sbootstrap.view.layoutRootPath}
        1 = EXT:t3sbootstrap/Resources/Private/Layouts/
        0 = EXT:fluid_styled_content/Resources/Private/Layouts/
    }
	settings {
		wrapper.minVh = {$plugin.t3sbootstrap_configuration.general.wrapper.minVh}
		video.ratio = {$plugin.t3sbootstrap_configuration.general.video.ratio}
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
		headertags.enable = {$plugin.t3sbootstrap_configuration.headertags.enable}
		tabletags.enable = {$plugin.t3sbootstrap_configuration.tabletags.enable}
		# enable/disable in EMconfig
		animateCss = {$plugin.t3sbootstrap_configuration.animateCss}
		version = {$plugin.t3sbootstrap_configuration.general.version}

	}
	variables {
		container-fluid = TEXT
		container-fluid.value = {$plugin.t3sbootstrap_configuration.styles.container-fluid}
		be_layout = TEXT
		be_layout.data = pagelayout
		preventFromContainerWrapping = TEXT
		preventFromContainerWrapping.value = {$plugin.t3sbootstrap_configuration.preventFromContainerWrapping}
		version = TEXT
		version.value = {$plugin.t3sbootstrap_configuration.general.version}
	}	
	dataProcessing {
		90 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
}

# For compatibility with CMS7 can be removed with CMS9
lib.contentElement < lib.fluidContent