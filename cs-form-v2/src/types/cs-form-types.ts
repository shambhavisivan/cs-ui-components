// data
// mode=”read-only”
// columnNumber - default 4 / 5
// locale - date and number  ?
// externalValidationErrors ?
// formSettings
// update(data, errors) - called whenever the form object changes
// onBlur
// save

import React from 'react';
import { CSFormSectionProps } from './cs-form-section-types';

export type CSFormMode = 'read-only';

export interface CSFormProps {
	// formSettings?: any;
	// locale?: any;
	// save: any;
	// update(data, errors)
	columnNumber?: number;
	data: Array<CSFormSectionProps>;
	externalValidationErrors?: Array<string>;
	mode?: CSFormMode;
	onBLur?: React.FocusEvent<HTMLElement>;
}
