<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

call_user_func(
	function($extKey, $_extconf)
	{


	/***************
	 * Extension configuration
	 */
	if ( $_extconf ) {
		$_extconf = unserialize($_extconf);
	} else {
		# default setting
		$_extconf = [
			 'rte_config' => '1',
			 'fontawesome' => '1',
			 'backendLayouts' => '1',
			 'expandedContent' => '0',
			 'animateCss' => '0',
			 'contentSlide' => '0'
		];
	}

	// Register for hook to show preview of tt_content element of CType="t3sbs_thumbnails & t3sbs_carousel" in page module
	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem'][] = 'T3SBS\\T3sbootstrap\\Hooks\\PreviewRenderer';

	if ((int)TYPO3_branch > 7) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/Default.ts">');
	} else {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/Default_7.ts">');
	}
	/***************
	 * Page TsConfig & Setup
	 */
	 # Default TSconfig
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/Default.ts">');

	 # BackendLayouts
	if (array_key_exists('backendLayouts', $_extconf) && $_extconf['backendLayouts'] === '1') {
		if (array_key_exists('expandedContent', $_extconf) && $_extconf['expandedContent'] === '1') {
			# with expanded content on top and bottom
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/BE_Layouts/Expanded.ts">');
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.expandedContent = 1');
		} else {
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/BE_Layouts/Default.ts">');
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.expandedContent = 0');
		}
	}

	 # Optional RTE
	if (array_key_exists('rte_config', $_extconf) && $_extconf['rte_config'] === '1') {
		if ((int)TYPO3_branch > 7) {
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/CKEditor.ts">');
			$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['t3sbootstrap'] = 'EXT:t3sbootstrap/Configuration/PageTSConfig/RTE/Default.yaml';
		} else {
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/RTE.ts">');
		}
	}

	 # Optional Font Awesome
	if (array_key_exists('fontawesome', $_extconf) && $_extconf['fontawesome'] === '1') {
		 # Contstant
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.fontawesome = 1');
	} else {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.fontawesome = 0');
	}

	# TYPO3_branch
	if ((int)TYPO3_branch < 8) {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.version = 7');
	} else {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.version = 8');
	}

	 # Optional content slide
	if (array_key_exists('contentSlide', $_extconf) && $_extconf['contentSlide'] === '1') {
		 # Contstant
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.contentSlide = 1');
	} else {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.contentSlide = 0');
	}

	 # if indexed_search is loaded
	if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('indexed_search') ) {
		 # Setup
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript($extKey,
			'setup','<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/Extensions/indexed_search/Setup.ts">',
			defaultContentRendering
		);
	}

	 # if news is loaded
	if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('news') ) {
		 # TsConfig
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $extKey . '/Resources/Private/Extensions/news/TsConfig.ts">');
		 # Setup
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript($extKey,
				 'setup','<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/Extensions/news/Setup.ts">',
				 defaultContentRendering
		);
	}

	 # if dyncss & dyncss_less is loaded
	if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss')
	 && \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_less')) {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.dyncss = 1');
	} else {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.dyncss = 0');
	}

	 # Optional Animate.css
	if (array_key_exists('animateCss', $_extconf) && $_extconf['animateCss'] === '1') {
		 # Contstant
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.animateCss = 1');
	} else {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.animateCss = 0');
	}


	/***************
	 * Add RootLine Fields: keywords & description
	 */
	$rootlinefields = &$GLOBALS["TYPO3_CONF_VARS"]["FE"]["addRootLineFields"];
	if($rootlinefields != '') $rootlinefields .= ' , ';
	$rootlinefields .= 'keywords,description';


	},
	$_EXTKEY, $_EXTCONF
);
