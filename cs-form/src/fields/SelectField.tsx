import React from 'react';
import { FormFieldProps } from './FormField';
import { SelectOption } from '../types/SelectOption';
import { FieldType } from '../types/FormDescriptor';

interface SelectFieldProps extends FormFieldProps {
	selectOptions: Array<SelectOption>;
}

export const SelectField: React.FC<SelectFieldProps> = props => {
	return <select
		{...props.wrapper.injectInputProps(props.descriptor.name, props.descriptor.fieldType as FieldType, props.status)}
		value={props.value || ''}
		name={props.descriptor.name}
		onChange={e => props.handleFieldChange(e.target.value)}
		required={props.status === 'mandatory'}
		disabled={props.status === 'visible'}>
		{props.selectOptions && props.selectOptions.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
	</select>;
};
