export default {
	name: 'CSLookup',
	type: 'props',
	data: [
		{
			name: 'options',
			link: '/cs-ui/custom-select#base-usage',
			required: true,
			types: 'Array<CSCustomSelectOptionInterface>',
			description: 'Array of objects with key and label attributes that define the available select options.'
		}, {
			name: 'label',
			link: '/cs-ui/custom-select#base-usage',
			required: true,
			types: 'string',
			description: 'Set the custom select label.'
		}, {
			name: 'actions',
			link: '/cs-ui/custom-select#custom-data',
			customTypes: {
				name: 'CSCustomSelectActionsProps',
				types: 'Array<CSCustomSelectActionProps>'
			},
			description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
		}, {
			name: 'align',
			link: '/cs-ui/custom-select#dropdown-position',
			customTypes: [{
				name: 'CSCustomSelectDropdownAlign',
				types: [`'left'`, `'right'`]
			}],
			default: `'left'`,
			description: 'Horizontally align the custom select dropdown in the case of an overflow.'
		}, {
			name: 'borderRadius',
			link: '/cs-ui/custom-select#general',
			types: 'string',
			default: `'0.25rem'`,
			description: 'Set a border radius style.'
		}, {
			name: 'cleareable',
			link: '/cs-ui/custom-select#selection',
			types: 'string',
			default: 'false',
			description: 'Show or hide the clear button.'
		}, {
			name: 'disabled',
			link: '/cs-ui/custom-select#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Disable the custom select.'
		}, {
			name: 'dropdownActions',
			link: '/cs-ui/custom-select#dropdown-actions',
			types: 'Array<CSButtonProps>',
			description: 'Add custom action items to the dropdown.'
		}, {
			name: 'error',
			link: '/cs-ui/custom-select#error',
			types: 'boolean',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			link: '/cs-ui/custom-select#error',
			customTypes: {
				name: 'CSFieldErrorMsgType',
				types: ['string', 'Array<string>']
			},
			description: 'Set the error message or messages for the custom select.'
		}, {
			name: 'errorTooltip',
			link: '/cs-ui/custom-select#error',
			types: 'boolean',
			default: 'false',
			description: 'Show an error tooltip for the custom select.'
		}, {
			name: 'gridCustomPopup',
			link: '/cs-ui/custom-select#general',
			types: 'boolean',
			default: 'false',
			description: 'Provides React Portal support for AG Grid custom popups.'
		}, {
			name: 'helpText',
			link: '/cs-ui/custom-select#label-options',
			types: 'string',
			description: 'Set the text to be displayed for the tooltip.'
		}, {
			name: 'hidden',
			link: '/cs-ui/custom-select#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Control the hidden attribute.'
		}, {
			name: 'icons',
			link: '/cs-ui/custom-select#custom-data',
			customTypes: {
				name: 'CSCustomSelectIconProps',
				types: 'Array<CSCustomSelectIconProps>'
			},
			description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
		}, {
			name: 'labelHidden',
			link: '/cs-ui/custom-select#label-options',
			types: 'boolean',
			default: 'false',
			description: 'Hide the custom select label.'
		}, {
			name: 'labelTitle',
			link: '/cs-ui/custom-select#label-options',
			types: 'boolean',
			description: 'Control whether to set the title attribute on the field label.'
		}, {
			name: 'multiselect',
			link: '/cs-ui/custom-select#multiselect',
			types: 'boolean',
			default: 'false',
			description: 'Add support for selecting multiple items.'
		}, {
			name: 'onBlur',
			link: '/cs-ui/custom-select#event-handling',
			types: '(event) => void',
			description: 'Handler method for the blur event.'
		}, {
			name: 'onClear',
			link: '/cs-ui/custom-select#event-handling',
			types: '() => void',
			description: 'Handler method for clearing the selection.'
		}, {
			name: 'onClick',
			link: '/cs-ui/custom-select#event-handling',
			types: '(event) => void',
			description: 'Handler method for the click event.'
		}, {
			name: 'onDeselect',
			link: '/cs-ui/custom-select#multiselect',
			types: '(option) => void',
			description: 'Handler method for deselecting an option. Should only be used with multiselect.'
		}, {
			name: 'onDropdownClose',
			link: '/cs-ui/custom-select#event-handling',
			types: '() => void',
			description: 'Handler method when custom select dropdown closes.'
		}, {
			name: 'onFocus',
			link: '/cs-ui/custom-select#event-handling',
			types: '(event) => void',
			description: 'Handler method for the focus event.'
		}, {
			name: 'onKeyDown',
			link: '/cs-ui/custom-select#event-handling',
			types: '(event) => void',
			description: 'Handler method for the keydown event.'
		}, {
			name: 'onSearch',
			link: '/cs-ui/custom-select#search',
			types: '(event) => void',
			description: 'Handler method when search term changes.'
		}, {
			name: 'onSelect',
			link: '/cs-ui/custom-select#selection',
			types: '(option) => void',
			description: 'Handler method for when the selection is changed.'
		}, {
			name: 'placeholder',
			link: '/cs-ui/custom-select#input-options',
			types: 'string',
			description: 'Set a custom select input placeholder.'
		}, {
			name: 'position',
			link: '/cs-ui/custom-select#dropdown-position',
			customTypes: [{
				name: 'CSCustomSelectDropdownPosition',
				types: [`'bottom'`, `'top'`]
			}],
			default: `'bottom'`,
			description: 'Determine the vertical position of the custom select dropdown content.'
		}, {
			name: 'readOnly',
			link: '/cs-ui/custom-select#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'required',
			link: '/cs-ui/custom-select#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Make the custom select required.'
		}, {
			name: 'searchBy',
			link: '/cs-ui/custom-select#search',
			default: `'label'`,
			customTypes: [{
				name: 'CSCustomSelectSearchByType',
				types: [`'label'`, `'all'`]
			}]
		}, {
			name: 'selectedKeys',
			link: '/cs-ui/custom-select#selection',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'A single key or an array of keys corresponding to selected options.'
		}, {
			name: 'showCompactMultiselect',
			link: '/cs-ui/custom-select#multiselect',
			types: 'boolean',
			default: 'false',
			description: 'Hides multiselect items from input wrapper.'
		}, {
			name: 'title',
			link: '/cs-ui/custom-select#input-options',
			types: 'string',
			description: 'Set the custom select title.'
		}, {
			name: 'tooltipPosition',
			link: '/cs-ui/custom-select#label-options',
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
			description: 'Set the tooltip position for the custom select.'
		}, {
			name: 'id',
			link: '/cs-ui/custom-select#ids-&-classes',
			types: 'string',
			description: 'Set the ID for the custom select.'
		}, {
			name: 'className',
			link: '/cs-ui/custom-select#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the custom select.'
		}, {
			name: '[key: string]',
			link: '/cs-ui/custom-select',
			types: 'any',
			description: 'Spreads the rest of the props to the custom select input.'
		}
	]
};
