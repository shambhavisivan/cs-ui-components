import { CSIconOrigin, CSTooltipPosition } from '@cloudsense/cs-ui-components';

export const icons =  [
	{ name: 'cart' },
	{
		name: 'tag',
		origin: 'cs' as CSIconOrigin,
		tooltip: {
			content: 'icons tooltip',
			delay: 300,
			maxWidth: '20rem',
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
];

export const iconsCode = `[
	{ name: 'cart' },
	{
		name: 'tag',
		origin: 'cs' as CSIconOrigin,
		tooltip: {
			content: 'icons tooltip',
			delay: 300,
			maxWidth: '20rem',
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
]`;
