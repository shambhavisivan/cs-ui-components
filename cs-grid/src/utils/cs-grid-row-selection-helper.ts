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
		// The checkbox, left and right padding takes up width 40, but 36 looks better.
		const columnWidth = column.getActualWidth() - 36;

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
