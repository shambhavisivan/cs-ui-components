import React from 'react';
import jsxToString from 'jsx-to-string';
import CSTableHeader from './CSTableHeader';
import CSTableBody from './CSTableBody';
import CSTableRow from './CSTableRow';
import CSTableCell from './CSTableCell';
import CSButton from '../CSButton';
import classNames from 'classnames';

export interface CSTableProps {
	className?: string;
}

class CSTable extends React.Component<CSTableProps> {

	static getDoc() {

		const json = {
			name: 'Table',
			usage: 'Tables are an enhanced version of an HTML table and are used to display tabular data.',
			examples: [
				{
					propName: '',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSTable className="custom-class">
									<CSTableHeader>
										<CSTableCell
											title="Header Item 1"
											grow={2}
										/>
										<CSTableCell
											title="Header Item 2"
											grow={1}
										/>
										<CSTableCell
											title="Header Item 3"
											grow={1}
										/>
										<CSTableCell
											title="Button Column"
											maxWidth="100px"
										/>
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell
												title="Body Item 1"
												grow={2}
											/>
											<CSTableCell
												title="Body Item 2"
												grow={1}
											/>
											<CSTableCell
												title="Body Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												title="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												title="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												title="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'title',
					description: 'Text content of cell',
					options: []
				},
				{
					propertyName: 'grow',
					description: 'Flex grow value for cell',
					options: []
				},
				{
					propertyName: 'maxWidth',
					description: 'Max width value for cell',
					options: [
						'e.g.',
						'100px',
						'4rem'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
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
