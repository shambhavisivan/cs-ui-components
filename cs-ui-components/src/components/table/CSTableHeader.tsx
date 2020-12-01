import React from 'react';
import classNames from 'classnames';

export interface CSTableHeaderProps {
	className?: string;
	id?: string;
}

class CSTableHeader extends React.Component<CSTableHeaderProps> {
	render() {

		const tableHeaderClasses = classNames(
			'cs-table-header',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const childrenWithProp =  React.Children.map(this.props.children, child => {
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
			<div className={tableHeaderClasses} role="row" id={this.props.id}>
				{childrenWithProp}
			</div>
		);
	}
}

export default CSTableHeader;
