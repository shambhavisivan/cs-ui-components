import React from 'react';
import classNames from 'classnames';

export interface CSTableRowProps {
	className?: string;
	id?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

class CSTableRow extends React.Component<CSTableRowProps> {

	handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
		const { onClick } = this.props;
		if (onClick) {
		  onClick(e);
		}
	}

	render() {

		const tableRowClasses = classNames(
			'cs-table-row',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div
				className={tableRowClasses}
				role="row"
				onClick={this.handleClick}
				id={this.props.id}
			>
				{this.props.children}
			</div>
		);
	}
}

export default CSTableRow;
