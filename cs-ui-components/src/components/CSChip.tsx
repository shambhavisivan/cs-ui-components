import React from 'react';
import classNames from 'classnames';

export type CSChipVariant = 'brand' | 'success' | 'neutral' | 'error' |'warning' | 'transparent' | 'dark';
export type CSChipVariantStyle = 'border' | 'fill';

export interface CSChipProps {
	[key: string]: any;
	className?: string;
	id?: string;
	text: string;
	variant?: CSChipVariant;
	variantStyle?: CSChipVariantStyle;
}

class CSChip extends React.Component<CSChipProps> {

	public static defaultProps = {
		variant: 'brand',
		variantStyle: 'fill'
	};

	render() {
		const {
			className,
			id,
			text,
			variant,
			variantStyle,
			...rest
		} = this.props;

		const chipClasses = classNames(
			'cs-chip', {
				[`cs-chip-${variant}`]: variantStyle === 'fill',
				[`cs-chip-${variant}-border`]: variantStyle === 'border',
				[`${className}`]: className
			}
		);
		return (
			<div className={chipClasses} id={id} {...rest}>
				{text}
			</div>
		);
	}
}

export default CSChip;
