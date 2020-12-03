import React from 'react';
import classNames from 'classnames';

export interface CSTableBodyProps {
	[key: string]: any;
	className?: string;
	id?: string;
}

class CSTableBody extends React.Component<CSTableBodyProps> {
	render() {
		const { children, className, id, ...rest } = this.props;

		const tableBodyClasses = classNames(
			'cs-table-body', {
			[`${className}`]: className
		});

		return (
			<div className={tableBodyClasses} role="rowgroup" id={id} {...rest}>
				{children}
			</div>
		);
	}
}

export default CSTableBody;
