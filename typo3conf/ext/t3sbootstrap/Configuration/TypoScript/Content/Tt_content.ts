# **********************************************************
# Bullets
# **********************************************************
tt_content.bullets {
	dataProcessing {
		10.if >
		10.if {
			isInList.field = bullets_type
			value = 0,1,2,3,4
		}
		20.if >
		20.if {
			isInList.field = bullets_type
			value = 5,6
		}
	}
}

# **********************************************************
# Table
# **********************************************************
tt_content.table {
	variables {
		responsiveTables = TEXT
		responsiveTables.value = {$plugin.t3sbootstrap_configuration.responsive.tables}
	}
}

# **********************************************************
# Menu
# **********************************************************
tt_content.menu {
	variables {
		data-offset-top = TEXT
		data-offset-top.value = {$plugin.t3sbootstrap_configuration.navigation.affix.data-offset-top}
		data-offset-bottom = TEXT
		data-offset-bottom.value = {$plugin.t3sbootstrap_configuration.navigation.affix.data-offset-bottom}
	}
}

# **********************************************************
# Panel
# **********************************************************
tt_content.t3sbs_panel =< lib.fluidContent
tt_content.t3sbs_panel {
	templateName = Panel
	settings {
		defaultHeaderType = 3
	}
}

# **********************************************************
# Fluidtemplate
# **********************************************************
tt_content.t3sbs_fluidtemplate = COA
tt_content.t3sbs_fluidtemplate {
	20 = FLUIDTEMPLATE
	20 {
		file.stdWrap.cObject = TEXT
		file.stdWrap.cObject.field = subheader
		file.stdWrap.cObject.ifEmpty {
			cObject = TEXT
			cObject.value = EXT:t3sbootstrap/Resources/Private/Templates/FluidTemplate.html
		}
	}
}

# **********************************************************
# Bootstrap Image Gallery
# **********************************************************
tt_content.t3sbs_gallery =< lib.fluidContent
tt_content.t3sbs_gallery {
	templateName = ImageGallery
	settings {
		defaultHeaderType = 2
		# 1,2,3,4,6,12
#		galleryColumns = {$plugin.t3sbootstrap_configuration.image_gallery.galleryColumns}
#		imageWidth = {$plugin.t3sbootstrap_configuration.image_gallery.imageWidth}
#		imageHeight = {$plugin.t3sbootstrap_configuration.image_gallery.imageHeight}
#		thumbnail = {$plugin.t3sbootstrap_configuration.image_gallery.thumbnail}
	}
	dataProcessing {
		10 = T3SBS\T3sbootstrap\DataProcessing\BsImageGalleryProcessor
		10 {
#			references.fieldName = media
			references.fieldName = assets
			as = files
			collections.field = file_collections
			sorting.field = filelink_sorting
		}
	}
}

# **********************************************************
# Thumbnails
# **********************************************************

tt_content.t3sbs_thumbnails < lib.fluidContent
tt_content.t3sbs_thumbnails {
	templateName = Thumbnail
	dataProcessing {
		10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
		10 {
			references.fieldName = assets
			as = assets
		}
		90 >
	}
}

tt_content.gridelements_pi1.20.10.setup.thumbnails_container {
	cObject =< lib.fluidContent
	cObject {
		templateName = Thumbnails
		templateRootPaths {
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
		}
		settings {
			defaultHeaderType = 3
		}
		variables {
			modulo = TEXT
			modulo.value = 12/{field:flexform_columns}
			modulo.value.insertData = 1
			modulo.prioriCalc = 1
		}
	}
	columns.0.renderObj =< tt_content.t3sbs_thumbnails
}

# **********************************************************
# Modal
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	modal < lib.gridelements.defaultGridSetup
	modal {
		cObject =< lib.fluidContent
		cObject {
			templateName = Modal
			templateRootPaths {
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			}
		}
	}
}

# **********************************************************
# Grid system
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	two_columns < lib.gridelements.defaultGridSetup
	two_columns {
		cObject =< lib.fluidContent
		cObject {
			templateName = TwoColumns
			templateRootPaths {
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			}
		}
	}
	three_columns < lib.gridelements.defaultGridSetup
	three_columns {
		cObject =< lib.fluidContent
		cObject {
			templateName = ThreeColumns
			templateRootPaths {
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			}
		}
	}
	four_columns < lib.gridelements.defaultGridSetup
	four_columns {
		cObject =< lib.fluidContent
		cObject {
			templateName = FourColumns
			templateRootPaths {
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			}
		}
	}
}

# **********************************************************
# Background wrapper
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	background_wrapper < lib.gridelements.defaultGridSetup
	background_wrapper {
		cObject =< lib.fluidContent
		cObject {
			templateName = BackgroundWrapper
			templateRootPaths {
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			}
		}
	}
}

# **********************************************************
# Parallax wrapper
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	parallax_wrapper < lib.gridelements.defaultGridSetup
	parallax_wrapper {
		cObject =< lib.fluidContent
		cObject {
			templateName = ParallaxWrapper
			templateRootPaths {
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			}
		}
	}
}

# **********************************************************
# Carousel
# **********************************************************
tt_content.t3sbs_carousel < lib.fluidContent
tt_content.t3sbs_carousel {
	templateName = Carousel
	dataProcessing {
		10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
		10 {
			references.fieldName = assets
			as = assets
		}
		90 >
	}
}

tt_content.gridelements_pi1.20.10.setup.carousel_container < lib.gridelements.defaultGridSetup
tt_content.gridelements_pi1.20.10.setup.carousel_container {
	cObject =< lib.fluidContent
	cObject {
		templateName = CarouselContainer
		templateRootPaths {
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
		}
		settings.defaultHeaderType = 3
	}
	columns.0.renderObj < tt_content.t3sbs_carousel
}


# **********************************************************
# Tabs
# **********************************************************
tt_content.gridelements_pi1.20.10.setup.tabs_tab {
	preCObject = LOAD_REGISTER
	preCObject {
		containerId.cObject = COA
		containerId.cObject {
			wrap = id="|"
			10 = TEXT
			10.wrap = tab-content-|
			10.field = uid
		}
		containerClasses.cObject = COA
		containerClasses.cObject {
			wrap = class="tab-pane |"
			10 = TEXT
			10.field = parentgrid_flexform_switch_effect
			10.noTrimWrap = | ||
			20 = TEXT
			20.value = active in
			20.noTrimWrap = | ||
			20.if {
				 value = 1
				 equals.data = cObj:parentRecordNumber
				 equals.prioriCalc = 1
			}
			30 = TEXT
			30.field = layout
			30.wrap = layout-|
			30.noTrimWrap = | ||
			30.if.isPositive.field = layout
		}
	}
	outerWrap = <div role="tabpanel" {register: containerId} {register: containerClasses}>|</div>
	outerWrap.insertData = 1

	columns.0.renderObj =< tt_content
	columns.0.override.cObject = CONTENT
	columns.0.override.cObject {
		table = tt_content
		select {
			orderBy = sorting
			where = colPos= 0
			pidInList.field = flexform_contentByPid
			wrap = <div role="tabpanel" {register: containerId} {register: containerClasses}>|</div>
		}
	}
	columns.0.override.if.isTrue.field = flexform_contentByPid

}

tt_content.gridelements_pi1.20.10.setup.tabs_container {
	cObject =< lib.fluidContent
	cObject {
		templateName = TabContainer
		templateRootPaths {
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
		}
		settings {
			defaultHeaderType = 3
		}
	}
	columns.0.renderObj =< tt_content.gridelements_pi1
}

# **********************************************************
# Collapse / Accordion
# **********************************************************
tt_content.gridelements_pi1.20.10.setup.collapsible_accordion {
	cObject =< lib.fluidContent
	cObject {
		templateName = Collapsible
		templateRootPaths {
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
		}
		settings {
			defaultHeaderType = 3
		}
	}
	columns.0.renderObj =< tt_content
}

tt_content.gridelements_pi1.20.10.setup.collapsible_container {
	cObject =< lib.fluidContent
	cObject {
		templateName = CollapsibleContainer
		templateRootPaths {
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
		}
	}
	columns.0.renderObj =< tt_content.gridelements_pi1
}
