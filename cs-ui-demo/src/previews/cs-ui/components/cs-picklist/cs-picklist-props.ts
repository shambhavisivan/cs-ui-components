export default {
	name: 'CSPicklist',
	type: 'props',
	data: [
		{
			name: 'options',
			link: '/cs-ui/picklist#base-usage',
			required: true,
			types: 'Array<CSPicklistOptionInterface>',
			description: 'Array of objects with key and label attributes that define the available select options.'
		}, {
			name: 'label',
			link: '/cs-ui/picklist#base-usage',
			required: true,
			types: 'string',
			description: 'Set the picklist label.'
		}, {
			name: 'actions',
			link: '/cs-ui/picklist#custom-data',
			customTypes: {
				name: 'CSPicklistActionsProps',
				types: 'Array<CSPicklistActionProps>'
			},
			description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
		}, {
			name: 'align',
			link: '/cs-ui/picklist#dropdown-position',
			customTypes: [{
				name: 'CSPicklistDropdownAlign',
				types: [`'left'`, `'right'`]
			}],
			default: `'left'`,
			description: 'Horizontally align the picklist dropdown in the case of an overflow.'
		}, {
			name: 'borderRadius',
			link: '/cs-ui/picklist#general',
			types: 'string',
			default: `'0.25rem'`,
			description: 'Set a border radius style.'
		}, {
			name: 'cleareable',
			link: '/cs-ui/picklist#selection',
			types: 'string',
			default: 'false',
			description: 'Show or hide the clear button.'
		}, {
			name: 'disabled',
			link: '/cs-ui/picklist#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Disable the picklist.'
		}, {
			name: 'dropdownActions',
			link: '/cs-ui/picklist#dropdown-actions',
			types: 'Array<CSButtonProps>',
			description: 'Add custom action items to the dropdown.'
		}, {
			name: 'error',
			link: '/cs-ui/picklist#error',
			types: 'boolean',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			link: '/cs-ui/picklist#error',
			customTypes: {
				name: 'CSFieldErrorMsgType',
				types: ['string', 'Array<string>']
			},
			description: 'Set the error message or messages for the picklist.'
		}, {
			name: 'errorTooltip',
			link: '/cs-ui/picklist#error',
			types: 'boolean',
			default: 'false',
			description: 'Show an error tooltip for the picklist.'
		}, {
			name: 'gridCustomPopup',
			link: '/cs-ui/picklist#general',
			types: 'boolean',
			default: 'false',
			description: 'Provides React Portal support for AG Grid custom popups.'
		}, {
			name: 'helpText',
			link: '/cs-ui/picklist#label-options',
			types: 'string',
			description: 'Set the text to be displayed for the tooltip.'
		}, {
			name: 'hidden',
			link: '/cs-ui/picklist#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Control the hidden attribute.'
		}, {
			name: 'icons',
			link: '/cs-ui/picklist#custom-data',
			customTypes: {
				name: 'CSPicklistIconProps',
				types: 'Array<CSPicklistIconProps>'
			},
			description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
		}, {
			name: 'labelHidden',
			link: '/cs-ui/picklist#label-options',
			types: 'boolean',
			default: 'false',
			description: 'Hide the picklist label.'
		}, {
			name: 'labelTitle',
			link: '/cs-ui/picklist#label-options',
			types: 'boolean',
			description: 'Control whether to set the title attribute on the field label.'
		}, {
			name: 'multiselect',
			link: '/cs-ui/picklist#multiselect',
			types: 'boolean',
			default: 'false',
			description: 'Add support for selecting multiple items.'
		}, {
			name: 'onBlur',
			link: '/cs-ui/picklist#event-handling',
			types: '(event) => void',
			description: 'Handler method for the blur event.'
		}, {
			name: 'onClear',
			link: '/cs-ui/picklist#event-handling',
			types: '() => void',
			description: 'Handler method for clearing the selection.'
		}, {
			name: 'onClick',
			link: '/cs-ui/picklist#event-handling',
			types: '(event) => void',
			description: 'Handler method for the click event.'
		}, {
			name: 'onDeselect',
			link: '/cs-ui/picklist#multiselect',
			types: '(option) => void',
			description: 'Handler method for deselecting an option. Should only be used with multiselect.'
		}, {
			name: 'onDropdownClose',
			link: '/cs-ui/picklist#event-handling',
			types: '() => void',
			description: 'Handler method when picklist dropdown closes.'
		}, {
			name: 'onFocus',
			link: '/cs-ui/picklist#event-handling',
			types: '(event) => void',
			description: 'Handler method for the focus event.'
		}, {
			name: 'onKeyDown',
			link: '/cs-ui/picklist#event-handling',
			types: '(event) => void',
			description: 'Handler method for the keydown event.'
		}, {
			name: 'onSearch',
			link: '/cs-ui/picklist#search',
			types: '(event) => void',
			description: 'Handler method when search term changes.'
		}, {
			name: 'onSelect',
			link: '/cs-ui/picklist#selection',
			types: '(option) => void',
			description: 'Handler method for when the selection is changed.'
		}, {
			name: 'placeholder',
			link: '/cs-ui/picklist#input-options',
			types: 'string',
			description: 'Set a picklist input placeholder.'
		}, {
			name: 'position',
			link: '/cs-ui/picklist#dropdown-position',
			customTypes: [{
				name: 'CSPicklistDropdownPosition',
				types: [`'bottom'`, `'top'`]
			}],
			default: `'bottom'`,
			description: 'Determine the vertical position of the picklist dropdown content.'
		}, {
			name: 'readOnly',
			link: '/cs-ui/picklist#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'required',
			link: '/cs-ui/picklist#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Make the picklist required.'
		}, {
			name: 'searchBy',
			link: '/cs-ui/picklist#search',
			default: `'label'`,
			customTypes: [{
				name: 'CSPicklistSearchByType',
				types: [`'label'`, `'all'`]
			}],
			description: 'Specify which dataset to search through.'
		}, {
			name: 'selectedKeys',
			link: '/cs-ui/picklist#selection',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'A single key or an array of keys corresponding to selected options.'
		}, {
			name: 'showCompactMultiselect',
			link: '/cs-ui/picklist#multiselect',
			types: 'boolean',
			default: 'false',
			description: 'Hides multiselect items from input wrapper.'
		}, {
			name: 'title',
			link: '/cs-ui/picklist#input-options',
			types: 'string',
			description: 'Set the picklist title.'
		}, {
			name: 'tooltipPosition',
			link: '/cs-ui/picklist#label-options',
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
			description: 'Set the tooltip position for the picklist.'
		}, {
			name: 'id',
			link: '/cs-ui/picklist#ids-&-classes',
			types: 'string',
			description: 'Set the ID for the picklist.'
		}, {
			name: 'className',
			link: '/cs-ui/picklist#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the picklist.'
		}, {
			name: '[key: string]',
			link: '/cs-ui/picklist',
			types: 'any',
			description: 'Spreads the rest of the props to the picklist input.'
		}
	]
};
