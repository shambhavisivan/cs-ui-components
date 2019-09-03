import React from 'react';

// TODO: Work around until cs-ui-components npm package exists.
import CSTooltip from '../../../src/components/CSTooltip';

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
export default function CSGridCellError(props: CSGridCellErrorProps) {
	if (!props.errorMessage) {
		return null;
	}

	return (
		<CSTooltip helpText={props.errorMessage}>
			<span className='icon-info' aria-hidden='true' />
		</CSTooltip>
	);
}
