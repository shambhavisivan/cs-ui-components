import React from 'react';
import classNames from 'classnames';
import CSButton, { CSButtonProps } from './CSButton';

import CSIcon, { CSIconProps } from './CSIcon';
import CSTooltip, { CSTooltipProps } from './CSTooltip';

export type CSCustomDataTooltip = Omit<CSTooltipProps, 'iconName' | 'iconOrigin' | 'iconColor' | 'iconSize'>;
export type CSCustomDataMenuVariant = 'dropdown' | 'datepicker';

export interface CSCustomDataIcon extends CSIconProps {
	tooltip?: CSCustomDataTooltip;
}

export interface CSCustomDataAction extends CSButtonProps {
	tooltip?: CSCustomDataTooltip;
}

export interface CSCustomDataProps {
	[key: string]: any;
	className?: string;
	icons?: Array<CSCustomDataIcon>;
	menuIcon?: CSCustomDataMenuVariant;
	actions?: Array<CSCustomDataAction>;
	status?: CSCustomDataIcon;
	title?: string;
	value?: string;
}

const CSCustomData = ({
	className,
	value,
	icons,
	actions,
	status,
	title,
	menuIcon,
	forwardRef,
}: CSCustomDataProps) => {
	const customDataWrapperClasses = classNames(
		'cs-custom-data-wrapper',
		{ [`${className}`]: className },
	);

	const renderIcon = (icon: CSCustomDataIcon, iconIndex?: number) => {
		const { tooltip, ...iconRest } = icon;
		let returnIcon = <CSIcon {...iconRest} />;

		if (tooltip) {
			const { content, ...tooltipRest } = tooltip;
			returnIcon = <CSTooltip content={content} {...tooltipRest}>{returnIcon}</CSTooltip>;
		}

		return <div key={iconIndex} className="cs-custom-data-item">{returnIcon}</div>;
	};

	const renderAction = (action: CSCustomDataAction, actionIndex?: number) => {
		const { tooltip, ...actionRest } = action;
		let returnAction = <CSButton {...actionRest} />;

		if (tooltip) {
			const { content, ...tooltipRest } = tooltip;
			returnAction = <CSTooltip content={content} {...tooltipRest}>{returnAction}</CSTooltip>;
		}

		return <div key={actionIndex} className="cs-custom-data-item">{returnAction}</div>;
	};

	if (!value && !icons?.length && !actions?.length && !status && !menuIcon) {
		return null;
	}

	return (
		<div ref={forwardRef} className={customDataWrapperClasses}>
			{value && <span className="cs-custom-data-value" title={title}>{value}</span>}
			{icons?.map(renderIcon)}
			{actions?.map(renderAction)}
			{status && renderIcon(status)}
			{menuIcon && (
				<div className="cs-custom-data-item">
					<CSIcon name={menuIcon === 'datepicker' ? 'date_input' : 'down'} />
				</div>
			)}
		</div>
	);
};

const CSCustomDataWithRef = React.forwardRef<HTMLDivElement, CSCustomDataProps>((props: CSCustomDataProps, ref) => <CSCustomData {...props} forwardRef={ref} />);

CSCustomDataWithRef.displayName = 'CSCustomData';

export default CSCustomDataWithRef;
