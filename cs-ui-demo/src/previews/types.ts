export interface PreviewInterface {
	name: string;
	usage?: string;
	alerts?: AlertInterface | Array<AlertInterface>;
	accessible?: string;
	components: Array<ComponentInterface>;
	api?: Array<ApiInterface>;
	accessibility?: AccessibilityInterface;
	children?: JSX.Element | Element;
	activeElement?: Element;
}

export interface ComponentInterface {
	name: string;
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
