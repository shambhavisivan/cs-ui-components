import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export type CSButtonGroupMargin = 'left' | 'right' | 'both';

export interface CSButtonGroupProps {
	[key: string]: any;
	ariaDescription?: string;
	combined?: boolean;
	className?: string;
	id?: string;
	marginPosition?: CSButtonGroupMargin;
}

class CSButtonGroup extends React.Component<CSButtonGroupProps> {
	public static defaultProps = {
		combined: true,
	};

	private readonly uniqueAutoId: string | null;

	constructor(props: CSButtonGroupProps) {
		super(props);

		this.uniqueAutoId = props.ariaDescription ? uuidv4() : null;
	}

	render() {
		const {
			ariaDescription,
			children,
			combined,
			className,
			id,
			marginPosition,
			...rest
		} = this.props;

		const buttonGroupClasses = classNames(
			'cs-btn-group',
			{
				[`cs-btn-group-margin-${marginPosition}`]: marginPosition,
				[`${className}`]: className,
				'cs-btn-group-combined': combined,
			},
		);

		return (
			<div
				className={buttonGroupClasses}
				id={id}
				role="group"
				aria-labelledby={this.uniqueAutoId}
				{...rest}
			>
				{ariaDescription
					&& <span className="cs-aria-description" id={this.uniqueAutoId}>{ariaDescription}</span>}
				{children}
			</div>
		);
	}
}

export default CSButtonGroup;
