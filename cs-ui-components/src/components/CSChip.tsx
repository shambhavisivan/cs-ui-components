import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export type CSChipVariant = 'brand' | 'success' | 'neutral' | 'error' | 'warning' | 'transparent' | 'dark';
export type CSChipVariantStyle = 'border' | 'fill';

export interface CSChipProps {
	[key: string]: any;
	className?: string;
	color?: string;
	id?: string;
	text: string;
	variant?: CSChipVariant;
	variantStyle?: CSChipVariantStyle;
}

const CSChip = ({
	className,
	color,
	id,
	text,
	variant = 'brand',
	variantStyle = 'fill',
	...rest
}: CSChipProps) => {
	const chipClasses = classNames(
		'cs-chip',
		{
			[`cs-chip-${variant}`]: variantStyle === 'fill',
			[`cs-chip-${variant}-border`]: variantStyle === 'border',
			'cs-chip-custom-color': color && variantStyle === 'fill',
			'cs-chip-custom-color-border': color && variantStyle === 'border',
			[`${className}`]: className,
		},
	);
	const chipStyle: CSSProperties = {
		'--cs-chip-custom-c': color,
	};
	return (
		<div
			className={chipClasses}
			id={id}
			style={chipStyle}
			{...rest}
		>
			{text}
		</div>
	);
};

export default CSChip;
