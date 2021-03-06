<?php
namespace T3SBS\T3sbootstrap\Hooks;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Backend\View\PageLayoutViewDrawItemHookInterface;
use TYPO3\CMS\Backend\View\PageLayoutView;
use TYPO3\CMS\Backend\Utility\BackendUtility;

/**
 * Contains a preview rendering for the page module of CType="t3sbs_thumbnails"
 */
class PreviewRenderer implements PageLayoutViewDrawItemHookInterface {

	/**
	 * Preprocesses the preview rendering of a content element of type "t3sbs_thumbnails ..."
	 *
	 * @param \TYPO3\CMS\Backend\View\PageLayoutView $parentObject Calling parent object
	 * @param bool $drawItem Whether to draw the item using the default functionality
	 * @param string $headerContent Header content
	 * @param string $itemContent Item content
	 * @param array $row Record row of tt_content
	 *
	 * @return void
	 */
	public function preProcess(
		PageLayoutView &$parentObject,
		&$drawItem,
		&$headerContent,
		&$itemContent,
		array &$row
	) {
		if ($row['CType'] === 't3sbs_thumbnails') {
			if ($row['bodytext']) {
				$itemContent .= $parentObject->linkEditContent($parentObject->renderText($row['bodytext']), $row) . '<br />';
			}

			if ($row['assets']) {
				$itemContent .= $parentObject->thumbCode($row, 'tt_content', 'assets') . '<br />';

				$fileReferences = BackendUtility::resolveFileReferences('tt_content', 'assets', $row);

				if (!empty($fileReferences)) {
					$linkedContent = '';

					foreach ($fileReferences as $fileReference) {
						$linkedContent .= htmlspecialchars($fileReference->getDescription()) . '<br />';
					}

					$itemContent .= $parentObject->linkEditContent($linkedContent, $row);

					unset($linkedContent);
				}
			}

			$drawItem = FALSE;
		}
		if ($row['CType'] === 't3sbs_carousel') {
			if ($row['bodytext']) {
				$itemContent .= $parentObject->linkEditContent($parentObject->renderText($row['bodytext']), $row) . '<br />';
			}

			if ($row['assets']) {
				$itemContent .= $parentObject->thumbCode($row, 'tt_content', 'assets') . '<br />';

				$fileReferences = BackendUtility::resolveFileReferences('tt_content', 'assets', $row);

				if (!empty($fileReferences)) {
					$linkedContent = '';

					foreach ($fileReferences as $fileReference) {
						$linkedContent .= htmlspecialchars($fileReference->getDescription()) . '<br />';
					}

					$itemContent .= $parentObject->linkEditContent($linkedContent, $row);

					unset($linkedContent);
				}
			}

			$drawItem = FALSE;
		}


	}
}