export default {
	name: 'CSLookup',
	type: 'props',
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
		}, {
			name: 'actions',
			customTypes: {
				name: 'CSLookupActionsProps',
				types: 'Array<CSLookupActionProps>'
			},
			description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
		}, {
			name: 'align',
			customTypes: {
				name: 'CSLookupDropdownAlign',
				types: [`'left'`, `'right'`]
			},
			default: `'left'`,
			description: 'Horizontally align the lookup dropdown in the case of an overflow.'
		}, {
			name: 'autoFocus',
			types: 'boolean',
			default: 'false',
			description: 'Set whether the lookup should be autofocused.'
		}, {
			name: 'borderRadius',
			types: 'string',
			default: `'0.25rem'`,
			description: 'Set a border radius style.'
		}, {
			name: 'disabled',
			types: 'boolean',
			default: 'false',
			description: 'Disable the lookup.'
		}, {
			name: 'dropdownHeight',
			types: 'string',
			description: 'Set height of lookup dropdown.'
		}, {
			name: 'dropdownWidth',
			types: 'string',
			description: 'Set width of lookup dropdown.'
		}, {
			name: 'error',
			types: 'boolean',
			default: 'false',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			customTypes: {
				name: 'CSFieldErrorMsgType',
				types: ['string', 'Array<string>']
			},
			description: 'Set the error message or messages for the lookup.'
		}, {
			name: 'errorTooltip',
			types: 'boolean',
			default: 'false',
			description: 'Show an error tooltip for the lookup.'
		}, {
			name: 'gridCustomPopup',
			types: 'boolean',
			default: 'false',
			description: 'Provides React Portal support for AG Grid custom popups'
		}, {
			name: 'helpText',
			types: 'string',
			description: 'Set the text to be displayed in the tooltip.'
		}, {
			name: 'hidden',
			types: 'boolean',
			default: 'false',
			description: 'Control the hidden attribute.'
		}, {
			name: 'icons',
			customTypes: {
				name: 'CSLookupIconProps',
				types: 'Array<CSLookupIconProps>'
			},
			description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
		}, {
			name: 'labelHidden',
			types: 'boolean',
			default: 'false',
			description: 'Hide the lookup label.'
		}, {
			name: 'labelTitle',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to set the title attribute.'
		}, {
			name: 'multiselect',
			types: 'boolean',
			default: 'false',
			description: 'Allow selection of multiple options.'
		}, {
			name: 'onBlur',
			types: '(event, value) => any',
			description: 'Handler method for the blur event.'
		}, {
			name: 'onClick',
			types: '(event) => any',
			description: 'Handler method for the click event.'
		}, {
			name: 'onDropdownClose',
			types: '() => void',
			description: 'Handler method for when the lookup is closed.'
		}, {
			name: 'onKeyDown',
			types: '(event) => any',
			description: 'Handler method for the keydown event.'
		}, {
			name: 'onSearch',
			types: '(event) => any',
			description: 'Handler method for when the search term changes.'
		}, {
			name: 'onSelectChange',
			types: '(event) => any',
			description: `Handler method for when the selection is changed. By returning false from handler method, selected item won't be updated. Undefined return value will evaluate as true.`
		}, {
			name: 'placeholder',
			types: 'string',
			description: 'Set a lookup placeholder.'
		}, {
			name: 'position',
			customTypes: {
				name: 'CSLookupDropdownPosition',
				types: [`'bottom'`, `'top'`]
			},
			default: `'bottom'`,
			description: 'Determine the vertical position of the lookup dropdown content.'
		}, {
			name: 'readOnly',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'required',
			types: 'boolean',
			default: 'false',
			description: 'Make the lookup required.'
		}, {
			name: 'title',
			types: 'string',
			description: 'Set the lookup title.'
		}, {
			name: 'tooltipPosition',
			customTypes: {
				name: 'CSTooltipPosition',
				types: [
					`'top-right'`,
					`'top-center'`,
					`'top-left'`,
					`'bottom-right'`,
					`'bottom-center'`,
					`'bottom-left'`,
					`'right-top'`,
					`'right-center'`,
					`'right-bottom'`,
					`'left-top'`,
					`'left-center'`,
					`'left-bottom'`
				]
			},
			default: `'top-right'`,
			description: 'Set the tooltip position for the lookup.'
		}, {
			name: 'value',
			types: [
				'CSDataTableRowInterface',
				'Array<CSDataTableRowInterface>',
				'null'
			],
			description: 'Set which values should be displayed in the lookup.'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set the ID for the lookup.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the wrapper div.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the text input.'
		}
	]
};
