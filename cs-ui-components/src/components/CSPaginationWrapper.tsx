import React from 'react';
import jsxToString from 'jsx-to-string';
import CSPagination from './CSPagination';
import CSSelect from './CSSelect';
import classNames from 'classnames';

export interface CSPaginationWrapperProps {
	props?: any;
	className?:  string;
}

class CSPaginationWrapper extends React.Component<CSPaginationWrapperProps> {

	static getDoc() {

		const json = {
			name: 'Pagination',
			usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			examples: [
				{
					propName: '',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
							<CSPaginationWrapper>
								<CSSelect label="hidden label" labelHidden>
									<option>10</option>
									<option>20</option>
									<option>50</option>
								</CSSelect>
							</CSPaginationWrapper>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'n/a',
					description: 'n/a',
					options: ['test']
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}
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
