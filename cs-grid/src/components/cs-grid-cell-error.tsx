import { CSTooltip } from '@cloudsense/cs-ui-components';
// TODO: needs exposing in cs-ui-components.
// tslint:disable-next-line: no-submodule-imports
import { CSTooltipPosition } from '@cloudsense/cs-ui-components/dist/src/components/CSTooltip';
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

	return <CSTooltip content={props.errorMessage} position={props.position} variant='error' />;
}
