import React from 'react';
import classNames from 'classnames';

export interface CSDividerProps {
	variant: string;
	size?: string;
	className?: string;
}

class CSDivider extends React.Component<CSDividerProps> {

	render() {

		const dividerClasses = classNames(
			[`cs-divider-${this.props.variant}`],
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div
				className={dividerClasses}
				style={{'--cs-divider-size': this.props.size}}
			/>
		);
	}
}

export default CSDivider;
