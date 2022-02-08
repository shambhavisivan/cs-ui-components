import React from 'react';
import { CSDataTableRowInterface, CSLookup } from '@cloudsense/cs-ui-components';
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
						onSelectChange={(value: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => onChange(value)}
						onBlur={(event, value: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => onBlur(value)}
						className={styleClass}
						{...props}
					/>
				)
				: (
					<CSLookup
						onSelectChange={(value: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => onChange(value)}
						onBlur={(event, value: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => onBlur(value)}
						className={styleClass}
						{...props}
					/>
				)}
		</>
	);
};

export default CSFormLookupField;
