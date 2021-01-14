import React from 'react';
import classNames from 'classnames';

export interface CSTableHeaderProps {
	[key: string]: any;
	className?: string;
	headerSticky?: boolean;
	id?: string;
}

class CSTableHeader extends React.Component<CSTableHeaderProps> {
	render() {
		const { children, className, headerSticky, id, ...rest } = this.props;

		const tableHeaderClasses = classNames(
			'cs-table-header', {
			'cs-table-header-sticky': headerSticky,
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
