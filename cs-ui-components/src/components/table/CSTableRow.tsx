import React from 'react';
import classNames from 'classnames';

export interface CSTableRowProps {
	[key: string]: any;
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
		const { children, className, id, ...rest } = this.props;
		const tableRowClasses = classNames(
			'cs-table-row', {
			[`${className}`]: className
		});

		return (
			<div
				className={tableRowClasses}
				role="row"
				onClick={this.handleClick}
				id={id}
				{...rest}
			>
				{children}
			</div>
		);
	}
}

export default CSTableRow;
