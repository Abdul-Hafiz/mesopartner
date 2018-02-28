<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

call_user_func(
	function($extKey)
	{

	/***************
	 * Include TypoScript
	 */
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript', 'Bootstrap Components');

	/***************
	 * Register Icons
	 */
	$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
	$icons = ['bs-carousel-element', 'bs-fluidtemplate', 'bs-gallery', 'bs-panel', 'bs-thumbnail-element'];
	foreach ($icons as $icon) {
		$iconRegistry->registerIcon(
			$icon,
			\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
			['source' => 'EXT:t3sbootstrap/Resources/Public/Icons/Bootstrap/'.$icon.'.svg']
		);
	}
	$icons = ['ge-2_col', 'ge-3_col', 'ge-4_col', 'ge-accordion-container', 'ge-accordion-element', 'ge-background_wrapper',
	'ge-carousel-container', 'ge-modal', 'ge-parallax_wrapper', 'ge-tab-container', 'ge-tab-element', 'ge-thumbnail-container'];
	foreach ($icons as $icon) {
		$iconRegistry->registerIcon(
			$icon,
			\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
			['source' => 'EXT:t3sbootstrap/Resources/Public/Icons/GridElements/'.$icon.'.svg']
		);
	}

	/***************
	 * Register PageTSConfig Files
	*/
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
		't3sbootstrap',
		'Configuration/PageTSConfig/Registered/Flag.ts',
		'Set the default language label and flag to german');

	if ((int)TYPO3_branch < 8) {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
			't3sbootstrap',
			'Configuration/PageTSConfig/Registered/RTEaddTable.ts',
			'Add table buttons to the RTE');
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
			't3sbootstrap',
			'Configuration/PageTSConfig/Registered/RTEenableRel.ts',
			'Enable a rel field in RTE link settings');
	}
	if ((int)TYPO3_branch > 7) {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
			't3sbootstrap',
			'Configuration/PageTSConfig/Registered/DisableCSCCEs.ts',
			'Disable the content elements (text,textpic and image)');
	}

	/***************
	 * Include Backend Module
	 */
	if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss')
	 && \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_less')
	 && TYPO3_MODE === 'BE' ) {
		\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule(
			'T3SBS.' . $extKey,
			'tools',
			'm1',
			'',
			[
				'Less' => 'index,create,reset,copy',
			],
			[
				'access' => 'admin',
				'icon'	 => 'EXT:' . $extKey . '/ext_icon.gif',
				'labels'  => 'LLL:EXT:' . $extKey . '/Resources/Private/Language/locallang_mod.xlf',
			]
		);
	}

	},
	$_EXTKEY
);
