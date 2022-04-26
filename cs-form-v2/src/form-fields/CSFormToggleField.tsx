import React from 'react';
import { CSToggle } from '@cloudsense/cs-ui-components';
import { CSFormToggleFieldProps } from '../types/cs-form-field-types';

const CSFormToggleField = ({
	type,
	onBlur,
	onChange,
	onFocus,
	styleClass,
	value,
	...props
}: CSFormToggleFieldProps) => (
	<CSToggle
		className={styleClass}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.checked)}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
		onFocus={(e: React.FocusEvent<HTMLInputElement>) => onFocus(e.target.checked)}
		checked={value}
		{...props}
	/>
);

export default CSFormToggleField;
