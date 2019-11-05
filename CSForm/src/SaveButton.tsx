import React from 'react';
import { ElementWrapper } from '.';

export interface SaveButtonProps {
	enabled: boolean;
	label: string;
	wrapper: ElementWrapper;
	clicked(): any;
}

export const SaveButton: React.FC<SaveButtonProps> = props => {
	return <button disabled={!props.enabled} {...props.wrapper.injectSaveButtonProps()} onClick={props.enabled && props.clicked}>{props.label}</button>;
};
