import { CSIconProps } from '@cloudsense/cs-ui-components/dist/src/components/CSIcon';
import { CSTooltipProps } from '@cloudsense/cs-ui-components/dist/src/components/CSTooltip';

type IconsProps = Partial<Pick<CSIconProps,
	'color' |
	'origin' |
	'size'
>>;

type TooltipProps = Partial<Pick<CSTooltipProps,
	'delay' |
	'height' |
	'maxHeight' |
	'maxWidth' |
	'position' |
	'stickyOnClick' |
	'variant' |
	'width'
>> & Pick<CSTooltipProps, 'content'>;

export type FormFieldsIcons = IconsProps &
{ tooltip?: TooltipProps } &
{ iconName: string };
