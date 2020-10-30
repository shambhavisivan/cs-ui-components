import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import {CSTabGroup, CSTab} from '@cloudsense/cs-ui-components';

class CSTabPreview extends React.Component {
	getCSTabDoc() {

		const clickHandler = () => alert('Tab is clicked!');

		const json = {
			name: 'Tab',
			usage: 'Tabs keeps related content in a single container that is shown and hidden through navigation.',
			accessible: 'yes',
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
								<CSTab title="Tab One"/>
								<CSTab title="Tab Two"/>
								<CSTab title="Tab Three"/>
							</CSTabGroup>
						},
						{
							variationName: ['normal'],
							quickLink: 'normal',
							string: '',
							component:
							<CSTabGroup variant="normal">
								<CSTab title="Tab One"/>
								<CSTab title="Tab Two"/>
								<CSTab title="Tab Three"/>
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
							quickLink: 'initial large',
							string: '',
							component:
							<CSTabGroup variant="large">
								<CSTab title="Tab One" status="initial"/>
								<CSTab title="Tab Two" status="initial"/>
								<CSTab title="Tab Three" status="initial"/>
							</CSTabGroup>
						},
						{
							variationName: ['error'],
							variationText: ['variant="large"'],
							quickLink: 'error large',
							string: '',
							component:
							<CSTabGroup variant="large">
								<CSTab title="Tab One" status="error"/>
								<CSTab title="Tab Two" status="error"/>
								<CSTab title="Tab Three" status="error"/>
							</CSTabGroup>
						},
						{
							variationName: ['warning'],
							variationText: ['variant="large"'],
							quickLink: 'warning large',
							string: '',
							component:
							<CSTabGroup variant="large">
								<CSTab title="Tab One" status="warning"/>
								<CSTab title="Tab Two" status="warning"/>
								<CSTab title="Tab Three" status="warning"/>
							</CSTabGroup>
						},
						{
							variationName: ['success'],
							variationText: ['variant="large"'],
							quickLink: 'success large',
							string: '',
							component:
							<CSTabGroup variant="large">
								<CSTab title="Tab One" status="success"/>
								<CSTab title="Tab Two" status="success"/>
								<CSTab title="Tab Three" status="success"/>
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
								<CSTab title="Tab One" active/>
								<CSTab title="Tab Two"/>
								<CSTab title="Tab Three"/>
							</CSTabGroup>
						},
						{
							variationName: ['true'],
							variationText: ['variant="normal"'],
							quickLink: 'true normal',
							string: '',
							component:
							<CSTabGroup>
								<CSTab title="Tab One" active/>
								<CSTab title="Tab Two"/>
								<CSTab title="Tab Three"/>
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
							<CSTabGroup variant="large">
								<CSTab title="Tab One" disabled/>
								<CSTab title="Tab Two" disabled/>
								<CSTab title="Tab Three" disabled/>
							</CSTabGroup>
						},
						{
							variationText: ['variant="normal"'],
							quickLink: 'disabled normal',
							string: '',
							component:
							<CSTabGroup>
								<CSTab title="Tab One" tabIcon="activity" disabled/>
								<CSTab title="Tab Two" disabled/>
								<CSTab title="Tab Three" disabled/>
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
								<CSTab title="Tab One" onClick={clickHandler}/>
								<CSTab title="Tab Two" onClick={clickHandler}/>
								<CSTab title="Tab Three" onClick={clickHandler}/>
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
							<CSTabGroup>
								<CSTab title="Tab One"/>
								<CSTab title="Tab Two"/>
								<CSTab title="Tab Three"/>
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
							<CSTabGroup>
								<CSTab title="Tab One" tabIcon="activity"/>
								<CSTab title="Tab Two"/>
								<CSTab title="Tab Three"/>
							</CSTabGroup>
						}
					]
				},
				{
					propName: 'tooltipContent',
					customText: '',
					variations: [
						{
							variationText: ['status="initial"'],
							quickLink: ['initial'],
							string: '',
							component:
							<CSTabGroup>
								<CSTab title="Tab One" tooltipContent="Error message example!"/>
								<CSTab title="Tab Two"/>
								<CSTab title="Tab Three"/>
							</CSTabGroup>
						},
						{
							variationText: ['status="error"'],
							quickLink: ['error'],
							string: '',
							component:
							<CSTabGroup>
								<CSTab title="Tab One" tooltipContent="Error message example!" status="error"/>
								<CSTab title="Tab Two" status="error"/>
								<CSTab title="Tab Three" status="error"/>
							</CSTabGroup>
						},
						{
							variationText: ['status="warning"'],
							quickLink: ['warning'],
							string: '',
							component:
							<CSTabGroup>
								<CSTab title="Tab One" tooltipContent="Warning message example!" status="warning"/>
								<CSTab title="Tab Two" status="warning"/>
								<CSTab title="Tab Three" status="warning"/>
							</CSTabGroup>
						},
						{
							variationText: ['status="success"'],
							quickLink: ['success'],
							string: '',
							component:
							<CSTabGroup>
								<CSTab title="Tab One" tooltipContent="Warning message example!" status="success"/>
								<CSTab title="Tab Two" status="success"/>
								<CSTab title="Tab Three" status="success"/>
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
							<CSTabGroup id="id">
								<CSTab title="Tab One" id="id"/>
								<CSTab title="Tab Two" id="id"/>
								<CSTab title="Tab Three" id="id"/>
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
							<CSTabGroup className="custom-class">
								<CSTab title="Tab One" className="custom-class-2"/>
								<CSTab title="Tab Two"/>
								<CSTab title="Tab Three"/>
							</CSTabGroup>
						}
					]
				}
			],
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
				},
				{
					propertyName: 'tooltipConent',
					description: 'Renders tooltip with content instead of tab icon. Tooltip icons will match tab status icons.'
				},
				{
					propertyName: 'parentVariant',
					description: 'Tab variant',
					helperPropInComponents: [
						'TabGroup'
					],
					options: [
						'large',
						'normal'
					]
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'2.4.7',
						'3.2.1',
						'3.3.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML <nav> is a top wrapper - allows screen reader navigation search',
								'HTML <ol> is items wrapper - allows screen reader list search',
								'Buttons wrapped in HTML <li> - allows screen reader list navigation while preserving keyboard operability',
								'Icon as a child element with aria-hidden'
							],
							properties: [
								'aria-label',
								'aria-invalid',
								'aria-current'
							],
							visual: [
								'colours in defined contrast',
								'Distinct hover, active and focus state styles'
							],
							keyboardOperability: [
								'<button> used to ensure focus and keyboard operability'
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
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2]} />
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

export default CSTabPreview;
