import React from 'react';
import CSPagination from './CSPagination';
import classNames from 'classnames';

export interface CSPaginationWrapperProps {
	className?:  string;
	id?: string;
	props?: any;
}

class CSPaginationWrapper extends React.Component<CSPaginationWrapperProps> {
	constructor(props: CSPaginationWrapperProps) {
		super(props);

		// an example array of 150 items to be paged
		{/* var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

		this.state = {
			exampleItems: exampleItems,
			pageOfItems: []
		};

		// bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
		this.onChangePage = this.onChangePage.bind(this); */}
	}

	// onChangePage(pageOfItems) {
	// 	// update state with new page of items
	// 	this.setState({ pageOfItems: pageOfItems });
	// }

	render() {

		const paginationClasses = classNames(
			'cs-pagination-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className="cs-pagination-wrapper">
				<CSPagination
					// items={this.state.exampleItems}
					// onChangePage={this.onChangePage}
				/>
				{this.props.children}
			</div>

		);
	}
}

export default CSPaginationWrapper;
