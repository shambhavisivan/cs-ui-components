import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import { CSProgressIndicator, CSProgressIndicatorItem } from '@cloudsense/cs-ui-components';

class CSProgressIndicatorPreview extends React.Component {

	getDoc() {
		const json = {
			name: 'Progress Indicator',
			usage: 'Progress Indicator is a component that communicates to the user the progress of a particular process.',
			accessible: 'no',
			examples: [
				{
					propName: 'status',
					customText: '',
					variations: [
						{
							variationName: ['incomplete'],
							quickLink: 'incomplete',
							component:
								<CSProgressIndicator
									id="id"
								>
									<CSProgressIndicatorItem text="Item 1" status="incomplete"/>
									<CSProgressIndicatorItem text="Item 2" status="incomplete"/>
									<CSProgressIndicatorItem text="Item 3" status="incomplete"/>
								</CSProgressIndicator>
						},
						{
							variationName: ['active'],
							quickLink: 'active',
							component:
								<CSProgressIndicator
									id="id"
								>
									<CSProgressIndicatorItem text="Item 1" status="active"/>
									<CSProgressIndicatorItem text="Item 2" status="active"/>
									<CSProgressIndicatorItem text="Item 3" status="active"/>
								</CSProgressIndicator>
						},
						{
							variationName: ['complete'],
							quickLink: 'complete',
							component:
								<CSProgressIndicator
									id="id"
								>
									<CSProgressIndicatorItem text="Item 1" status="complete"/>
									<CSProgressIndicatorItem text="Item 2" status="complete"/>
									<CSProgressIndicatorItem text="Item 3" status="complete"/>
								</CSProgressIndicator>
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							component:
								<CSProgressIndicator
									id="id"
								>
									<CSProgressIndicatorItem text="Item 1" status="error"/>
									<CSProgressIndicatorItem text="Item 2" status="error"/>
									<CSProgressIndicatorItem text="Item 3" status="error"/>
								</CSProgressIndicator>
						}
					]
				},
				{
					propName: 'text',
					customText: '',
					variations: [
						{
							component:
								<CSProgressIndicator
									id="id"
								>
									<CSProgressIndicatorItem text="Item 1" status="complete"/>
									<CSProgressIndicatorItem text="Item 2" status="error"/>
									<CSProgressIndicatorItem text="Item 3" status="active"/>
									<CSProgressIndicatorItem text="Item 4" status="incomplete"/>
								</CSProgressIndicator>
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSProgressIndicator
									id="id"
								>
									<CSProgressIndicatorItem text="Item 1" status="complete"/>
									<CSProgressIndicatorItem text="Item 2" status="error"/>
									<CSProgressIndicatorItem text="Item 3" status="complete"/>
									<CSProgressIndicatorItem text="Item 4" status="active"/>
									<CSProgressIndicatorItem text="Item 5" status="incomplete"/>
									<CSProgressIndicatorItem text="Item 6" status="incomplete"/>
								</CSProgressIndicator>
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
								<CSProgressIndicator
									className="custom-class"
								>
									<CSProgressIndicatorItem text="Item 1" status="complete"/>
									<CSProgressIndicatorItem text="Item 2" status="error"/>
									<CSProgressIndicatorItem text="Item 3" status="complete"/>
									<CSProgressIndicatorItem text="Item 4" status="active"/>
									<CSProgressIndicatorItem text="Item 5" status="incomplete"/>
									<CSProgressIndicatorItem text="Item 6" status="incomplete"/>
								</CSProgressIndicator>
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
					description: 'Progress Indicator id value'
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

	getCSProgressIndicatorItemDoc() {
		const json = {
			name: 'Progress Indicator Item',
			properties: [
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'id',
					description: 'Progress Indicator Item id value'
				},
				{
					propertyName: 'status',
					description: 'Current status style',
					options: [
						'incomplete',
						'complete',
						'active',
						'error'
					]
				},
				{
					propertyName: 'text',
					description: 'Value of text inside component to display'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getDoc();
		const component2 = this.getCSProgressIndicatorItemDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
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

export default CSProgressIndicatorPreview;
