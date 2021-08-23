import { CSIconOrigin } from '../components/CSIcon';
import { CSTooltipPosition, CSTooltipVariant } from '../components/CSTooltip';
import { CSButtonType, CSButtonSize, CSButtonStyle } from '../components/CSButton';

/* Icon base type */
export type CSCustomDataIcon = {
	iconColor?: string;
	iconName: string;
	iconOrigin?: CSIconOrigin;
	iconSize?: string;
}

/* Get Tooltip base type */
export type CSCustomDataTooltip = {
	content: string | Array<string> | JSX.Element;
	delay?: number;
	height?: string;
	maxHeight?: string;
	maxWidth?: string;
	padding?: string;
	position?: CSTooltipPosition;
	stickyOnClick?: boolean;
	variant?: CSTooltipVariant;
	width?: string;
}

/* Icon type */
export type CSCustomDataIconProps = {
	getTooltip?: CSCustomDataTooltip;
} & CSCustomDataIcon

/* Action type */
export type CSCustomDataActionProps = {
	action: () => void;
	btnType?: CSButtonType;
	size?: CSButtonSize;
	btnStyle?: CSButtonStyle;
	icon: CSCustomDataIcon;
	labelHidden?: boolean;
	name: string,
	getTooltip?: CSCustomDataTooltip;
}

export type CSCustomDataMenuVariant = 'dropdown' | 'datepicker';
