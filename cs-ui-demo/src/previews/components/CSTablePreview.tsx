import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSTable, CSTableHeader, CSTableBody, CSTableRow, CSTableCell, CSButton} from '@cloudsense/cs-ui-components';

class CSTablePreview extends React.Component {
	getCSTableDoc() {

		const json = {
			name: 'Table',
			usage: 'Tables are an enhanced version of an HTML table and are used to display tabular data.',
			examples: [
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
					propertyName: 'className',
					description: 'For implementing custom class to component'
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

	getCSTableCellDoc() {
		const json = {
			name: 'TableCell',
			properties: [

				{
					propertyName: 'grow',
					description: 'Flex grow value for cell'
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

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2]} />
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
