import React from 'react';
import { FormFieldProps } from './FormField';
import { FieldType } from '../types/FormDescriptor';
import { CSInputText } from '@cloudsense/cs-ui-components';

export const SimpleField: React.FC<FormFieldProps> = props => {
	const value = props.value !== undefined && props.value !== null ? props.value : '';

	return (
		<CSInputText
			label={props.descriptor.name}
			{...props.wrapper.injectInputProps(
				props.descriptor.name,
				props.descriptor.fieldType as FieldType,
				props.status
			)}
			name={props.descriptor.name}
			value={value}
			onChange={event => props.handleFieldChange(event.target.value)}
			onBlur={event => props.handleFieldBlur(event.target.value)}
			required={props.status === 'mandatory'}
			readOnly={props.status === 'visible' || props.descriptor.enabled === 'false'}
			hidden={props.status === 'hidden'}
			title={value}
			labelHidden
			icons={props.icons}
		/>
	);
};
