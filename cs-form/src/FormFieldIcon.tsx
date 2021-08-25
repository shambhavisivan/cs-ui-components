import React from 'react';
import { CSIcon, CSTooltip, CSCustomDataIconProps, CSTooltipIconSize, CSIconOrigin } from '@cloudsense/cs-ui-components';

export interface FormFieldIconProps {
	icons: Array<CSCustomDataIconProps>;
}

export const FormFieldIcon = ({ icons }: FormFieldIconProps) => {
	return (
		<span className="cs-form-icons-wrapper">
			{icons.map((icon, index) => {
				const {
					iconName,
					iconSize,
					iconColor,
					iconOrigin,
					getTooltip
				} = icon;
				return (
					<>{getTooltip ?
						<CSTooltip
							iconName={iconName}
							iconSize={iconSize as CSTooltipIconSize}
							iconColor={iconColor}
							iconOrigin={iconOrigin}
							{...getTooltip}
							key={'tooltip' + index}
						/> :
						<CSIcon
							name={iconName}
							color={iconColor}
							origin={iconOrigin as CSIconOrigin}
							size={iconSize}
							key={'icon' + index}
						/>
					}
					</>
				);
			})}
		</span>
	);
};
