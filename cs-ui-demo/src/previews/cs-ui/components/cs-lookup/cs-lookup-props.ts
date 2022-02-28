export default {
	name: 'CSLookup',
	type: 'props',
	data: [
		{
			name: 'columns',
			link: '/cs-ui/lookup#base-usage',
			required: true,
			types: 'Array<CSLookupTableColumnType>',
			description: 'Set which columns should be shown in the dropdown.'
		}, {
			name: 'fieldToBeDisplayed',
			link: '/cs-ui/lookup#base-usage',
			required: true,
			types: 'string',
			description: 'Set which field should be displayed when an option is selected.'
		}, {
			name: 'label',
			link: '/cs-ui/lookup#base-usage',
			required: true,
			types: 'string',
			description: 'Set the lookup label.'
		}, {
			name: 'mode',
			link: '/cs-ui/lookup#base-usage',
			required: true,
			types: [`'client'`, `'server'`],
			description: 'Set whether the component should run in client-side or server-side mode. The client-side mode loads records by reading the options prop and filtering takes place within the component, while the server-side mode enables asynchronous fetching of records with the fetchOptions prop, which also enables infinite scroll and setting the minimum search term length.'
		}, {
			name: 'actions',
			link: '/cs-ui/lookup#custom-data',
			customTypes: {
				name: 'CSLookupActionsProps',
				types: 'Array<CSLookupActionProps>'
			},
			description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
		}, {
			name: 'align',
			link: '/cs-ui/lookup#dropdown-position',
			customTypes: {
				name: 'CSLookupDropdownAlign',
				types: [`'left'`, `'right'`]
			},
			default: `'left'`,
			description: 'Horizontally align the lookup dropdown in the case of an overflow.'
		}, {
			name: 'autoFocus',
			link: '/cs-ui/lookup#input-options',
			types: 'boolean',
			default: 'false',
			description: 'Set whether the lookup should be autofocused.'
		}, {
			name: 'borderRadius',
			link: '/cs-ui/lookup#general',
			types: 'string',
			default: `'0.25rem'`,
			description: 'Set a border radius style.'
		}, {
			name: 'disabled',
			link: '/cs-ui/lookup#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Disable the lookup.'
		}, {
			name: 'dropdownHeight',
			link: '/cs-ui/lookup#dropdown-size',
			types: 'string',
			description: 'Set height of lookup dropdown.'
		}, {
			name: 'dropdownWidth',
			link: '/cs-ui/lookup#dropdown-size',
			types: 'string',
			description: 'Set width of lookup dropdown.'
		}, {
			name: 'error',
			link: '/cs-ui/lookup#error',
			types: 'boolean',
			default: 'false',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			link: '/cs-ui/lookup#error',
			customTypes: {
				name: 'CSFieldErrorMsgType',
				types: ['string', 'Array<string>']
			},
			description: 'Set the error message or messages for the lookup.'
		}, {
			name: 'errorTooltip',
			link: '/cs-ui/lookup#error',
			types: 'boolean',
			default: 'false',
			description: 'Show an error tooltip for the lookup.'
		}, {
			name: 'gridCustomPopup',
			link: '/cs-ui/lookup#general',
			types: 'boolean',
			default: 'false',
			description: 'Provides React Portal support for AG Grid custom popups'
		}, {
			name: 'helpText',
			link: '/cs-ui/lookup#label-options',
			types: 'string',
			description: 'Set the text to be displayed in the tooltip.'
		}, {
			name: 'hidden',
			link: '/cs-ui/lookup#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Control the hidden attribute.'
		}, {
			name: 'icons',
			link: '/cs-ui/lookup#custom-data',
			customTypes: {
				name: 'CSLookupIconProps',
				types: 'Array<CSLookupIconProps>'
			},
			description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
		}, {
			name: 'labelHidden',
			link: '/cs-ui/lookup#label-options',
			types: 'boolean',
			default: 'false',
			description: 'Hide the lookup label.'
		}, {
			name: 'labelTitle',
			link: '/cs-ui/lookup#label-options',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to set the title attribute.'
		}, {
			name: 'multiselect',
			link: '/cs-ui/lookup#selection',
			types: 'boolean',
			default: 'false',
			description: 'Allow selection of multiple options.'
		}, {
			name: 'onBlur',
			link: '/cs-ui/lookup#event-handling',
			types: '(event, value) => void',
			description: 'Handler method for the blur event.'
		}, {
			name: 'onClick',
			link: '/cs-ui/lookup#event-handling',
			types: '(event) => void',
			description: 'Handler method for the click event.'
		}, {
			name: 'onDropdownClose',
			link: '/cs-ui/lookup#event-handling',
			types: '() => void',
			description: 'Handler method for when the lookup is closed.'
		}, {
			name: 'onKeyDown',
			link: '/cs-ui/lookup#event-handling',
			types: '(event) => void',
			description: 'Handler method for the keydown event.'
		}, {
			name: 'onSearch',
			link: '/cs-ui/lookup#event-handling',
			types: '(event) => void',
			description: 'Handler method for when the search term changes.'
		}, {
			name: 'onSelectChange',
			link: '/cs-ui/lookup#event-handling',
			types: '(option) => void',
			description: `Handler method for when the selection is changed.`
		}, {
			name: 'placeholder',
			link: '/cs-ui/lookup#input-options',
			types: 'string',
			description: 'Set a lookup placeholder.'
		}, {
			name: 'position',
			link: '/cs-ui/lookup#dropdown-position',
			customTypes: {
				name: 'CSLookupDropdownPosition',
				types: [`'bottom'`, `'top'`]
			},
			default: `'bottom'`,
			description: 'Determine the vertical position of the lookup dropdown content.'
		}, {
			name: 'readOnly',
			link: '/cs-ui/lookup#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'required',
			link: '/cs-ui/lookup#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Make the lookup required.'
		}, {
			name: 'selectedKeys',
			link: '/cs-ui/lookup#selection',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'A single key or an array of keys corresponding to selected options.'
		}, {
			name: 'title',
			link: '/cs-ui/lookup#input-options',
			types: 'string',
			description: 'Set the lookup title.'
		}, {
			name: 'tooltipPosition',
			link: '/cs-ui/lookup#label-options',
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
			name: 'id',
			link: '/cs-ui/lookup#ids-&-classes',
			types: 'string',
			description: 'Set the ID for the lookup.'
		}, {
			name: 'className',
			link: '/cs-ui/lookup#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the wrapper div.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the text input.'
		}
	]
};
