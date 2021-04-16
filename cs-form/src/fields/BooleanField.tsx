import React from 'react';
import { FormFieldProps } from './FormField';
const { CSCheckbox } = require('@cloudsense/cs-ui-components');
import { FieldType } from '../types/FormDescriptor';

export const BooleanField: React.FC<FormFieldProps> = props => {
	return (
		<CSCheckbox
			{...props.wrapper.injectInputProps(
				props.descriptor.name,
				props.descriptor.fieldType as FieldType,
				props.status
			)}
			label={props.descriptor.label || ''}
			name={props.descriptor.name}
			checked={props.value}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				props.handleFieldChange(e.target.checked)
			}
			disabled={props.status === 'visible' || props.descriptor.enabled === 'false'}
			hidden={props.status === 'hidden'}
			title={props.value ? 'True' : 'False'}
			labelHidden
		/>
	);
};
