import React from 'react';
import classNames from 'classnames';

export interface CSTableHeaderProps {
	[key: string]: any;
	className?: string;
	id?: string;
}

class CSTableHeader extends React.Component<CSTableHeaderProps> {
	render() {
		const { children, className, id, ...rest } = this.props;

		const tableHeaderClasses = classNames(
			'cs-table-header', {
			[`${className}`]: className
		});

		const childrenWithProp = React.Children.map(children, child => {
			if (child) {
				return (
					React.cloneElement(
						child as any,
						{ role: 'columnheader' }
					)
				);
			}
		});

		return (
			<div className={tableHeaderClasses} role="row" id={id} {...rest}>
				{childrenWithProp}
			</div>
		);
	}
}

export default CSTableHeader;
