import React from 'react';
import CSTooltip, { CSTooltipIconSize } from '../CSTooltip';
import { CSCustomDataIconProps } from '../../util/CustomData';
import CSIcon, { CSIconOrigin } from '../CSIcon';

interface CSCustomDataIconsProps {
	[key: string]: any;
	icons: Array<CSCustomDataIconProps>;
}

function CSCustomDataIcons(props: CSCustomDataIconsProps) {
	const { icons } = props;

	return (
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
	);
}

export default CSCustomDataIcons;
