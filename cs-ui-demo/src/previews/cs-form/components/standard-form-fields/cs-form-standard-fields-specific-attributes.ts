export const CSFormChecboxFieldAttributes = {
	name: 'CSFormCheckboxField Specific',
	type: 'attributes',
	data: [
		{
			name: 'indeterminate',
			link: 'cs-form/standard-form-fields#checkbox',
			type: 'boolean',
			default: 'false',
			description: 'Control the indeterminate state of the checkbox.'
		}, {
			name: 'value',
			type: 'boolean',
			default: 'false',
			description: 'Set checked value of checkbox field.'
		}
	]
};

export const CSFormCustomSelectFieldAttributes = {
	name: 'CSFormCustomSelectField Specific',
	type: 'attributes',
	data: [
		{
			name: 'options',
			link: '/cs-form/standard-form-fields#custom-select',
			required: true,
			types: 'Array<CSFormCustomSelectOption>',
			description: 'Array of objects with key and label attributes that define the available select options.'
		}, {
			name: 'multiselect',
			link: '/cs-form/standard-form-fields#custom-select',
			types: 'boolean',
			default: 'false',
			description: 'Add support for selecting multiple items.'
		}, {
			name: 'onClear',
			link: '/cs-form/standard-form-fields#custom-select',
			types: '() => void',
			description: 'Handler method for clearing the selection.'
		}, {
			name: 'onSearch',
			link: '/cs-form/standard-form-fields#custom-select',
			types: '(event) => void',
			description: 'Handler method when the search term changes.'
		}, {
			name: 'value',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'A single key or an array of keys corresponding to selected options.'
		}
	]
};

export const CSFormCustomSelectOptionAttributes = {
	name: 'CSFormCustomSelectOption',
	type: 'attributes',
	data: [
		{
			name: 'key',
			types: 'ReactText',
			required: true,
			description: 'Set a unique key for the custom select option.'
		}, {
			name: 'label',
			types: 'ReactText',
			required: true,
			description: 'Set the label to display for the custom select option.'
		}
	]
};

export const CSFormDateFieldAttributes = {
	name: 'CSFormDateField Specific',
	type: 'attributes',
	data: [
		{
			name: 'dateFormat',
			link: '/cs-form/standard-form-fields#date',
			types: 'string',
			default: `'dd-MM-yyyy'`,
			description: 'Set the date format for various locales. (eg. dd-MM-yyyy, MM-dd-yyyy, yyyy-MM-dd, etc.)'
		}, {
			name: 'locale',
			types: 'any',
			description: 'Set the datepicker locale.'
		}, {
			name: 'value',
			types: 'Date',
			description: 'Set selected date.'
		}
	]
};

export const CSFormDateTimeFieldAttributes = {
	name: 'CSFormDateTimeField Specific',
	type: 'attributes',
	data: [
		{
			name: 'dateFormat',
			link: '/cs-form/standard-form-fields#date-time',
			types: 'string',
			default: `'dd-MM-yyyy'`,
			description: 'Set the date format for various locales. (eg. dd-MM-yyyy, MM-dd-yyyy, yyyy-MM-dd, etc.)'
		}, {
			name: 'locale',
			types: 'any',
			description: 'Set the datepicker locale.'
		}, {
			name: 'timeCaption',
			link: '/cs-form/standard-form-fields#date-time',
			types: 'string',
			description: 'Set the title for the time column.'
		}, {
			name: 'timeFormat',
			link: '/cs-form/standard-form-fields#date-time',
			types: 'string',
			description: 'Set the date format for various locales. (eg. HH:mm, HH:mm:ss, yyyy-MM, yyyy-MM:dd, etc.)'
		}, {
			name: 'timeIntervals',
			link: '/cs-form/standard-form-fields#date-time',
			types: 'number',
			description: 'Set the interval between each time value. (eg. 15, 20, 30, 60, etc.)'
		}, {
			name: 'value',
			types: 'Date',
			description: 'Set selected date.'
		}
	]
};

export const CSFormLookupFieldAttributes = {
	name: 'CSFormLookupField Specific',
	type: 'attributes',
	data: [
		{
			name: 'columns',
			link: '/cs-form/standard-form-fields#lookup',
			required: true,
			types: 'Array<CSLookupTableColumnType>',
			description: 'Set which columns should be shown in the dropdown.'
		}, {
			name: 'fieldToBeDisplayed',
			link: '/cs-form/standard-form-fields#lookup',
			required: true,
			types: 'string',
			description: 'Set which field should be displayed when an option is selected.'
		}, {
			name: 'label',
			link: '/cs-form/standard-form-fields#lookup',
			required: true,
			types: 'string',
			description: 'Set the lookup label.'
		}, {
			name: 'mode',
			link: '/cs-form/standard-form-fields#lookup',
			required: true,
			types: [`'client'`, `'server'`],
			description: 'Set whether the component should run in client-side or server-side mode. The client-side mode loads records by reading the options prop and filtering takes place within the component, while the server-side mode enables asynchronous fetching of records with the fetchOptions prop, which also enables infinite scroll and setting the minimum search term length.'
		}, {
			name: 'value',
			types: [
				'CSDataTableRowInterface',
				'Array<CSDataTableRowInterface>',
				'null'
			],
			description: 'Set which values should be displayed in the lookup.'
		}

	]
};

export const CSFormLookupFieldClientAttributes = {
	name: 'CSFormLookupField Client Mode Specific',
	type: 'attributes',
	data: [
		{
			name: 'options',
			link: '/cs-form/standard-form-fields#lookup',
			required: true,
			types: 'Array<CSDataTableRowInterface>',
			description: 'Set the data that should be shown in the dropdown.'
		}, {
			name: 'loading',
			link: '/cs-form/standard-form-fields#lookup',
			types: 'boolean',
			default: 'false',
			description: 'Render a spinner in the dropdown instead of options.'
		}, {
			name: 'searchBy',
			link: '/cs-form/standard-form-fields#lookup',
			types: 'Array<string>',
			description: 'Set the keys by which the options should be filtered. By default, the options are filtered by the key provided in the columns prop.'
		}
	]
};

export const CSFormLookupFieldServerAttributes = {
	name: 'CSFormLookupField Server Mode Specific',
	type: 'attributes',
	data: [
		{
			name: 'fetchOptions',
			link: '/cs-form/standard-form-fields#lookup',
			required: true,
			types: '(searchTerm, pageSize, pageNo) => Promise<CSLookupFetchResult>',
			description: 'Set a function which will be called on every search or focus change if the minTermLength prop is 0. The function takes the search term, the page size (which determines the number of returned records) and the page number which will automatically increase on every infiniteScroll event. It returns an object with a records property of the same type as options and a boolean moreRecords property which indicates whether further records can be fetched.'
		}, {
			name: 'pageSize',
			link: '/cs-form/standard-form-fields#lookup',
			required: true,
			types: 'number',
			description: 'Set the number of records that should be returned after each lookup records fetch.'
		}, {
			name: 'infiniteScroll',
			link: '/cs-form/standard-form-fields#lookup',
			types: 'boolean',
			default: 'false',
			description: 'Enable fetching additional records when the dropdown scroll hits the bottom.'
		}, {
			name: 'minTermLength',
			link: '/cs-form/standard-form-fields#lookup',
			types: 'number',
			default: '0',
			description: 'Set the minimum number of characters that needs to be entered before fetchOptions is fired.'
		}
	]
};

export const CSFormNumberFieldAttributes = {
	name: 'CSFormNumberField Specific',
	type: 'attributes',
	data: [
		{
			name: 'fractionDigits',
			link: '/cs-form/standard-form-fields#number',
			types: 'number',
			description: 'The number of digits to appear after the decimal point. Locale format settings will override fractionDigits value.'
		}, {
			name: 'max',
			link: '/cs-form/standard-form-fields#number',
			types: 'any',
			description: 'Set a max value for the number input.'
		}, {
			name: 'min',
			link: '/cs-form/standard-form-fields#number',
			types: 'any',
			description: 'Set a min value for the number input.'
		}, {
			name: 'useLocale',
			link: '/cs-form/standard-form-fields#number',
			types: 'boolean',
			description: 'Set whether the number field value will be formatted by the defined locale.'
		}, {
			name: 'value',
			types: 'any',
			description: 'Set value for number field.'
		}
	]
};

/** Needs to be updated once CSRadio documentation is merged */
export const CSFormRadioFieldAttributes = {
	name: 'CSFormRadioField Specific',
	type: 'attributes',
	data: [
		{
			name: 'disabledKeys',
			link: '/cs-form/standard-form-fields#radio',
			types: 'Array<React.Text>',
			description: 'Set disabled radio options based on their keys.'
		}, {
			name: 'options',
			link: '/cs-form/standard-form-fields#radio',
			customTypes: {
				name: 'Array<CSFormRadioOption>',
				types: 'See CSFormRadioOption Attributes'
			},
			required: true,
			description: 'Define options which will be rendered as a part of the grouped input radio elements.'
		}, {
			name: 'value',
			types: 'string',
			description: 'Set selected radio option value.'
		}
	]
};

export const CSFormRadioOptionAttributes = {
	name: 'CSFormRadioOption',
	type: 'attributes',
	data: [
		{
			name: 'label',
			link: '/cs-form/standard-form-fields#radio',
			types: 'string',
			required: true,
			description: 'Set the radio option label.'
		}, {
			name: 'key',
			link: '/cs-form/standard-form-fields#radio',
			required: true,
			types: 'string',
			description: 'Set the radio option key.'
		}, {
			name: 'title',
			link: '/cs-form/standard-form-fields#radio',
			types: 'string',
			description: 'Set the radio option title.'
		}
	]
};

export const CSFormTextFieldAttributes = {
	name: 'CSFormTextField Specific',
	type: 'attributes',
	data: [
		{
			name: 'maxLength',
			link: '/cs-form/standard-form-fields#text',
			types: 'number',
			description: 'Set the maximum length of the value.'
		}, {
			name: 'value',
			types: 'string',
			description: 'Set value for text field.'
		}
	]
};

export const CSFormTextareaFieldAttributes = {
	name: 'CSFormTextareaField Specific',
	type: 'attributes',
	data: [
		{
			name: 'maxHeight',
			link: '/cs-form/standard-form-fields#text',
			types: 'string',
			description: 'Set the max-height for the textarea. (eg. 200px, 20rem, etc.)'
		}, {
			name: 'rows',
			link: '/cs-form/standard-form-fields#text',
			types: 'number',
			default: '3',
			description: 'Set how many rows the textarea defaults to.'
		}, {
			name: 'value',
			types: 'string',
			description: 'Set value for textarea field.'
		}
	]
};
