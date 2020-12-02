import React from 'react';

import { Column } from 'ag-grid-community';

export function noOfVisibleButtons(
	id: string,
	column: Column,
	noOfInlineIcons: number,
	totalNoOfButtons: number,
	useDropdown: boolean,
	contentsWidth: number
) {
	let firstIcon: HTMLElement = document.querySelectorAll<HTMLElement>(
		`.cs-grid_app-wrapper .cs-grid_main .ag-react-container #icon-item-${id}-0`
	)[0];

	if (!firstIcon) {
		firstIcon = document.querySelectorAll<HTMLElement>(
			`.cs-grid_app-wrapper .cs-grid_main .ag-react-container #icon-item-${id}-dropdown`
		)[0];
	}

	if (firstIcon) {
		const width = firstIcon.getBoundingClientRect().width;
		const columnWidth = column.getRight() - column.getLeft() - contentsWidth;

		const dropDownVisible = totalNoOfButtons > noOfInlineIcons;
		const noOfButtons = dropDownVisible && useDropdown ? noOfInlineIcons + 1 : noOfInlineIcons;
		if (width * noOfButtons < columnWidth) {
			return noOfInlineIcons;
		} else {
			let ableToFit = Math.floor(columnWidth / width);
			ableToFit = useDropdown ? ableToFit - 1 : ableToFit;

			if (ableToFit < 0) {
				ableToFit = 0;
			}

			return ableToFit;
		}
	} else {
		return 1;
	}
}
