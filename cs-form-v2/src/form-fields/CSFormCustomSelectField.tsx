import React from 'react';
import { CSCustomSelect } from '@cloudsense/cs-ui-components';
import { CSFormCustomSelectFieldProps } from '../types/cs-form-field-types';

const CSFormCustomSelectField = ({
	fieldType,
	onChange,
	styleClass,
	value,
	...props
}: CSFormCustomSelectFieldProps) => (
	<CSCustomSelect
		onSelect={(option: any) => onChange(option)}
		onDeselect={(option: any) => onChange(option)}
		selectedKeys={value}
		className={styleClass}
		{...props}
	/>
);

export default CSFormCustomSelectField;
