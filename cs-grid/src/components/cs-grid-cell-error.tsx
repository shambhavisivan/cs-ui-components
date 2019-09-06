import React from 'react';

import { CSGridTooltip } from './cs-grid-tooltip';

/**
 * errorMessage - An error message for displaying in the tooltip.
 */
export interface CSGridCellErrorProps {
	errorMessage: string;
}

/**
 * Creates an info icon with a tooltip popup.
 * @param props - errorMessage: An error message for displaying in the tooltip.
 */
export function CSGridCellError(props: CSGridCellErrorProps) {
	if (!props.errorMessage) {
		return null;
	}

	return (
		<CSGridTooltip helpText={props.errorMessage}>
			<span className='icon-info' aria-hidden='true' />
		</CSGridTooltip>
	);
}
