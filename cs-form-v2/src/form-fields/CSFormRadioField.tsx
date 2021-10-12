import React from 'react';
import { CSRadio, CSRadioOption } from '@cloudsense/cs-ui-components';
import { CSFormRadioFieldProps } from '../types/cs-form-field-types';
import { useCSForm } from '../CSFormContext';

const CSFormRadioField = ({
	fieldType,
	onBlur,
	onChange,
	radioOptions,
	styleClass,
	value,
	...props
}: CSFormRadioFieldProps) => {
	const {
		mode,
	} = useCSForm();

	const renderRadioOptions = () => radioOptions.map((option) => {
		const { radioOptionName, readOnly, radioOptionValue, ...rest } = option;
		return (
			<CSRadioOption
				key={radioOptionValue}
				checked={value === radioOptionValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
				onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
				readOnly={mode === 'read-only' ? true : readOnly}
				name={radioOptionName}
				value={radioOptionValue}
				{...rest}
			/>
		);
	});
	return (
		<CSRadio
			className={styleClass}
			{...props}
		>
			{renderRadioOptions()}
		</CSRadio>
	);
};

export default CSFormRadioField;
