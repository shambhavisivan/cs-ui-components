import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSTabGroup, CSTab} from '@cloudsense/cs-ui-components';

class CSTabPreview extends React.Component {
	getCSTabDoc() {

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
					propName: 'disabled',
					customText: '',
					variations: [
						{
							variationText: ['variant="large"'],
							quickLink: 'disabled large',
							string: '',
							component:
							<CSTabGroup
								variant="large"
							>
								<CSTab
									title="Tab One"
									disabled
								/>
								<CSTab
									title="Tab Two"
									disabled
								/>
								<CSTab
									title="Tab Three"
									disabled
								/>
							</CSTabGroup>
						},
						{
							variationText: ['variant="normal"'],
							quickLink: 'disabled normal',
							string: '',
							component:
							<CSTabGroup
								variant="normal"
							>
								<CSTab
									title="Tab One"
									tabIcon="activity"
									disabled
								/>
								<CSTab
									title="Tab Two"
									tabIcon="activity"
									disabled
								/>
								<CSTab
									title="Tab Three"
									tabIcon="activity"
									disabled
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
					propName: 'id',
					customText: '',
					variations: [
						{
							string: '',
							component:
							<CSTabGroup
								variant="normal"
								id="id"
							>
								<CSTab
									title="Tab One"
									id="id"
								/>
								<CSTab
									title="Tab Two"
									id="id"
								/>
								<CSTab
									title="Tab Three"
									id="id"
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
									className="custom-class-2"
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
					propertyName: 'disabled',
					description: 'Logic for disabled state'
				},
				{
					propertyName: 'id',
					description: 'Tab id value'
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
						'success'
					]
				},
				{
					propertyName: 'tabIcon',
					description: 'Name of icon from icons library which will be visible in tab'
				},
				{
					propertyName: 'title',
					description: 'Text content of tab'
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

	getCSTabGroupDoc() {

		const json = {
			name: 'Tab Group',
			properties: [
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'id',
					description: 'Tab group id value'
				},
				{
					propertyName: 'listName',
					description: 'For overriding \'aria-label\' default value on CSTabGroup'
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
		return json;
	}

	render() {
		const component = this.getCSTabDoc();
		const component2 = this.getCSTabGroupDoc();

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

export default CSTabPreview;
