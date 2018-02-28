#-------------------------------------------------------------------------------
#	New Content Element Wizard
#-------------------------------------------------------------------------------
mod.wizards {
	newContentElement {
		wizardItems {
			common.elements {
				textmedia.tt_content_defValues.imageorient = 25
			}
			t3sbs {
				header = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_contentelements
				elements {
					t3sbspanel {
						iconIdentifier = bs-panel
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_panel.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_panel.description
						tt_content_defValues.CType = t3sbs_panel
					}
					t3sbsthumbnails {
						iconIdentifier = bs-thumbnail-element
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_thumbnails.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_thumbnails.description
						tt_content_defValues.CType = t3sbs_thumbnails
					}
					t3sbscarousel {
						iconIdentifier = bs-carousel-element
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_carousel.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_carousel.description
						tt_content_defValues.CType = t3sbs_carousel
					}
					t3sbsfluidtemplate {
						iconIdentifier = bs-fluidtemplate
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_fluidtemplate.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_fluidtemplate.description
						tt_content_defValues.CType = t3sbs_fluidtemplate
					}
					t3sbsgallery {
						iconIdentifier = bs-gallery
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbsgallery.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbsgallery.description
						tt_content_defValues.CType = t3sbs_gallery
					}
				}
				show := addToList(t3sbspanel,t3sbsthumbnails,t3sbscarousel,t3sbsfluidtemplate,t3sbsgallery)
			}
		}
	}
}

#-------------------------------------------------------------------------------
#	Content
#-------------------------------------------------------------------------------
TCEFORM.tt_content {
	linkToTop.disabled = 1
	header_position.disabled = 1
	space_before_class.disabled = 1
	space_after_class.disabled = 1

	imageorient.addItems.66 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.imageorient.66
	imageorient.addItems.77 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.imageorient.77
	imagecols.removeItems = 5,7,8
	imagecols.addItems.88 = BOOTSTRAP: Carousel
	imagecols {
		types {
			t3sbs_gallery {
				label.default = Columns
				label.de = Spalten
				addItems.12 = 12
				removeItems = 5,7,8,88
			}
		}
	}

	# New menu type
	menu_type.addItems.9 = BOOTSTRAP: Affix
	menu_type.altLabels.2 = BOOTSTRAP: Sitemap
	menu_type.altLabels.8 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.menu_type.8

	tx_t3sbootstrap_flexform {
		types {
			t3sbs_thumbnails.disabled = 1
		}
	}
	tx_t3sbootstrap_content_slide {
		types {
			t3sbs_thumbnails.disabled = 1
			t3sbs_carousel.disabled = 1
		}
	}
	imagecols {
		types {
			t3sbs_thumbnails.disabled = 1
		}
	}
	imageborder {
		types {
			t3sbs_thumbnails.disabled = 1
		}
	}
	imageorient {
		types {
			t3sbs_thumbnails.disabled = 1
		}
	}
	media {
		types {
			gridelements_pi1.disabled = 1
		}
	}

}

#-------------------------------------------------------------------------------
#	Pages
#-------------------------------------------------------------------------------
# disable backend-layout for page types - Info: https://docs.typo3.org/typo3cms/extensions/subdoktypes/ExtSubdoktypes/Configuration/CommonDoktypes/Index.html
TCEFORM.pages.backend_layout.types.3.disabled = 1
TCEFORM.pages.backend_layout_next_level.types.3.disabled = 1
TCEFORM.pages.backend_layout.types.4.disabled = 1
#TCEFORM.pages.backend_layout_next_level.types.4.disabled = 1
TCEFORM.pages.backend_layout.types.199.disabled = 1
TCEFORM.pages.backend_layout_next_level.types.199.disabled = 1
TCEFORM.pages.backend_layout.types.254.disabled = 1
TCEFORM.pages.backend_layout_next_level.types.254.disabled = 1
TCEFORM.pages.backend_layout.types.255.disabled = 1
TCEFORM.pages.backend_layout_next_level.types.255.disabled = 1

#-------------------------------------------------------------------------------
#	Gridelements
#-------------------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/Gridelements.ts">
