import React from 'react';
import classNames from 'classnames';
import CSIcon, { CSIconOrigin } from '../CSIcon';
import CSTooltip, { CSTooltipIconSize } from '../CSTooltip';
import { CSCustomDataIconProps, CSCustomDataActionProps, CSCustomDataMenuVariant } from '../../util/CustomData';
import CSCustomDataActions from './CSCustomDataActions';
import CSCustomDataIcons from './CSCustomDataIcons';

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
				{icons?.length > 0 ? (<CSCustomDataIcons icons={icons} />)	: null}
				{/* Actions */}
				{actionsList?.length > 0 ? (<CSCustomDataActions actions={actions} />) : null}
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
