import React from 'react';
import { CSRadio, CSRadioOption } from '@cloudsense/cs-ui-components';
import { CSFormRadioFieldProps } from '../types/cs-form-field-types';
import { useCSForm } from '../CSFormContext';

const CSFormRadioField = ({
	fieldType,
	name,
	onBlur,
	onChange,
	onClick,
	onKeyDown,
	radioOptions,
	styleClass,
	value,
	...props
}: CSFormRadioFieldProps) => {
	const {
		mode,
	} = useCSForm();

	const renderRadioOptions = () => radioOptions.map((option) => {
		const { readOnly, radioOptionValue, ...rest } = option;
		return (
			<CSRadioOption
				key={radioOptionValue}
				checked={value === radioOptionValue}
				onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
				onClick={onClick}
				onKeyDown={onKeyDown}
				readOnly={mode === 'read-only' ? true : readOnly}
				name={name}
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
