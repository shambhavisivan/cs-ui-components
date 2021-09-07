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
export type CSFormData = Array<CSFormSectionProps>;

export interface CSFormProps {
	// formSettings?: any;
	// locale?: any;
	// save: any;
	// update(data, errors)
	columnNumber?: number;
	data: CSFormData;
	externalValidationErrors?: Array<string>;
	mode?: CSFormMode;
	onBlur?: React.FocusEvent<HTMLElement>;
}
