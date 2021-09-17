import React from 'react';
import { FormFieldProps } from './FormField';
import { SelectOption } from '../types/SelectOption';
import { FieldType } from '../types/FormDescriptor';
import { CSSelect } from '@cloudsense/cs-ui-components';

interface SelectFieldProps extends FormFieldProps {
	selectOptions: Array<SelectOption>;
}

export const SelectField: React.FC<SelectFieldProps> = props => {
	const value = props.value || '';
	return (
		<CSSelect
			{...props.wrapper.injectInputProps(
				props.descriptor.name,
				props.descriptor.fieldType as FieldType,
				props.status
			)}
			label={props.descriptor.name}
			required={props.status === 'mandatory'}
			disabled={props.status === 'visible' || props.descriptor.enabled === 'false'}
			name={props.descriptor.name}
			onChange={(e: string) => {
				props.handleFieldBlur(e);
			}}
			value={value}
			title={value}
			labelHidden
			icons={props.descriptor.icons}
		>
			{props.selectOptions &&
				props.selectOptions.map(r => (
					<option key={r.value} value={r.value}>
						{r.label}
					</option>
				))}
		</CSSelect>
	);
};
