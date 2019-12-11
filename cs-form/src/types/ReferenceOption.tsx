export interface ReferenceOptionColumn {
	key: string;
	label: string;
}

/**
 * Represents a single option of a 'REFERENCE' type field.
 * In addition to Id, Name can contain other key value pairs which will be displayed
 * in option row based on form field config 'referenceOptionColumns'
 */
export interface ReferenceOption {
	/**
	 * The reference id which will be set as field value if the option is chosen
	 */
	Id: string;
	Name: string;
	[key: string]: string;
}
