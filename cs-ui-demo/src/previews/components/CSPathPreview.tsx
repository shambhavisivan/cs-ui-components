import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import { CSPath, CSPathItem, CSPathWrapper, CSAlert } from '@cloudsense/cs-ui-components';

class CSPathPreview extends React.Component {
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
									<CSPathWrapper>
										<CSPathItem
											title="Path Item 1"
										/>
										<CSPathItem
											title="Path Item 2"
										/>
										<CSPathItem
											title="Path Item 3"
										/>
									</CSPathWrapper>
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
									<CSPathWrapper id="id">
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
									</CSPathWrapper>
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
									<CSPathWrapper>
										<CSPathItem
											title="Path Item 1"
										/>
										<CSPathItem
											title="Path Item 2"
										/>
										<CSPathItem
											title="Path Item 3"
										/>
									</CSPathWrapper>
								</CSPath>
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
					description: 'Path id value'
				},
				{
					propertyName: 'title',
					description: 'Text content of path item'
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
	getCSPathWrapperDoc() {
		const json = {
			name: 'Path Wrapper',
			properties: [
				{
					propertyName: 'id',
					description: 'Path wrapper id value'
				}
			]
		};

		return json;
	}
	getCSPathItemDoc() {
		const json = {
			name: 'Path Item',
			properties: [
				{
					propertyName: 'id',
					description: 'Path item id value'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSPathDoc();
		const component2 = this.getCSPathWrapperDoc();
		const component3 = this.getCSPathItemDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<CSAlert variant="warning" text="This component is under construction." />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2, component3]} />
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
