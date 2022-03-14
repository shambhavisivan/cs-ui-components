export default {
	name: 'CSCustomData',
	type: 'props',
	data: [
		{
			name: 'actions',
			link: '/cs-ui/custom-data#actions',
			customTypes: {
				name: 'Array<CSCustomDataAction>',
				types: ['CSButtonProps', 'tooltip?: CSTooltipProps']
			},
			description: 'An array of objects which accept valid CSButton props and an optional tooltip property to wrap the button inside it.'
		}, {
			name: 'icons',
			link: '/cs-ui/custom-data#icons',
			customTypes: {
				name: 'Array<CSCustomDataIcon>',
				types: ['CSIconProps', 'tooltip?: CSTooltipProps']
			},
			description: 'An array of objects which accept valid CSIcon props and an optional tooltip property to wrap the icon inside it.'
		}, {
			name: 'menuIcon',
			link: '/cs-ui/custom-data#menu-icons',
			customTypes: {
				name: 'CSCustomDataMenuProps',
				types: [`'dropdown'`, `'datepicker'`]
			},
			description: 'Menu icon which accepts a type of either dropdown or datepicker.'
		}, {
			name: 'status',
			link: '/cs-ui/custom-data#status',
			customTypes: {
				name: 'CSCustomDataIcon',
				types: ['CSIconProps', 'tooltip?: CSTooltipProps']
			},
			description: 'A single object which accepts valid CSIcon props and an optional tooltip property to wrap the icon inside it.'
		}, {
			name: 'title',
			link: '/cs-ui/custom-data#title',
			types: 'string',
			description: 'The title value.'
		}, {
			name: 'value',
			link: '/cs-ui/custom-data#value',
			types: 'string',
			description: 'The input text value.'
		}, {
			name: 'id',
			link: '/cs-ui/custom-data#ids-&-classes',
			types: 'string',
			description: 'Set the ID for the lookup.'
		}, {
			name: 'className',
			link: '/cs-ui/custom-data#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the wrapper div.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the text display element.'
		}
	]
};
