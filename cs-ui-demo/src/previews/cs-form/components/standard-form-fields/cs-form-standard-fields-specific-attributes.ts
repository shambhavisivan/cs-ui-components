export const CSFormChecboxFieldAttributes = {
	name: 'CSFormCheckboxField Specific',
	type: 'attributes',
	data: [
		{
			name: 'indeterminate',
			type: 'boolean',
			default: 'false',
			description: 'Control the indeterminate state of the checkbox.'
		}
	]
};

export const CSFormCustomSelectFieldAttributes = {
	name: 'CSFormCustomSelectField Specific',
	type: 'attributes',
	data: [
		{
			name: 'options',
			required: true,
			types: 'Array<CSFormCustomSelectOption>',
			description: 'Array of objects with key and label attributes that define the available select options.'
		}, {
			name: 'multiselect',
			types: 'boolean',
			default: 'false',
			description: 'Add support for selecting multiple items.'
		}, {
			name: 'onClear',
			types: '() => void',
			description: 'Handler method for clearing the selection.'
		}, {
			name: 'onSearch',
			types: '(event) => void',
			description: 'Handler method when the search term changes.'
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
			types: 'string',
			default: `'dd-MM-yyyy'`,
			description: 'Set the date format for various locales. (eg. dd-MM-yyyy, MM-dd-yyyy, yyyy-MM-dd, etc.)'
		}, {
			name: 'locale',
			types: 'any',
			description: 'Set the datepicker locale.'
		}
	]
};

export const CSFormDateTimeFieldAttributes = {
	name: 'CSFormDateTimeField Specific',
	type: 'attributes',
	data: [
		{
			name: 'dateFormat',
			types: 'string',
			default: `'dd-MM-yyyy'`,
			description: 'Set the date format for various locales. (eg. dd-MM-yyyy, MM-dd-yyyy, yyyy-MM-dd, etc.)'
		}, {
			name: 'locale',
			types: 'any',
			description: 'Set the datepicker locale.'
		}, {
			name: 'timeCaption',
			types: 'string',
			description: 'Set the title for the time column.'
		}, {
			name: 'timeFormat',
			types: 'string',
			description: 'Set the date format for various locales. (eg. HH:mm, HH:mm:ss, yyyy-MM, yyyy-MM:dd, etc.)'
		}, {
			name: 'timeIntervals',
			types: 'number',
			description: 'Set the interval between each time value. (eg. 15, 20, 30, 60, etc.)'
		}
	]
};

export const CSFormLookupFieldAttributes = {
	name: 'CSFormLookupField Specific',
	type: 'attributes',
	data: [
		{
			name: 'columns',
			required: true,
			types: 'Array<CSLookupTableColumnType>',
			description: 'Set which columns should be shown in the dropdown.'
		}, {
			name: 'fieldToBeDisplayed',
			required: true,
			types: 'string',
			description: 'Set which field should be displayed when an option is selected.'
		}, {
			name: 'label',
			required: true,
			types: 'string',
			description: 'Set the lookup label.'
		}, {
			name: 'mode',
			required: true,
			types: [`'client'`, `'server'`],
			description: 'Set whether the component should run in client-side or server-side mode. The client-side mode loads records by reading the options prop and filtering takes place within the component, while the server-side mode enables asynchronous fetching of records with the fetchOptions prop, which also enables infinite scroll and setting the minimum search term length.'
		}

	]
};

export const CSFormLookupFieldClientAttributes = {
	name: 'CSFormLookupField Client Mode Specific',
	type: 'attributes',
	data: [
		{
			name: 'options',
			required: true,
			types: 'Array<CSDataTableRowInterface>',
			description: 'Set the data that should be shown in the dropdown.'
		}, {
			name: 'loading',
			types: 'boolean',
			default: 'false',
			description: 'Render a spinner in the dropdown instead of options.'
		}, {
			name: 'searchBy',
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
			required: true,
			types: '(searchTerm, pageSize, pageNo) => Promise<CSLookupFetchResult>',
			description: 'Set a function which will be called on every search or focus change if the minTermLength prop is 0. The function takes the search term, the page size (which determines the number of returned records) and the page number which will automatically increase on every infiniteScroll event. It returns an object with a records property of the same type as options and a boolean moreRecords property which indicates whether further records can be fetched.'
		}, {
			name: 'pageSize',
			required: true,
			types: 'number',
			description: 'Set the number of records that should be returned after each lookup records fetch.'
		}, {
			name: 'infiniteScroll',
			types: 'boolean',
			default: 'false',
			description: 'Enable fetching additional records when the dropdown scroll hits the bottom.'
		}, {
			name: 'minTermLength',
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
			name: 'max',
			types: 'any',
			description: 'Set a max value for the number input.'
		}, {
			name: 'min',
			types: 'any',
			description: 'Set a min value for the number input.'
		}, {
			name: 'useLocale',
			types: 'boolean',
			description: 'Set whether the number field value will be formatted by the defined locale.'
		}
	]
};

export const CSFormRadioFieldAttributes = {
	name: 'CSFormRadioField Specific',
	type: 'attributes',
	data: [
		{
			name: 'radioOptions',
			customTypes: {
				name: 'Array<CSFormRadioOption>',
				types: 'See CSFormRadioOption Attributes'
			},
			required: true,
			description: 'Define options which will be rendered as a part of the grouped input radio elements.'
		}
	]
};

export const CSFormRadioOptionAttributes = {
	name: 'CSFormRadioOption',
	type: 'attributes',
	data: [
		{
			name: 'label',
			types: 'string',
			required: true,
			description: 'Set the radio option label.'
		}, {
			name: 'radioOptionValue',
			required: true,
			types: 'string',
			description: 'Set the radio option value.'
		}, {
			name: 'readOnly',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'disabled',
			types: 'boolean',
			default: 'false',
			description: 'Disable the radio option.'
		}, {
			name: 'title',
			types: 'string',
			description: 'Set the radio option title.'
		}
	]
};

export const CSFormSelectFieldAttributes = {
	name: 'CSFormSelectField Specific',
	type: 'attributes',
	data: [
		{
			name: 'selectOptions',
			customTypes: {
				name: 'Array<CSFormSelectOption>',
				types: 'See CSFormSelectOption Attributes'
			},
			required: true,
			description: 'Set the options which will be available in the picklist.'
		}
	]
};

export const CSFormSelectOptionAttributes = {
	name: 'CSFormSelectOption',
	type: 'attributes',
	data: [
		{
			name: 'key',
			types: 'ReactText',
			required: true,
			description: 'Set a unique key for the select option.'
		}, {
			name: 'value',
			types: 'string',
			required: true,
			description: 'Set the value of the select option.'
		}
	]
};

export const CSFormTextFieldAttributes = {
	name: 'CSFormTextField Specific',
	type: 'attributes',
	data: [
		{
			name: 'maxLength',
			types: 'number',
			description: 'Set the maximum length of the value.'
		}
	]
};

export const CSFormTextareaFieldAttributes = {
	name: 'CSFormTextareaField Specific',
	type: 'attributes',
	data: [
		{
			name: 'maxHeight',
			types: 'string',
			description: 'Set the max-height for the textarea. (eg. 200px, 20rem, etc.)'
		}, {
			name: 'rows',
			types: 'number',
			default: '3',
			description: 'Set how many rows the textarea defaults to.'
		}
	]
};
