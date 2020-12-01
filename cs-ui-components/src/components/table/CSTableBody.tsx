import React from 'react';
import classNames from 'classnames';

export interface CSTableBodyProps {
	className?: string;
	id?: string;
}

class CSTableBody extends React.Component<CSTableBodyProps> {
	render() {

		const tableBodyClasses = classNames(
			'cs-table-body',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div className={tableBodyClasses} role="rowgroup" id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}

export default CSTableBody;
