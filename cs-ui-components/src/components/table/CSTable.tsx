import React from 'react';
import classNames from 'classnames';

export interface CSTableProps {
	className?: string;
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
			<div className={tableClasses} role="grid">
				{this.props.children}
			</div>
		);
	}
}

export default CSTable;
