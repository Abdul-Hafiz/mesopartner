<?php

/**
 * Extension Manager/Repository config file for ext "mesopartner".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'mesopartner',
    'description' => 'mesopartner - connect the dots',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '7.6.0-9.5.99',
            't3sbootstrap' => '3.2.43-0.0.0'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Lazzydevelopers\\Mesopartner\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Abdulhafiz Shekh',
    'author_email' => 'hafsshaikh86@gmail.com',
    'author_company' => 'LazzyDevelopers',
    'version' => '1.0.0',
];
