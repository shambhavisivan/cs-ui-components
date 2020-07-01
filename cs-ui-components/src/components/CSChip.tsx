import React from 'react';
import classNames from 'classnames';

export interface CSChipProps {
	className?: string;
	id?: string;
	text: string;
	variant?: string;
	variantStyle?: string;
}

class CSChip extends React.Component<CSChipProps> {

	public static defaultProps = {
		variant: 'brand',
		variantStyle: 'fill'
	};

	render() {
		const chipClasses = classNames(
			'cs-chip', {
				[`cs-chip-${this.props.variant}`]: this.props.variantStyle === 'fill',
				[`cs-chip-${this.props.variant}-border`]: this.props.variantStyle === 'border',
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className={chipClasses} id={this.props.id}>
				{this.props.text}
			</div>
		);
	}
}

export default CSChip;
