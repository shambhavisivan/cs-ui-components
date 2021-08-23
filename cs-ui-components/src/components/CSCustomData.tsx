import React from 'react';
import classNames from 'classnames';
import CSIcon, { CSIconOrigin } from './CSIcon';
import CSTooltip, { CSTooltipIconSize, CSTooltipPosition, CSTooltipVariant } from './CSTooltip';
import CSButton, { CSButtonType, CSButtonSize, CSButtonStyle } from './CSButton';

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

/* Menu type */
export type CSCustomDataMenuVariant = 'dropdown' | 'datepicker';

/* Props */
interface CSCustomDataProps {
	[key: string]: any;
	className?: string;
	icons?: Array<CSCustomDataIconProps>;
	menuIcon?: CSCustomDataMenuVariant;
	actions?: Array<CSCustomDataActionProps>;
	status?: CSCustomDataIconProps;
	title?: string;
	value?: string;
}

function CSCustomData(props: CSCustomDataProps) {
	const { className, value, icons, actions, status, title, menuIcon } = props;

	/* Set actions array once data is available */
	let actionsList;
	if (actions.length > 0) {
		actionsList = actions;
	}

	/* Render actions button */
	function getActionsBtn(action: CSCustomDataActionProps) {
		return (
			<CSButton
				className="cs-custom-data-item"
				btnStyle={action.btnStyle}
				btnType={action.btnType}
				label={action.name}
				labelHidden={action.labelHidden === undefined ? true : action.labelHidden}
				onClick={(event: any) => {
					event.stopPropagation();
					action.action();
				}}
				iconColor={action.icon.iconColor}
				iconName={action.icon.iconName}
				iconOrigin={action.icon.iconOrigin}
				iconSize={action.icon.iconSize}
				size={action.size}
			/>
		);
	}

	/* Render menu icon */
	function getMenuIconName(type: CSCustomDataMenuVariant) {
		if (type === 'datepicker') {
			return 'date_input';
		}
		return 'down';
	}

	/* Status tooltip data */
	let statusTooltipContents;
	if (status?.getTooltip) {
		statusTooltipContents = status.getTooltip;
	}

	/* Class names */
	const customDataWrapperClasses = classNames(
		'cs-custom-data-wrapper',
		{
			[`${className}`]: className,
		},
	);

	const customDataItemStatusClasses = classNames(
		'cs-custom-data-item',
	);
	return (
		<div className={customDataWrapperClasses}>
			{value && (
				<span className="cs-custom-data-value" title={title}>{value}</span>
			)}

			<div className="cs-custom-data-item-wrapper">

				{/* Icons */}
				{icons?.length > 0
					? (
						<div className="cs-custom-data-item cs-custom-data-item-icons">
							{icons.map((icon) => {
								let tooltipContents;
								if (icon.getTooltip) {
									tooltipContents = icon.getTooltip;
								}
								return (
									<React.Fragment key={icon.iconName}>
										{icon.getTooltip ? (
											<CSTooltip
												content={tooltipContents.content}
												delayTooltip={tooltipContents.delay}
												height={tooltipContents.height}
												iconName={icon.iconName}
												iconColor={icon.iconColor}
												iconOrigin={icon.iconOrigin}
												iconSize={icon.iconSize as CSTooltipIconSize}
												maxHeight={tooltipContents.maxHeight}
												maxWidth={tooltipContents.maxWidth}
												padding={tooltipContents.padding}
												position={tooltipContents.position}
												stickyOnClick={tooltipContents.stickyOnClick}
												variant={tooltipContents.variant}
												width={tooltipContents.width as CSTooltipIconSize}
											/>
										) :	(
											<CSIcon
												className="cs-custom-data-item"
												name={icon.iconName}
												color={icon.iconColor}
												origin={icon.iconOrigin as CSIconOrigin}
												size={icon.iconSize}
											/>
										)}
									</React.Fragment>
								);
							})}
						</div>
					)
					: null}

				{/* Actions */}
				{actionsList?.length > 0
					? (
						<div className="cs-custom-data-item cs-custom-data-item-actions">
							{actions.map((action: CSCustomDataActionProps) => {
								let tooltipContents;
								if (action.getTooltip) {
									tooltipContents = action.getTooltip;
								}
								return (
									<React.Fragment key={action.name}>
										{tooltipContents ? (
											<CSTooltip
												content={tooltipContents.content}
												delayTooltip={tooltipContents.delay}
												height={tooltipContents.height}
												maxHeight={tooltipContents.maxHeight}
												maxWidth={tooltipContents.maxWidth}
												padding={tooltipContents.padding}
												position={tooltipContents.position}
												stickyOnClick={tooltipContents.stickyOnClick}
												variant={tooltipContents.variant}
												width={tooltipContents.width as CSTooltipIconSize}
											>
												{getActionsBtn(action)}
											</CSTooltip>
										) : getActionsBtn(action)}
									</React.Fragment>
								);
							})}
						</div>
					)
					: null}

				{/* Status */}
				{(status && Object.keys(status).length > 0) && (
					<div className={customDataItemStatusClasses}>
						{statusTooltipContents ? (
							<CSTooltip
								content={statusTooltipContents.content}
								delayTooltip={statusTooltipContents.delay}
								height={statusTooltipContents.height}
								iconName={status.iconName}
								iconColor={status.iconColor}
								iconOrigin={status.iconOrigin}
								iconSize={status.iconSize as CSTooltipIconSize}
								maxHeight={statusTooltipContents.maxHeight}
								maxWidth={statusTooltipContents.maxWidth}
								padding={statusTooltipContents.padding}
								position={statusTooltipContents.position}
								stickyOnClick={statusTooltipContents.stickyOnClick}
								variant={statusTooltipContents.variant}
								width={statusTooltipContents.width as CSTooltipIconSize}
							/>
						) : (
							<CSIcon
								name={status.iconName}
								color={status.iconColor}
								origin={status.iconOrigin as CSIconOrigin}
								size={status.iconSize}
							/>
						)}
					</div>
				)}

				{/* Menu Icon */}
				{menuIcon && (
					<CSIcon
						className="cs-custom-data-item"
						name={getMenuIconName(menuIcon)}
					/>
				)}
			</div>
		</div>
	);
}

CSCustomData.defaultProps = {
	className: '',
	icons: [],
	actions: [],
	status: {},
	title: '',
	menuIcon: '',
	value: '',
};

export default CSCustomData;
