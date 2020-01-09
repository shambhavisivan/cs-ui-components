import React from 'react';

export interface ButtonProps {
	enabled: boolean;
	label: string;
	additionalProps?: Record<string, any>;
	clicked: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = props => {
	return <button
		className="cs-btn cs-btn-no-icon cs-btn-brand"
		disabled={!props.enabled}
		{...props.additionalProps}
		onClick={props.clicked}>
		<span className="cs-btn-label">{props.label}</span>
	</button>;
};
