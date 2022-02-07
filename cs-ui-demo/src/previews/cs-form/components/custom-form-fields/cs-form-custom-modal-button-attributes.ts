export default {
	name: 'CSFormCustomModalButton',
	type: 'attribute',
	data: [
		{
			name: 'label',
			required: true,
			types: 'string',
			description: 'Set which text should appear as the button label.'
		}, {
			name: 'borderRadius',
			types: 'string',
			default: `'0.25rem'`,
			description: 'Sets a custom border radius for the button.'
		}, {
			name: 'btnStyle',
			customTypes: {
				name: 'CSButtonStyle',
				types: [
					`'initial'`,
					`'brand'`,
					`'outline'`
				]
			},
			default: `'initial'`,
			description: 'Set the button style.'
		}, {
			name: 'btnType',
			customTypes: {
				name: 'CSButtonType',
				types: [
					`'default'`,
					`'error'`,
					`'success'`,
					`'transparent'`
				]
			},
			default: `'default'`,
			description: 'Set the button type.'
		}, {
			name: 'color',
			types: 'string',
			description: 'Set a custom color for the button. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
		}, {
			name: 'disabled',
			types: 'boolean',
			default: 'false',
			description: 'Disable the button.'
		}, {
			name: 'iconColor',
			types: 'string',
			description: 'Set a custom color for the icon inside of the button. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
		}, {
			name: 'iconName',
			types: 'string',
			description: 'Name of the icon from the icons library.'
		}, {
			name: 'iconOrigin',
			customTypes: {
				name: 'CSIconOrigin',
				types: [`'slds'`, `'cs'`]
			},
			default: `'slds'`,
			description: 'Select whether the Salesforce or CloudSense icon set should be used.'
		}, {
			name: 'iconPosition',
			customTypes: {
				name: 'CSButtonIconPosition',
				types: [`'left'`, `'right'`]
			},
			default: `'left'`,
			description: 'Set where the icon should be positioned inside the button.'
		}, {
			name: 'iconRotate',
			types: ['number', 'string'],
			default: '0',
			description: 'Please always use a number value. String values are deprecated and will be removed. Set how many degrees the icon should be rotated by. (eg. 90, 180, -90 etc.)'
		}, {
			name: 'iconSize',
			types: 'string',
			description: 'Set the size of the icon. (eg. 12px, 1rem, etc.)'
		}, {
			name: 'labelHidden',
			types: 'boolean',
			default: 'false',
			description: 'Logic to hide the label.'
		}, {
			name: 'link',
			types: 'string',
			description: 'Set a valid URL path to where the button should link.'
		}, {
			name: 'loading',
			types: 'boolean',
			default: 'false',
			description: 'Change icon to spinner and show spin animation. To be used while a process is in progress.'
		}, {
			name: 'onClick',
			types: '(value) => any',
			description: 'Handler method for the click event.'
		}, {
			name: 'onKeyDown',
			types: '(event) => any',
			description: 'Handler method for the keydown event.'
		}, {
			name: 'onMouseDown',
			types: '(event) => any',
			description: 'Handler method for the mousedown event.'
		}, {
			name: 'onMouseEnter',
			types: '(event) => any',
			description: 'Handler method for the mouseenter event.'
		}, {
			name: 'onMouseLeave',
			types: '(event) => any',
			description: 'Handler method for the mouseleave event.'
		}, {
			name: 'openInNewTab',
			types: 'boolean',
			default: 'false',
			description: 'Set whether the link should open in a new tab.'
		}, {
			name: 'routerLink',
			types: 'Element',
			description: 'Define a React Router NavLink or Link component to be rendered instead of the button.'
		}, {
			name: 'size',
			customTypes: {
				name: 'CSButtonSize',
				types: [
					`'normal'`,
					`'small'`,
					`'xsmall'`,
					`'large'`
				]
			},
			default: `'normal'`,
			description: 'Set the button size.'
		}, {
			name: 'title',
			types: 'string',
			description: 'Set the value of the title attribute.'
		}, {
			name: 'value',
			types: 'any',
			description: 'Pass a value to the button.'
		}, {
			name: 'width',
			customTypes: {
				name: 'CSButtonWidth',
				types: [`'auto'`, `'max'`]
			},
			default: `'auto'`,
			description: 'Set the button width.'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set the ID for the button.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the button.'
		}, {
			name: 'children',
			types: 'any',
			description: 'This component supports custom content passed as children.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the button.'
		}, {
			name: 'ariaExpanded',
			required: 'CSButtonDropdown',
			types: 'boolean',
			description: 'Accessible attribute to indicate whether an object controlled by the button is expanded or not.'
		}, {
			name: 'ariaHaspopup',
			required: 'CSButtonDropdown',
			types: 'boolean',
			description: 'Accessible attribute to indicate whether an object controlled by the button is a popup.'
		}, {
			name: 'ariaLabel',
			required: 'CSCustomSelect',
			types: 'string',
			description: 'Override the aria-label attribute which is by default set by the label prop.'
		}, {
			name: 'role',
			required: 'CSButtonDropdown',
			customTypes: {
				name: 'CSButtonRole',
				types: `'menuitem'`
			},
			description: 'Override the implicit native button role when the button is used in a certain context.'
		}
	]
};
