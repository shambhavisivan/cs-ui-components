import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSTabGroup, CSTab} from '@cloudsense/cs-ui-components';

class CSTabPreview extends React.Component {
	getCSTabGroupDoc() {

		const clickHandler = () => alert('Tab is clicked!');

		const json = {
			name: 'Tab',
			usage: 'Tabs keeps related content in a single container that is shown and hidden through navigation.',

			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['large'],
							quickLink: 'large',
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
							quickLink: 'normal',
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
							variationName: ['initial'],
							variationText: ['variant="large"'],
							quickLink: 'inital large',
							string: '',
							component:
							<CSTabGroup
								variant="large"
							>
								<CSTab
									title="Tab One"
									status="initial"
								/>
								<CSTab
									title="Tab Two"
									status="initial"
								/>
								<CSTab
									title="Tab Three"
									status="initial"
								/>
							</CSTabGroup>
						},
						{
							variationName: ['error'],
							variationText: ['variant="large"'],
							quickLink: 'error large',
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
							variationText: ['variant="large"'],
							quickLink: 'warning large',
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
							variationText: ['variant="large"'],
							quickLink: 'success large',
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
						},
						{
							variationName: ['disabled'],
							variationText: ['variant="large"'],
							quickLink: 'disabled large',
							string: '',
							component:
							<CSTabGroup
								variant="large"
							>
								<CSTab
									title="Tab One"
									status="disabled"
								/>
								<CSTab
									title="Tab Two"
									status="disabled"
								/>
								<CSTab
									title="Tab Three"
									status="disabled"
								/>
							</CSTabGroup>
						}
					]
				},
				{
					propName: 'active',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							variationText: ['variant="large"'],
							quickLink: 'true large',
							string: '',
							component:
							<CSTabGroup variant="large">
								<CSTab
									title="Tab One"
									active
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
							variationName: ['true'],
							variationText: ['variant="normal"'],
							quickLink: 'true normal',
							string: '',
							component:
							<CSTabGroup variant="normal">
								<CSTab
									title="Tab One"
									active
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
					propName: 'onClick',
					customText: '',
					variations: [
						{
							string: '',
							component:
							<CSTabGroup variant="large">
								<CSTab
									title="Tab One"
									onClick={clickHandler}
								/>
								<CSTab
									title="Tab Two"
									onClick={clickHandler}
								/>
								<CSTab
									title="Tab Three"
									onClick={clickHandler}
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
							variationName: ['activity'],
							quickLink: ['activity'],
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
					propertyName: 'active',
					description: 'Tab styling when the tab is active/selected'
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event'
				},
				{
					propertyName: 'status',
					description: 'Color and icon variant depending on status',
					options: [
						'initial',
						'error',
						'warning',
						'success',
						'disabled'
					]
				},
				{
					propertyName: 'tabIcon',
					description: 'Name of icon from icons library which will be visible in tab'
				},
				{
					propertyName: 'title',
					description: 'Text content of tab'
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
		const component = this.getCSTabGroupDoc();

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
