<?php
/**
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

use TYPO3\CMS\Core\Messaging\FlashMessage;
use TYPO3\CMS\Core\Messaging\FlashMessageService;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Update class for the extension manager.
 *
 * @package TYPO3
 * @subpackage tx_t3sbootstrap
 */
class ext_update
{

	/**
	 * Array of flash messages (params) array[][status,title,message]
	 *
	 * @var array
	 */
	protected $messageArray = [];

	/**
	 * @var \TYPO3\CMS\Core\Database\DatabaseConnection
	 */
	protected $databaseConnection;


	/**
	 * Constructor
	 */
	public function __construct()
	{
		$this->databaseConnection = $GLOBALS['TYPO3_DB'];

	}

	/**
	 * Main update function called by the extension manager.
	 *
	 * @return string
	 */
	public function main()
	{
		$this->processUpdates();
		return $this->generateOutput();
	}

	/**
	 * Called by the extension manager to determine if the update menu entry
	 * should by showed.
	 *
	 * @return bool
	 */
	public function access()
	{
		return true;
	}

	/**
	 * The actual update function. Add your update task in here.
	 *
	 * @return void
	 */
	protected function processUpdates()
	{

		// Update 't3sbs_gallery' records
		$count_t3sbs_gallery = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_gallery" AND media != 0 AND assets = 0 AND deleted=0');

		if ($count_t3sbs_gallery) {
			$query = '
				UPDATE tt_content
				LEFT JOIN sys_file_reference
				ON sys_file_reference.uid_foreign=tt_content.uid
				AND sys_file_reference.tablenames=' . $this->databaseConnection->fullQuoteStr('tt_content', 'sys_file_reference')
				. ' AND sys_file_reference.fieldname=' . $this->databaseConnection->fullQuoteStr('media', 'sys_file_reference')
				. ' SET sys_file_reference.fieldname =' . $this->databaseConnection->fullQuoteStr('assets', 'sys_file_reference')
				. ', tt_content.assets=tt_content.media, tt_content.media=0
				 WHERE tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_gallery', 'tt_content');

			$this->databaseConnection->sql_query($query);

			$this->messageArray[] = [FlashMessage::OK, 'Migrate media to assets for CType t3sbs_gallery', $count_t3sbs_gallery.' records have been updated!'];
		}



		// Update 'gridelements_pi1 background_wrapper' records
		$count_flexform_bgImage = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "gridelements_pi1" AND assets = 0
		AND tx_gridelements_backend_layout = "background_wrapper" AND deleted=0');

		if ($count_flexform_bgImage) {

			$bgws = $this->databaseConnection->exec_SELECTgetRows('uid, pi_flexform', 'tt_content','CType = "gridelements_pi1" AND assets = 0
			AND tx_gridelements_backend_layout = "background_wrapper" AND deleted=0');

			$count_bgws = 0;

			foreach ($bgws as $bgw) {

				$uid = (int)$bgw['uid'];

				$ffValues = GeneralUtility::xml2array( $bgw['pi_flexform'] );

				if ($ffValues['data']['general']['lDEF']['bgImage']['vDEF']) {

					$query = '
						UPDATE tt_content
						LEFT JOIN sys_file_reference
						ON sys_file_reference.uid_foreign=' . $uid
						. ' AND tt_content.uid=' . $uid
						. ' SET sys_file_reference.fieldname=' . $this->databaseConnection->fullQuoteStr('assets', 'sys_file_reference')
						. ', tt_content.assets=1
						WHERE tt_content.CType=' . $this->databaseConnection->fullQuoteStr('gridelements_pi1', 'tt_content')
						. ' AND tt_content.tx_gridelements_backend_layout=' . $this->databaseConnection->fullQuoteStr('background_wrapper', 'tt_content');

					$this->databaseConnection->sql_query($query);

					$count_bgws++;
				}
			}

			if($count_bgws)
			$this->messageArray[] = [FlashMessage::OK, 'Migrate flexform_bgImage to assets in sys_file_reference for tx_gridelements_backend_layout =  background_wrapper', $count_bgws.' records have been updated!'];
		}



		// Update 'gridelements_pi1 parallax_wrapper' records
		$count_flexform_parallaxImage = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "gridelements_pi1" AND assets = 0
		AND tx_gridelements_backend_layout = "parallax_wrapper" AND deleted=0');

		if ($count_flexform_parallaxImage) {

			$pws = $this->databaseConnection->exec_SELECTgetRows('uid, pi_flexform', 'tt_content','CType = "gridelements_pi1" AND assets = 0
			AND tx_gridelements_backend_layout = "parallax_wrapper" AND deleted=0');

			$count_pw = 0;

			foreach ($pws as $pw) {

				$uid = (int)$pw['uid'];

				$ffValues = GeneralUtility::xml2array( $pw['pi_flexform'] );

				if ($ffValues['data']['general']['lDEF']['bgImage']['vDEF']) {

					$query = '
						UPDATE tt_content
						LEFT JOIN sys_file_reference
						ON sys_file_reference.uid_foreign=' . $uid
						. ' AND tt_content.uid=' . $uid
						. ' SET sys_file_reference.fieldname=' . $this->databaseConnection->fullQuoteStr('assets', 'sys_file_reference')
						. ', tt_content.assets=1
						WHERE tt_content.CType=' . $this->databaseConnection->fullQuoteStr('gridelements_pi1', 'tt_content')
						. ' AND tt_content.tx_gridelements_backend_layout=' . $this->databaseConnection->fullQuoteStr('parallax_wrapper', 'tt_content');

					$this->databaseConnection->sql_query($query);

					$count_pw++;
				}
			}

			if($count_pw)
			$this->messageArray[] = [FlashMessage::OK, 'Migrate flexform_bgImage to assets in sys_file_reference for tx_gridelements_backend_layout =  parallax_wrapper', $count_pw.' records have been updated!'];
		}


		// Check for errors
		if ($this->databaseConnection->sql_error()) {
			$this->messageArray[] = [FlashMessage::ERROR, 'SQL-ERROR:', htmlspecialchars($this->databaseConnection->sql_error())];
			return $this->generateOutput();
		}


	}


	/**
	 * Generates output by using flash messages
	 *
	 * @return string
	 */
	protected function generateOutput()
	{
		 /** @var FlashMessageService $flashMessageService */
		$flashMessageService = GeneralUtility::makeInstance(FlashMessageService::class);
		$defaultFlashMessageQueue = $flashMessageService->getMessageQueueByIdentifier();

		if ($this->messageArray[0]) {
			foreach ($this->messageArray as $messageItem) {
				/** @var \TYPO3\CMS\Core\Messaging\FlashMessage $flashMessage */
				$flashMessage = GeneralUtility::makeInstance(
					FlashMessage::class,
					$messageItem[2],
					$messageItem[1],
					$messageItem[0]);
					$defaultFlashMessageQueue->enqueue($flashMessage);
			}
		} else {

			/** @var \TYPO3\CMS\Core\Messaging\FlashMessage $flashMessage */
			$flashMessage = GeneralUtility::makeInstance(
					FlashMessage::class,
				'Nothing to do - you\'re up to date!',
				'Update script',
				FlashMessage::INFO);
				$defaultFlashMessageQueue->enqueue($flashMessage);
		}

		return $defaultFlashMessageQueue->renderFlashMessages();
	}

}
