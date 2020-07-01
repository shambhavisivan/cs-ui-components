import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSTable, CSTableHeader, CSTableBody, CSTableRow, CSTableCell, CSButton} from '@cloudsense/cs-ui-components';

class CSTablePreview extends React.Component {
	getCSTableDoc() {
		const onClickHandler = () => alert('Table row was clicked!');
		const json = {
			name: 'Table',
			usage: 'Tables are an enhanced version of an HTML table and are used to display tabular data.',
			examples: [
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSTable id="id">
									<CSTableHeader id="id">
										<CSTableCell
											title="Header Item 1"
											grow={2}
											id="id"
										/>
										<CSTableCell
											title="Header Item 2"
											grow={1}
											id="id"
										/>
										<CSTableCell
											title="Header Item 3"
											grow={1}
											id="id"
										/>
										<CSTableCell
											title="Button Column"
											maxWidth="100px"
											id="id"
										/>
									</CSTableHeader>
									<CSTableBody id="id">
										<CSTableRow id="id">
											<CSTableCell
												title="Body Item 1"
												grow={2}
												id="id"
											/>
											<CSTableCell
												title="Body Item 2"
												grow={1}
												id="id"
											/>
											<CSTableCell
												title="Body Item 3"
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
												title="Second Row Item 1"
												grow={2}
												id="id"
											/>
											<CSTableCell
												title="Second Row Item 2"
												grow={1}
												id="id"
											/>
											<CSTableCell
												title="Second Row Item 3"
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
							string: '',
							component:
								<CSTable>
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
										<CSTableRow onClick={onClickHandler}>
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
													label="label"
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow onClick={onClickHandler}>
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
													label="label"
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
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'id',
					description: 'Table id value'
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
					propertyName: 'id',
					description: 'Table header id value'
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
					propertyName: 'id',
					description: 'Table body id value'
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
					propertyName: 'id',
					description: 'Table row id value'
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event'
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
					propertyName: 'grow',
					description: 'Flex grow value for cell'
				},
				{
					propertyName: 'id',
					description: 'Table cell id value'
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
					propertyName: 'title',
					description: 'Text content of cell'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSTableDoc();
		const component2 = this.getCSTableCellDoc();
		const component3 = this.getCSTableHeaderDoc();
		const component4 = this.getCSTableBodyDoc();
		const component5 = this.getCSTableRowDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2, component3, component4, component5]} />
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
