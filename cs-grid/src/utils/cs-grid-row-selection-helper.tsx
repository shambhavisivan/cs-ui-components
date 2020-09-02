import React from 'react';

import { Column } from 'ag-grid-community';

export function noOfVisibleButtons(
	rowId: string,
	column: Column,
	noOfInlineIcons: number,
	totalNoOfButtons: number
) {
	let firstIcon: HTMLElement = document.querySelectorAll<HTMLElement>(
		`.cs-grid_app-wrapper .cs-grid_main .ag-react-container #icon-item-${rowId}-0`
	)[0];

	if (!firstIcon) {
		firstIcon = document.querySelectorAll<HTMLElement>(
			`.cs-grid_app-wrapper .cs-grid_main .ag-react-container #icon-item-${rowId}-dropdown`
		)[0];
	}

	if (firstIcon) {
		const width = firstIcon.getBoundingClientRect().width;
		const columnWidth =
			column.getRight() - firstIcon.parentElement.getBoundingClientRect().left;

		const dropDownVisible = totalNoOfButtons > noOfInlineIcons;
		const noOfButtons = dropDownVisible ? noOfInlineIcons + 1 : noOfInlineIcons;
		if (width * noOfButtons < columnWidth) {
			return noOfInlineIcons;
		} else {
			let ableToFit = Math.floor(columnWidth / width) - 1;
			if (ableToFit < 0) {
				ableToFit = 0;
			}

			return ableToFit;
		}
	}
}

export function DefaultIcon() {
	return <span className='icon-bolt' aria-hidden='true' />;
}
