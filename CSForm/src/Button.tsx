import React from 'react';

export interface ButtonProps {
	enabled: boolean;
	label: string;
	additionalProps?: Record<string, any>;
	clicked: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = props => {
	return <button
		disabled={!props.enabled}
		{...props.additionalProps}
		onClick={props.clicked}>
		{props.label}
	</button>;
};
