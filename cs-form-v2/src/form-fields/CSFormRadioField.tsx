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
	...props
}: CSFormRadioFieldProps) => {
	const {
		mode,
	} = useCSForm();

	const renderRadioOptions = () => radioOptions.map((option) => {
		const { name, radioOptionName, readOnly, ...rest } = option;
		return (
			<CSRadioOption
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(name, e.target.checked)}
				onBLur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(name, e.target.checked)}
				readOnly={mode === 'read-only' ? true : readOnly}
				name={radioOptionName}
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
