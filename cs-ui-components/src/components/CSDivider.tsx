import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export type CSDividerVariant = 'vertical' | 'horizontal';

export interface CSDividerProps {
	className?: string;
	id?: string;
	label?: string;
	size?: string;
	variant: CSDividerVariant;
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

		const style: CSSProperties = {
			'--cs-divider-size': this.props.size
		};

		return (
			<div
				className={dividerClasses}
				style={style}
				role="separator"
				aria-orientation={this.props.variant}
			>
				{(this.props.label && this.props.variant === 'horizontal') &&
					<span className="cs-divider-label">{this.props.label}</span>
				}
			</div>
		);
	}
}

export default CSDivider;
