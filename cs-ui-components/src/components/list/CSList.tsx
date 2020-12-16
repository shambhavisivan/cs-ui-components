import React from 'react';
import classNames from 'classnames';

export interface CSListProps {
	[key: string]: any;
	className?: string;
	id?: string;

}

class CSList extends React.Component<CSListProps> {
	constructor(props: any) {
		super(props);
	}

	render() {
		const {
			children,
			className,
			id,
			...rest
		} = this.props;

		const listClasses = classNames(
			'cs-list-wrapper',
			{
				[`${className}`]: className
			}
		);

		return (
			<ul className={listClasses}>
				{children}
			</ul>
		);
	}
}

export default CSList;
