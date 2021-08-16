import React from 'react';
import { CSIcon, CSTooltip } from '@cloudsense/cs-ui-components';
import { FormFieldsIcons } from './types/FormFieldsIcons';

export interface FormFieldIconProps {
	icons: Array<FormFieldsIcons>;
}

export const FormFieldIcon = ({ icons }: FormFieldIconProps) => {
	return (
		<span className="cs-form-icons-wrapper">
			{icons.map((icon, index) => {
				const { iconName, tooltip, ...rest } = icon;
				if (icon.tooltip) {
					return (
						<CSTooltip content={tooltip && tooltip.content} iconName={iconName} {...tooltip} key={index} />
					);
				} else {
					return (
						<CSIcon name={iconName} {...rest} key={index} />
					);
				}
			})}
		</span>
	);
};
