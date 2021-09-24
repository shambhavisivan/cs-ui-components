import React from 'react';
import { CSLookup } from '@cloudsense/cs-ui-components';
import { CSFormLookupFieldProps } from '../types/cs-form-field-types';

const CSFormLookupField = ({ fieldType, ...props }: CSFormLookupFieldProps) => {
	const { name, onBlur, onChange, styleClass } = props;

	return (
		<>
			{props.mode === 'client'
				? (
					<CSLookup
						onSelectChange={(value: any) => onChange(name, value)}
						onBlur={(value: any) => onBlur(name, value)}
						className={styleClass}
						{...props}
					/>
				)
				: (
					<CSLookup
						onSelectChange={(value: any) => onChange(name, value)}
						onBlur={(value: any) => onBlur(name, value)}
						className={styleClass}
						{...props}
					/>
				)}
		</>
	);
};

export default CSFormLookupField;
