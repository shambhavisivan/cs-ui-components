import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import { CSPath, CSPathItem, CSAlert } from '@cloudsense/cs-ui-components';

class CSPathPreview extends React.Component {
	handleOnClick = () => alert('Path item is clicked!');
	getCSPathDoc() {
		const json = {
			name: 'Path',
			usage: 'A process component communicates to the user the progress of a particular process.',
			examples: [
				{
					propName: 'title',
					customText: '',
					variations: [
						{
							component:
								<CSPath>
									<CSPathItem
										title="Path Item 1"
									/>
									<CSPathItem
										title="Path Item 2"
									/>
									<CSPathItem
										title="Path Item 3"
									/>
								</CSPath>
						}
					]
				},
				{
					propName: 'status',
					customText: '',
					variations: [
						{
							variationName: ['success'],
							quickLink: 'success',
							string: '',
							component:
								<CSPath>
									<CSPathItem
										status="success"
										title="Path Item 1"
									/>
									<CSPathItem
										status="success"
										title="Path Item 2"
									/>
									<CSPathItem
										status="success"
										title="Path Item 3"
									/>
								</CSPath>
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							string: '',
							component:
								<CSPath>
									<CSPathItem
										status="error"
										title="Path Item 1"
									/>
									<CSPathItem
										status="error"
										title="Path Item 2"
									/>
									<CSPathItem
										status="error"
										title="Path Item 3"
									/>
								</CSPath>
						}
					]
				},
				{
					propName: 'active',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSPath>
									<CSPathItem
										title="Path Item 1"
										active
									/>
									<CSPathItem
										title="Path Item 2"
									/>
									<CSPathItem
										title="Path Item 3"
									/>
								</CSPath>
						}
					]
				},
				{
					propName: 'disabled',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSPath>
									<CSPathItem
										title="Path Item 1"
										disabled
									/>
									<CSPathItem
										title="Path Item 2"
										disabled
									/>
									<CSPathItem
										title="Path Item 3"
										disabled
									/>
								</CSPath>
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSPath id="id">
									<CSPathItem
										id="id"
										title="Path Item 1"
									/>
									<CSPathItem
										id="id"
										title="Path Item 2"
									/>
									<CSPathItem
										id="id"
										title="Path Item 3"
									/>
								</CSPath>
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
								<CSPath>

									<CSPathItem
										onClick={this.handleOnClick}
										title="Path Item 1"
									/>
									<CSPathItem
										onClick={this.handleOnClick}
										title="Path Item 2"
									/>
									<CSPathItem
										onClick={this.handleOnClick}
										title="Path Item 3"
									/>
								</CSPath>
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
								<CSPath className="custom-class">
									<CSPathItem
										title="Path Item 1"
									/>
									<CSPathItem
										title="Path Item 2"
									/>
									<CSPathItem
										title="Path Item 3"
									/>
								</CSPath>
						}
					]
				}
			],

			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the path.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the path.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the path nav tag.'
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

	getCSPathItemDoc() {
		const json = {
			name: 'Path Item',
			properties: [
				{
					name: 'active',
					types: ['boolean'],
					default: 'false',
					description: 'Control the active state.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the path item.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the path item.'
				}, {
					name: 'onClick',
					types: ['(event) => any'],
					description: 'Handler method for the click event.'
				}, {
					name: 'status',
					customTypes: [{
						name: 'CSPathItemStatus',
						types: ['\'success\'', '\'error\'']
					}],
					description: 'Set the colour and the icon variant depending on status.'
				}, {
					name: 'title',
					required: true,
					types: ['string'],
					description: 'Set the path item title.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the path item list item tag.'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSPathDoc();
		const component2 = this.getCSPathItemDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<CSAlert variant="warning" text="This component is under construction and should not be used." />
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

export default CSPathPreview;
