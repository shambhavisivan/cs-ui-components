import React from 'react';
import { CSPicklist, CSPicklistOptionInterface } from '@cloudsense/cs-ui-components';
import { CSFormPicklistFieldProps } from '../types/cs-form-field-types';

const CSFormPicklistField = ({
	type,
	onBlur,
	onChange,
	onClear,
	onFocus,
	styleClass,
	value,
	...props
}: CSFormPicklistFieldProps) => (
	<CSPicklist
		onSelect={(option: CSPicklistOptionInterface) => onChange(option.key)}
		onDeselect={(option: CSPicklistOptionInterface) => onChange(option.key)}
		onClear={() => {
			onChange([]);
			onClear?.();
		}}
		onBlur={() => onBlur(value)}
		onFocus={() => onFocus(value)}
		selectedKeys={value}
		className={styleClass}
		{...props}
	/>
);

export default CSFormPicklistField;
