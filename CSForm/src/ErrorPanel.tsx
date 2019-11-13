import React from 'react';
import { ElementWrapper } from '.';

export interface ErrorPanelProps {
	wrapper: ElementWrapper;
	errors: Array<string>;
}

export const ErrorPanel: React.FC<ErrorPanelProps> = props => {
	if (props.errors && props.errors.length > 0) {
		return props.wrapper.wrapErrorPanel('form-error',
			<>
				{props.errors.map((error, idx) =>
					<React.Fragment key={`form-error${idx}`}>{error}</React.Fragment>
				)}
			</>
		);
	} else {
		return null;
	}
};
