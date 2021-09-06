import { CSFormFieldProps } from './cs-form-field-types';

/** FORM SECTION PROPS */
export interface CSFormSectionProps {
	collapsible?: boolean;
	defaultClosed?: boolean;
	error?: boolean;
	errorMessage?: Array<string> | string;
	fields: Array<CSFormFieldProps>;
	hideSectionHeader?: boolean;
	key: string;
	label: string;
}
