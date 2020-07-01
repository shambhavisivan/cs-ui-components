import React from 'react';
import classNames from 'classnames';

export interface CSButtonGroupProps {
	combined: boolean;
	className?: string;
	id?: string;
}

class CSButtonGroup extends React.Component<CSButtonGroupProps> {
	public static defaultProps = {
		combined: true
	};

	render() {
		const buttonGroupClasses = classNames(
			[`cs-button-group cs-button-group-${this.props.combined}`],
			{[`${this.props.className}`]: this.props.className}
		);
		return (
			<div className={buttonGroupClasses} id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}

export default CSButtonGroup;
