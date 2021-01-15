import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSTable, CSTableHeader, CSTableBody, CSTableRow, CSTableCell, CSButton } from '@cloudsense/cs-ui-components';

class CSTablePreview extends React.Component {
	handleClick = () => alert('Table row has been clicked.');

	getCSTableDoc() {
		const json = {
			name: 'Table',
			usage: 'Tables are an enhanced version of an HTML table and are used to display tabular data.',
			accessible: 'partially',
			examples: [
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSTable id="id">
									<CSTableHeader id="id">
										<CSTableCell
											text="Header Item 1"
											grow={2}
											id="id"
										/>
										<CSTableCell
											text="Header Item 2"
											grow={1}
											id="id"
										/>
										<CSTableCell
											text="Header Item 3"
											grow={1}
											id="id"
										/>
										<CSTableCell
											text="Button Column"
											maxWidth="100px"
											id="id"
										/>
									</CSTableHeader>
									<CSTableBody id="id">
										<CSTableRow id="id">
											<CSTableCell
												text="Body Item 1"
												grow={2}
												id="id"
											/>
											<CSTableCell
												text="Body Item 2"
												grow={1}
												id="id"
											/>
											<CSTableCell
												text="Body Item 3"
												grow={1}
												id="id"
											/>
											<CSTableCell
												maxWidth="100px"
												id="id"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow id="id">
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
												id="id"
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
												id="id"
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
												id="id"
											/>
											<CSTableCell
												maxWidth="100px"
												id="id"
											>
												<CSButton
													label="label"
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
				},
				{
					propName: 'onClick',
					customText: '',
					variations: [
						{
							component:
								<CSTable>
									<CSTableHeader>
										<CSTableCell
											text="Header Item 1"
											grow={2}
										/>
										<CSTableCell
											text="Header Item 2"
											grow={1}
										/>
										<CSTableCell
											text="Header Item 3"
											grow={1}
										/>
										<CSTableCell
											text="Button Column"
											maxWidth="100px"
										/>
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow onClick={this.handleClick}>
											<CSTableCell
												text="Body Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Body Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Body Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow onClick={this.handleClick}>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow onClick={this.handleClick}>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
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
				},
				{
					propName: 'selectableRows',
					customText: '',
					variations: [
						{
							component:
								<CSTable selectableRows>
									<CSTableHeader>
										<CSTableCell
											text="Header Item 1"
											grow={2}
										/>
										<CSTableCell
											text="Header Item 2"
											grow={1}
										/>
										<CSTableCell
											text="Header Item 3"
											grow={1}
										/>
										<CSTableCell
											text="Button Column"
											maxWidth="100px"
										/>
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell
												text="Body Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Body Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Body Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
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
				},
				{
					propName: 'maxHeight',
					customText: '',
					variations: [
						{
							variationName: ['10rem'],
							component:
								<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" />
										<CSTableCell text="Header Item 2" />
										<CSTableCell text="Header Item 3" />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody maxHeight="10rem">
										<CSTableRow>
											<CSTableCell text="Body Item 1" />
											<CSTableCell text="Body Item 2" />
											<CSTableCell text="Body Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow >
											<CSTableCell text="Second Row Item 1" />
											<CSTableCell text="Second Row Item 2" />
											<CSTableCell text="Second Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Second Row Item 1" />
											<CSTableCell text="Second Row Item 2" />
											<CSTableCell text="Second Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Second Row Item 1" />
											<CSTableCell text="Second Row Item 2" />
											<CSTableCell text="Second Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
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
				},
				{
					propName: 'headerSticky',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSTable>
									<CSTableHeader headerSticky>
										<CSTableCell
											text="Header Item 1"
											grow={2}
										/>
										<CSTableCell
											text="Header Item 2"
											grow={1}
										/>
										<CSTableCell
											text="Header Item 3"
											grow={1}
										/>
										<CSTableCell
											text="Button Column"
											maxWidth="100px"
										/>
									</CSTableHeader>
									<CSTableBody maxHeight="10rem">
										<CSTableRow>
											<CSTableCell
												text="Body Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Body Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Body Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
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
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSTable className="custom-class">
									<CSTableHeader className="custom-class">
										<CSTableCell
											className="custom-class"
											text="Header Item 1"
											grow={2}
										/>
										<CSTableCell
											text="Header Item 2"
											grow={1}
										/>
										<CSTableCell
											text="Header Item 3"
											grow={1}
										/>
										<CSTableCell
											text="Button Column"
											maxWidth="100px"
										/>
									</CSTableHeader>
									<CSTableBody className="custom-class">
										<CSTableRow className="custom-class">
											<CSTableCell
												text="Body Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Body Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Body Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
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
				},
				{
					propName: 'tableDescription',
					customText: 'Hidden span will be added with description for screen readers',
					variations: [
						{
							variationName: ['tableDescription'],
							quickLink: 'tableDescription',
							component:
								<CSTable tableDescription="almost last and almost best table">
									<CSTableHeader>
										<CSTableCell
											text="Header Item 1"
											grow={2}
										/>
										<CSTableCell
											text="Header Item 2"
											grow={1}
										/>
										<CSTableCell
											text="Header Item 3"
											grow={1}
										/>
										<CSTableCell
											text="Button Column"
											maxWidth="100px"
										/>
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell
												text="Body Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Body Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Body Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>
						},
						{
							variationName: ['tableDescription and custom id'],
							quickLink: 'tableDescription and custom id',
							component:
								<CSTable tableDescription="last, but best table" id="id">
									<CSTableHeader>
										<CSTableCell
											text="Header Item 1"
											grow={2}
										/>
										<CSTableCell
											text="Header Item 2"
											grow={1}
										/>
										<CSTableCell
											text="Header Item 3"
											grow={1}
										/>
										<CSTableCell
											text="Button Column"
											maxWidth="100px"
										/>
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell
												text="Body Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Body Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Body Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												text="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												text="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												text="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													label="label"
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
					name: 'selectableRows',
					types: ['boolean'],
					description: 'Implement keyboard support for table rows.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the table.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the table.'
				}, {
					name: 'tableDescription',
					types: ['string'],
					description: 'Set a table description.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the table div.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								''
							],
							properties: [
								''
							],
							visual: [
								''
							],
							keyboardOperability: [
								''
							]
						}
					]
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

	getCSTableHeaderDoc() {
		const json = {
			name: 'Table Header',
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the table header.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the table header.'
				}, {
					name: 'headerSticky',
					types: ['boolean'],
					description: 'Apply sticky positioning to the table header.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the table header div.'
				}
			]
		};

		return json;
	}
	getCSTableBodyDoc() {
		const json = {
			name: 'Table Body',
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the table body.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the table body.'
				}, {
					name: 'maxHeight',
					types: ['string'],
					description: 'Set the max-height attribute for the table body.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the table body div.'
				}
			]
		};

		return json;
	}
	getCSTableRowDoc() {
		const json = {
			name: 'Table Row',
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the table row.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the table row.'
				}, {
					name: 'onClick',
					types: ['(event) => void'],
					description: 'Handler method for the click event.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the table row div.'
				}
			]
		};

		return json;
	}

	getCSTableCellDoc() {
		const json = {
			name: 'Table Cell',
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the table cell.'
				}, {
					name: 'grow',
					types: ['number'],
					description: 'Set the flex-grow attribute for the table cell.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the table cell.'
				}, {
					name: 'maxWidth',
					types: ['string'],
					description: 'Set the max-width attribute for the table cell.'
				}, {
					name: 'text',
					types: ['string'],
					description: 'Set textual content for the table cell.'
				}, {
					name: 'role',
					required: 'CSTableHeader',
					types: ['string'],
					default: '\'cell\'',
					description: 'The table header sets the role to columnheader.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the table cell div.'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSTableDoc();
		const component2 = this.getCSTableHeaderDoc();
		const component3 = this.getCSTableBodyDoc();
		const component4 = this.getCSTableRowDoc();
		const component5 = this.getCSTableCellDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2, component3, component4, component5]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSTablePreview;
