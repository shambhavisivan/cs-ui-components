export default {
	name: 'Client Side',
	type: 'props',
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
