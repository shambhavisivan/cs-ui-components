import React from 'react';
import { FormFieldProps } from './FormField';
import { FieldType } from '../types/FormDescriptor';

export const SimpleField: React.FC<FormFieldProps> = props => {
	return <input
		{...props.wrapper.injectInputProps(props.descriptor.name, props.descriptor.fieldType as FieldType, props.status)}
		type="text"
		name={props.descriptor.name}
		value={props.value}
		onChange={e => props.handleFieldChange(e.target.value)}
		required={props.status === 'mandatory'}
		readOnly={props.status === 'visible'}
	/>;
};
