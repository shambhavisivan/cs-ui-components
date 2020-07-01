import React from 'react';
import classNames from 'classnames';

export interface CSTableProps {
	className?: string;
	id?: string;
}

class CSTable extends React.Component<CSTableProps> {

	render() {

		const tableClasses = classNames(
			'cs-table',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div className={tableClasses} role="grid" id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}

export default CSTable;
