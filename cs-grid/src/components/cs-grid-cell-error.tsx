import React from 'react';

import CSTooltip from '../../../src/components/CSTooltip';

export interface CSGridCellErrorProps {
	errorMessage: string;
}

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
