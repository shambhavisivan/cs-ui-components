import React from 'react';
import { CSLookup } from '@cloudsense/cs-ui-components';
import { CSFormLookupFieldProps } from '../types/cs-form-field-types';

const CSFormLookupField = (props: CSFormLookupFieldProps) => {
	const { styleClass } = props;

	return (
		<>
			{props.mode === 'client'
				? (
					<CSLookup
						className={styleClass}
						{...props}
					/>
				)
				: (
					<CSLookup
						className={styleClass}
						{...props}
					/>
				)}
		</>
	);
};

export default CSFormLookupField;
