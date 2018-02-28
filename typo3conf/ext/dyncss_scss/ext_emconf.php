<?php

/**
 * Extension Manager/Repository config file for ext "dyncss_scss".
 *
 * Auto generated 15-05-2017 20:17
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 */

$EM_CONF[$_EXTKEY] = array(
	'title' => 'DynCss - SCSS Parser',
	'description' => 'DynCss-Parser',
	'category' => 'fe',
	'shy' => 1,
	'version' => '1.1.1',
	'priority' => '',
	'loadOrder' => '',
	'module' => '',
	'state' => 'stable',
	'uploadfolder' => 1,
	'createDirs' => '',
	'modify_tables' => '',
	'clearcacheonload' => 1,
	'lockType' => '',
	'author' => 'Kay Strobach',
	'author_email' => 'kay.strobach@typo3.org',
	'author_company' => '',
	'CGLcompliance' => '',
	'CGLcompliance_note' => '',
	'constraints' => array(
		'depends' => array(
			'dyncss' => '0.8.0-0.8.99',
			'typo3' => '7.6.15-8.7.99',
		),
	),
);

