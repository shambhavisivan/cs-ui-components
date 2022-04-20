import React from 'react';
import { CSDataTableRowInterface, CSLookup } from '@cloudsense/cs-ui-components';
import { CSFormLookupFieldProps } from '../types/cs-form-field-types';

const CSFormLookupField = ({
	type,
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
						onSelectChange={(value: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => onChange(value)}
						onBlur={(event: React.FocusEvent<HTMLInputElement>, value: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => onBlur(value)}
						className={styleClass}
						{...props}
					/>
				)
				: (
					<CSLookup
						onSelectChange={(value: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => onChange(value)}
						onBlur={(event: React.FocusEvent<HTMLInputElement>, value: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => onBlur(value)}
						className={styleClass}
						{...props}
					/>
				)}
		</>
	);
};

export default CSFormLookupField;
