import { CSIconOrigin, CSTooltipPosition } from '@cloudsense/cs-ui-components';

export const icons =  [
	{ iconName: 'cart'},
	{
		iconName: 'tag',
		iconOrigin: 'cs' as CSIconOrigin,
		getTooltip: {
			content: ['icons tooltip'],
			delay: 300,
			maxWidth: '20rem',
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
];

export const iconsCode =
	`[
		{ iconName: 'cart'},
		{
			iconName: 'tag',
			iconOrigin: 'cs' as CSIconOrigin,
			getTooltip: {
				content: ['icons tooltip'],
				delay: 300,
				maxWidth: '20rem',
				padding: '0.5rem',
				position: 'bottom-left' as CSTooltipPosition,
				stickyOnClick: true
			}
		}
	]`;
