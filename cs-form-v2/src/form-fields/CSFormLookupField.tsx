import React from 'react';
import { CSLookup } from '@cloudsense/cs-ui-components';
import { CSFormLookupFieldProps } from '../types/cs-form-field-types';

const CSFormLookupField = ({
	fieldType,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormLookupFieldProps) => {
	const { mode } = props;
	return (
		<>
			{mode === 'client'
				? (
					<CSLookup
						onSelectChange={(value: any) => onChange(value)}
						onBlur={(value: any) => onBlur(value)}
						className={styleClass}
						{...props}
					/>
				)
				: (
					<CSLookup
						onSelectChange={(value: any) => onChange(value)}
						onBlur={(value: any) => onBlur(value)}
						className={styleClass}
						{...props}
					/>
				)}
		</>
	);
};

export default CSFormLookupField;
