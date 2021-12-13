import React from 'react';
import { CSSelect } from '@cloudsense/cs-ui-components';
import { CSFormSelectFieldProps } from '../types/cs-form-field-types';

const CSFormSelectField = ({
	fieldType,
	onBlur,
	onChange,
	selectOptions,
	styleClass,
	...props
}: CSFormSelectFieldProps) => {
	const renderPicklistOptions = () => selectOptions.map((option) => (
		<option value={option.value} key={option.key}>{option.value}</option>
	));
	return (
		<CSSelect
			className={styleClass}
			onBlur={(value: any) => onBlur(value)}
			onChange={(value: any) => onChange(value)}
			{...props}
		>
			{renderPicklistOptions()}
		</CSSelect>
	);
};

export default CSFormSelectField;
