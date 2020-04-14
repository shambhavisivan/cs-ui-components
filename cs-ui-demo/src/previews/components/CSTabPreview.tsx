import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSTabGroup, CSTab} from '@cloudsense/cs-ui-components';

class CSTabPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Tabs',
			usage: 'Tabs keeps related content in a single container that is shown and hidden through navigation.',

			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['large'],
							string: '',
							component:
							<CSTabGroup variant="large">
								<CSTab
									title="Tab One"
								/>
								<CSTab
									title="Tab Two"
								/>
								<CSTab
									title="Tab Three"
								/>
							</CSTabGroup>
						},
						{
							variationName: ['normal'],
							string: '',
							component:
							<CSTabGroup variant="normal">
								<CSTab
									title="Tab One"
								/>
								<CSTab
									title="Tab Two"
								/>
								<CSTab
									title="Tab Three"
								/>
							</CSTabGroup>
						}
					]
				},
				{
					propName: 'status',
					customText: '',
					variations: [
						{
							variationName: ['error'],
							string: '',
							component:
							<CSTabGroup
								variant="large"
							>
								<CSTab
									title="Tab One"
									status="error"
								/>
								<CSTab
									title="Tab Two"
									status="error"
								/>
								<CSTab
									title="Tab Three"
									status="error"
								/>
							</CSTabGroup>
						},
						{
							variationName: ['warning'],
							string: '',
							component:
							<CSTabGroup
								variant="large"
							>
								<CSTab
									title="Tab One"
									status="warning"
								/>
								<CSTab
									title="Tab Two"
									status="warning"
								/>
								<CSTab
									title="Tab Three"
									status="warning"
								/>
							</CSTabGroup>
						},
						{
							variationName: ['success'],
							string: '',
							component:
							<CSTabGroup
								variant="large"
							>
								<CSTab
									title="Tab One"
									status="success"
								/>
								<CSTab
									title="Tab Two"
									status="success"
								/>
								<CSTab
									title="Tab Three"
									status="success"
								/>
							</CSTabGroup>
						}
					]
				},
				{
					propName: 'title',
					customText: '',
					variations: [
						{
							string: '',
							component:
							<CSTabGroup variant="normal">
								<CSTab
									title="Tab One"
								/>
								<CSTab
									title="Tab Two"
								/>
								<CSTab
									title="Tab Three"
								/>
							</CSTabGroup>
						}
					]
				},
				{
					propName: 'tabIcon',
					customText: '',
					variations: [
						{
							string: '',
							component:
							<CSTabGroup variant="normal">
								<CSTab
									title="Tab One"
									tabIcon="activity"
								/>
								<CSTab
									title="Tab Two"
								/>
								<CSTab
									title="Tab Three"
								/>
							</CSTabGroup>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							string: '',
							component:
							<CSTabGroup
								variant="normal"
								className="custom-class"
							>
								<CSTab
									title="Tab One"
								/>
								<CSTab
									title="Tab Two"
								/>
								<CSTab
									title="Tab Three"
								/>
							</CSTabGroup>
						}
					]
				}
			],

		/* CSTab Properties Table */
			properties: [
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				},
				{
					propertyName: 'status',
					description: 'Color and icon variant depending on status',
					options: [
						'error',
						'warning',
						'success'
					]
				},
				{
					propertyName: 'tabIcon',
					description: 'Name of icon from icons library which will be visible in tab',
					options: []
				},
				{
					propertyName: 'title',
					description: 'Text content of tab',
					options: []
				},
				{
					propertyName: 'variant',
					description: 'Tab variant',
					options: [
						'large',
						'normal'
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

	render() {
		const component = this.getDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSTabPreview;
