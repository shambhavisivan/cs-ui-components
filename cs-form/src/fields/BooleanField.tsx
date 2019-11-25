import React from 'react';

import { FormFieldProps } from './FormField';
import { FieldType } from '../types/FormDescriptor';

export const BooleanField: React.FC<FormFieldProps> = props => {
	return <input
		{...props.wrapper.injectInputProps(props.descriptor.name, props.descriptor.fieldType as FieldType, props.status)}
		type="checkbox"
		name={props.descriptor.name}
		checked={props.value}
		onChange={e => (props.handleFieldChange(e.target.checked))}
		disabled={props.status === 'visible'}
	/>;
};
