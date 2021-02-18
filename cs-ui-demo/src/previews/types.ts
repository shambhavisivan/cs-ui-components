import { CSAlertVariant } from '@cloudsense/cs-ui-components';

// =======================
// Component Preview Types
// =======================

export interface PreviewAlert {
	variant: CSAlertVariant;
	text: string;
}

export interface PreviewVariation {
	quickLink: string;
	component: JSX.Element | Element;
	code: string;
	primaryVariants?: string | Array<string>;
	secondaryVariants?: string | Array<string>;
}

export interface PreviewExample {
	propName: string;
	alert?: PreviewAlert;
	description?: string;
	variations: Array<PreviewVariation>;
}

export interface PreviewComponent {
	name: string;
	examples: Array<PreviewExample>;
}

export interface PreviewPropertiesProps {
	previews: Array<PreviewComponent>;
	name: string;
}

// =================
// Quick Links Props
// =================

export interface PreviewLinksProps {
	previews: Array<PreviewComponent>;
	name: string;
}

// ================
// Prop Table Types
// ================

export interface PreviewTableCustomType {
	name: string;
	types: Array<string>;
}

export interface PreviewTableComponentProperty {
	[key: string]: any;
	name: string;
	required?: true | string;
	types?: Array<string>;
	customTypes?: Array<PreviewTableCustomType>;
	default?: string;
	description?: string;
}

export interface PreviewTableComponent {
	[key: string]: any;
	name: string;
	properties: Array<PreviewTableComponentProperty>;
}

export interface PreviewTableProps {
	components: Array<PreviewTableComponent>;
}
