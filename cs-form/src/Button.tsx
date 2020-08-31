import React from 'react';
const { CSButton } = require('@cloudsense/cs-ui-components');

export interface ButtonProps {
	enabled: boolean;
	label: string;
	additionalProps?: Record<string, any>;
	clicked: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = props => {
	return (
		<CSButton
			disabled={!props.enabled}
			label={props.label}
			onClick={props.clicked}
			{...props.additionalProps}
		/>
	);
};
