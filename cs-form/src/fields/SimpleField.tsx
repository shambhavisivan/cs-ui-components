import React from 'react';
import { FormFieldProps } from './FormField';
import { FieldType } from '../types/FormDescriptor';
const { CSInputText } = require('@cloudsense/cs-ui-components');

export const SimpleField: React.FC<FormFieldProps> = props => {
	const value = props.value ? props.value : '';
	return (
		<CSInputText
			label={props.descriptor.name}
			{...props.wrapper.injectInputProps(props.descriptor.name, props.descriptor.fieldType as FieldType, props.status)}
			name={props.descriptor.name}
			value={value}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.handleFieldChange(e.target.value)}
			required={props.status === 'mandatory'}
			readOnly={props.status === 'visible'}
			hidden={props.status === 'hidden'}
			title={value}
			labelHidden
		/>
	);
};
