import { CSButtonSize, CSTooltipPosition } from '@cloudsense/cs-ui-components';

/* This should be deleted once all usages are removed after all previews files are updated to new variants */
export const actions = [
	{
		onClick: () => alert('Delete option called'),
		iconName: 'delete',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Delete'
	}, {
		onClick: () => alert('Add option called'),
		iconName: 'add',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Add',
		tooltip: {
			content: 'actions tooltip',
			delay: 300,
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
];

/* This should be used in new preview files */
/* It should be renamed after other array is deleted */
export const actionsWithLog = [
	{
		onClick: console.log,
		iconName: 'delete',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Delete'
	}, {
		onClick: console.log,
		iconName: 'add',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Add',
		tooltip: {
			content: 'actions tooltip',
			delay: 300,
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
];

export const actionsCode = `[
	{
		onClick: () => alert('Delete option called'),
		iconName: 'delete',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Delete'
	}, {
		onClick: () => alert('Add option called'),
		iconName: 'add',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Add',
		tooltip: {
			content: 'actions tooltip',
			delay: 300,
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
]`;

export const actionsWithLogCode = `[
	{
		onClick: console.log,
		iconName: 'delete',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Delete'
	}, {
		onClick: console.log,
		iconName: 'add',
		labelHidden: true,
		size: 'small' as CSButtonSize,
		label: 'Add',
		tooltip: {
			content: 'actions tooltip',
			delay: 300,
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
]`;
