import React from 'react';
import { CSSelect } from '@cloudsense/cs-ui-components';
import { CSFormSelectFieldProps } from '../types/cs-form-field-types';

const CSFormSelectField = ({
	fieldType,
	selectOptions,
	styleClass,
	...props
}: CSFormSelectFieldProps) => {
	const renderPicklistOptions = () => selectOptions.map((option) => (
		<option value={option.value} key={option.value}>{option.label}</option>
	));
	return (
		<CSSelect
			className={styleClass}
			{...props}
		>
			{renderPicklistOptions()}
		</CSSelect>
	);
};

export default CSFormSelectField;
