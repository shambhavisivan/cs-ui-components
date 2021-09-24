import { CSFormFieldData } from './cs-form-field-types';

/** FORM SECTION PROPS */
export interface CSFormSectionProps {
	collapsible?: boolean;
	defaultClosed?: boolean;
	error?: boolean;
	errorMessage?: Array<string> | string;
	fields: Array<CSFormFieldData>;
	hideSectionHeader?: boolean;
	sectionKey: string;
	label: string;
}
