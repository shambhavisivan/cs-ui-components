import { CSButtonSize, CSTooltipPosition } from '@cloudsense/cs-ui-components';

export const actions =  [
	{
		action: () => alert('Delete option called'),
		icon: { iconName: 'delete' },
		labelHidden: true,
		size: 'small' as CSButtonSize,
		name: 'Delete'
	}, {
		action: () => alert('Add option called'),
		icon: { iconName: 'add' },
		labelHidden: true,
		size: 'small' as CSButtonSize,
		name: 'Add',
		getTooltip: {
			content: ['actions tooltip'],
			delay: 300,
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
];

export const actionsCode =
	`[
		{
			action: () => alert('Delete option called'),
			icon: { iconName: 'delete' },
			labelHidden: true,
			size: 'small' as CSButtonSize,
			name: 'Delete'
		}, {
			action: () => alert('Add option called'),
			icon: { iconName: 'add' },
			labelHidden: true,
			size: 'small' as CSButtonSize,
			name: 'Add',
			getTooltip: {
				content: ['actions tooltip'],
				delay: 300,
				padding: '0.5rem',
				position: 'bottom-left' as CSTooltipPosition,
				stickyOnClick: true
			}
		}
	]`;
