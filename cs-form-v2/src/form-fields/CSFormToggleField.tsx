import React from 'react';
import { CSToggle } from '@cloudsense/cs-ui-components';
import { CSFormToggleFieldProps } from '../types/cs-form-field-types';

const CSFormTextField = ({
	fieldType,
	name,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormToggleFieldProps) => (
	<CSToggle
		className={styleClass}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.checked)}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
		{...props}
	/>
);

export default CSFormTextField;
