import React from 'react';
import { CSCustomSelect, CSCustomSelectOptionInterface } from '@cloudsense/cs-ui-components';
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
	<CSCustomSelect
		onSelect={(option: CSCustomSelectOptionInterface) => onChange(option.key)}
		onDeselect={(option: CSCustomSelectOptionInterface) => onChange(option.key)}
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
