import React from 'react';
import classNames from 'classnames';

export interface CSDividerProps {
	className?: string;
	label?: string;
	size?: string;
	variant: string;
}

class CSDivider extends React.Component<CSDividerProps> {

	render() {

		const dividerClasses = classNames(
			'cs-divider',
			[`cs-divider-${this.props.variant}`],
			{
				'cs-divider-with-label': this.props.label,
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div
				className={dividerClasses}
				style={{'--cs-divider-size': this.props.size}}
			>
				{(this.props.label && this.props.variant === 'horizontal') &&
					<span className="cs-divider-label">{this.props.label}</span>
				}
			</div>
		);
	}
}

export default CSDivider;
