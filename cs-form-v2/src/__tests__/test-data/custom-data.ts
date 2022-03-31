import { CSButtonSize, CSTooltipPosition } from '@cloudsense/cs-ui-components';

export const actions = [
	{
		onClick: () => jest.fn(),
		iconName: 'delete',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Delete',
	}, {
		onClick: () => jest.fn(),
		iconName: 'add',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Add',
		tooltip: {
			content: 'actions tooltip',
			delay: 300,
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true,
		},
	},
];

export const icons = [{ name: 'activity' }];
