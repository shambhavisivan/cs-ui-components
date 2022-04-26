import React from 'react';
import { CSTextarea } from '@cloudsense/cs-ui-components';
import { CSFormTextareaFieldProps } from '../types/cs-form-field-types';

const CSFormTextareaField = ({
	type,
	onBlur,
	onChange,
	onFocus,
	styleClass,
	...props
}: CSFormTextareaFieldProps) => (
	<CSTextarea
		className={styleClass}
		onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => onBlur(e.target.value)}
		onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
		onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => onFocus(e.target.value)}
		{...props}
	/>
);

export default CSFormTextareaField;
