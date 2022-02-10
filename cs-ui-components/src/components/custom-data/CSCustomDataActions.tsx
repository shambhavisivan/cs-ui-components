import React from 'react';
import CSTooltip, { CSTooltipIconSize } from '../CSTooltip';
import { CSCustomDataActionProps } from './CSCustomData';
import CSButton from '../CSButton';
import { CSIconOrigin } from '../CSIcon';

export interface CSCustomDataActionsProps {
	[key: string]: any;
	actions: Array<CSCustomDataActionProps>;
}

function CSCustomDataActions(props: CSCustomDataActionsProps) {
	const { actions } = props;

	/* Render actions button */
	function getActionsBtn(action: CSCustomDataActionProps) {
		return (
			<CSButton
				btnStyle={action.btnStyle}
				btnType={action.btnType}
				label={action.name}
				labelHidden={action.labelHidden}
				onClick={(event: any) => {
					event.stopPropagation();
					action.action();
				}}
				iconColor={action.icon.iconColor}
				iconName={action.icon.iconName}
				iconOrigin={action.icon.iconOrigin as CSIconOrigin}
				iconSize={action.icon.iconSize}
				size={action.size}
			/>
		);
	}

	return (
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
	);
}

export default CSCustomDataActions;
