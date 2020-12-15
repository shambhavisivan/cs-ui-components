import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export interface CSTableBodyProps {
	[key: string]: any;
	className?: string;
	id?: string;
	maxHeight?: string;
}

class CSTableBody extends React.Component<CSTableBodyProps> {
	render() {
		const { children, className, id, maxHeight, ...rest } = this.props;

		const tableBodyClasses = classNames(
			'cs-table-body', {
			[`${className}`]: className
		});

		const tableBodyStyles: CSSProperties = {
			'--cs-table-body-max-height': maxHeight
		};

		return (
			<div
				className={tableBodyClasses}
				role="rowgroup"
				id={id}
				style={tableBodyStyles}
				{...rest}
			>
				{children}
			</div>
		);
	}
}

export default CSTableBody;
