import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export type CSButtonGroupMargin = 'left' | 'right' | 'both';

export interface CSButtonGroupProps {
	ariaDescription?: string;
	combined: boolean;
	className?: string;
	id?: string;
	marginPosition?: CSButtonGroupMargin;
}

class CSButtonGroup extends React.Component<CSButtonGroupProps> {
	public static defaultProps = {
		combined: true
	};

	render() {
		const buttonGroupClasses = classNames(
			[`cs-button-group cs-button-group-${this.props.combined}`],
			{[`${this.props.className}`]: this.props.className},
			[`cs-button-group-margin-${this.props.marginPosition}`]
		);

		const uniqueAutoId = uuidv4();

		return (
			<div
				className={buttonGroupClasses}
				id={this.props.id}
				role="group"
				aria-labelledby={this.props.id ? this.props.id : uniqueAutoId}
			>
				{this.props.ariaDescription &&
					<span className="cs-aria-description" id={this.props.id ? this.props.id : uniqueAutoId}>{this.props.ariaDescription}</span>
				}
				{this.props.children}
			</div>
		);
	}
}

export default CSButtonGroup;
