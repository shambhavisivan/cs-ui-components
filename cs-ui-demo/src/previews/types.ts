// CS UI Specific interfaces
export interface CSUIPreviewInterface {
	name: string;
	usage?: string;
	alerts?: AlertInterface | Array<AlertInterface>;
	accessible?: string;
	components: Array<ComponentInterface>;
	api?: Array<ApiInterface>;
	accessibility?: AccessibilityInterface;
	children?: JSX.Element | Element;
	activeElement?: Element;
	searchTerm?: string;
}

export interface ComponentInterface {
	name: string;
	attributes?: boolean;
	examples?: Array<ExampleInterface>;
	properties: Array<PropInterface>;
}

export interface ExampleInterface {
	propName: string;
	alert?: AlertInterface;
	description?: string;
	variations: Array<VariationInterface>;
}

export interface VariationInterface {
	quickLink?: string;
	primaryVariants?: string | Array<string>;
	secondaryVariants?: string | Array<string>;
	component: JSX.Element | Element;
	code?: string;
}

// CS Form Specific Interfaces
export interface CSFormPreviewInterface {
	name: string;
	usage?: string;
	fieldTypes: Array<CSFormFieldTypesInterface>;
	api?: Array<ApiInterface>;
	children?: JSX.Element | Element;
	activeElement?: Element;
}

export interface CSFormFieldTypesInterface {
	name: string;
	example?: Array<CSFormExampleInterface>;
	properties: Array<PropInterface>;
}

export interface CSFormExampleInterface {
	description?: string;
	previews: Array<CSFormVisualInterface>;
}

export interface CSFormVisualInterface {
	field: JSX.Element | Element;
	code?: string;
}

// Generic Interfaces
export interface PropInterface {
	name: string;
	required?: boolean | string;
	types?: string | Array<string>;
	customTypes?: CustomTypeInterface | Array<CustomTypeInterface>;
	default?: string;
	description?: string;
}

export interface CustomTypeInterface {
	name: string;
	types: string | Array<string>;
}

export interface ApiInterface {
	quickLink?: string;
	primaryVariants?: string | Array<string>;
	secondaryVariants?: string | Array<string>;
	component: JSX.Element | Element;
	code?: string;
	arguments: Array<ArgumentInterface>;
}

export interface ArgumentInterface {
	name: string;
	required?: boolean | string;
	types?: string | Array<string>;
	customTypes?: CustomTypeInterface | Array<CustomTypeInterface>;
	default?: string;
	description?: string;
}

export interface AccessibilityInterface {
	criterionList?: Array<string>;
	requirements?: AccessibilityRequirementsInterface;
}

export interface AccessibilityRequirementsInterface {
	structure?: Array<string>;
	attributes?: Array<string>;
	styling?: Array<string>;
	keyboardOperability?: Array<string>;
}

export interface AlertInterface {
	variant: string;
	text: string;
}
