import React from 'react';
import { CSLookup } from '@cloudsense/cs-ui-components';
import { CSFormLookupFieldProps } from '../types/cs-form-field-types';

const CSFormLookupField = ({ fieldType, ...props }: CSFormLookupFieldProps) => {
	const { onChange, styleClass } = props;

	return (
		<>
			{props.mode === 'client'
				? (
					<CSLookup
						onSelectChange={onChange}
						className={styleClass}
						{...props}
					/>
				)
				: (
					<CSLookup
						onSelectChange={onChange}
						className={styleClass}
						{...props}
					/>
				)}
		</>
	);
};

export default CSFormLookupField;
