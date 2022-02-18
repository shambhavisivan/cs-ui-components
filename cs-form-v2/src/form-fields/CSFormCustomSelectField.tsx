import React from 'react';
import { CSCustomSelect, CSCustomSelectOptionInterface } from '@cloudsense/cs-ui-components';
import { CSFormCustomSelectFieldProps } from '../types/cs-form-field-types';

const CSFormCustomSelectField = ({
	fieldType,
	onBlur,
	onChange,
	onClear,
	styleClass,
	value,
	...props
}: CSFormCustomSelectFieldProps) => (
	<CSCustomSelect
		onSelect={(option: CSCustomSelectOptionInterface) => onChange(option.key)}
		onDeselect={(option: CSCustomSelectOptionInterface) => onChange(option.key)}
		onClear={() => {
			onChange([]);
			onClear?.();
		}}
		onBlur={() => onBlur(value)}
		selectedKeys={value}
		className={styleClass}
		{...props}
	/>
);

export default CSFormCustomSelectField;
