import { CSTooltip, CSTooltipPosition } from '@cloudsense/cs-ui-components';
import React from 'react';

export interface CSGridCellErrorProps {
	errorMessage: string;
	position?: CSTooltipPosition;
}

/**
 * Creates an error icon with a tooltip popup.
 * @param props - errorMessage: An error message for displaying in the tooltip.
 */
export function CSGridCellError(props: CSGridCellErrorProps) {
	if (!props.errorMessage) {
		return null;
	}

	return (
		<CSTooltip
			content={props.errorMessage}
			position={props.position}
			variant='error'
			iconName='warning'
		/>
	);
}
