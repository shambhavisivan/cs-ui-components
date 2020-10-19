import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSTooltip, CSChip } from '@cloudsense/cs-ui-components';

class CSTooltipPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Tooltip',
			usage: 'A Tooltip is a small piece of contextual information about an element on the screen, which is displayed when a user hovers or focuses on the element it is describing. It is not focusable and cannot contain focusable content.',
			accessible: 'partially',
			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['info'],
							quickLink: 'info',
							string: '',
							component:
								<CSTooltip variant="info" content="Help text example"/>
						},
						{
							variationName: ['warning'],
							quickLink: 'warning',
							string: '',
							component:
								<CSTooltip variant="warning" content="Help text example"/>
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							string: '',
							component:
								<CSTooltip variant="error" content="Help text example"/>
						}
					]
				},
				{
					propName: 'iconColor',
					customText: '',
					variations: [
						{
							variationName: ['pink'],
							quickLink: 'pink',
							string: '',
							component:
								<CSTooltip iconColor="pink" content="Help text example"/>
						},
						{
							variationName: ['#ff0000'],
							quickLink: '#ff0000',
							string: '',
							component:
								<CSTooltip iconColor="#ff0000" content="Help text example"/>
						},
						{
							variationName: ['rgba(100,100,255,1.00)'],
							quickLink: 'rgba(100,100,255,1.00)',
							string: '',
							component:
								<CSTooltip iconColor="rgba(100,100,255,1.00)" content="Help text example"/>
						}
					]
				},
				{
					propName: 'iconName',
					customText: 'This is used for overriding default icon defined by variant',
					variations: [
						{
							variationName: ['quote'],
							quickLink: 'quote',
							string: '',
							component:
								<CSTooltip iconName="quote" content="Help text example"/>
						}
					]
				},
				{
					propName: 'iconSize',
					customText: 'Size of the tooltip icon',
					variations: [
						{
							variationName: ['small'],
							quickLink: 'small',
							variationText: ['iconName="info"'],
							string: '',
							component:
								<CSTooltip iconName="info" content="Help text example"/>
						},
						{
							variationName: ['medium'],
							quickLink: 'medium',
							variationText: ['iconName="info"'],
							string: '',
							component:
								<CSTooltip iconName="info" iconSize="medium" content="Help text example"/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							string: '',
							component:
								<CSTooltip iconName="quote" content="Help text example" id="id"/>
						}
					]
				},
				{
					propName: 'position',
					variations: [
						{
							variationName: ['top-right'],
							quickLink: 'top-right with array',
							variationText: ['array'],
							string: '',
							component:
								<CSTooltip content={['This is an example tooltip', 'One more tooltip', 'Another tooltip to display']} position="top-right"/>
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							string: '',
							component:
								<CSTooltip  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="top-left"/>
						},
						{
							variationName: ['top-center'],
							quickLink: 'top-center',
							string: '',
							component:
								<CSTooltip  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="top-center"/>
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							string: '',
							component:
								<CSTooltip  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="bottom-right"/>
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							string: '',
							component:
								<CSTooltip  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="bottom-left"/>
						},
						{
							variationName: ['bottom-center'],
							quickLink: 'bottom-center',
							string: '',
							component:
								<CSTooltip  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="bottom-center"/>
						}
					]
				},
				{
					propName: 'tooltipHeader',
					customText: 'This is used for defining tooltip header.Its color will be defined by variant prop',
					variations: [
						{
							variationName: ['info'],
							quickLink: 'info with array',
							variationText: ['array'],
							string: '',
							component:
								<CSTooltip  tooltipHeader="Info" content={['This is an example tooltip', 'One more tooltip', 'Another tooltip to display']} />
						},
						{
							variationName: ['warning'],
							quickLink: 'warning',
							variationText: ['position="bottom-left"'],
							string: '',
							component:
								<CSTooltip  variant="warning" tooltipHeader="Warning" position="bottom-left" content="Help text example" />
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							string: '',
							component:
								<CSTooltip  variant="error" tooltipHeader="Error" content="Help text example" />
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
							variationText: ['iconName="quote"'],
							string: '',
							component:
								<CSTooltip iconName="quote" content="Help text example" className="custom-class"/>
						}
					]
				},
				{
					propName: 'delayTooltip',
					customText: '',
					variations: [
						{
							variationName: ['500'],
							string: '',
							component:
								<CSTooltip delayTooltip={500} content="Help text example"/>
						}
					]
				},
				{
					propName: 'height',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSTooltip height="200px" content="Help text example"/>
						}
					]
				},
				{
					propName: 'width',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSTooltip width="10rem" content="Help text example"/>
						}
					]
				},
				{
					propName: 'children',
					customText: '',
					variations: [
						{
							variationName: ['child'],
							string: '',
							component:
							<CSTooltip variant="info" content="Help text example">
								<CSChip text="brand" />
							</CSTooltip>
						}
					]
				},
				{
					propName: 'content',
					customText: '',
					variations: [
						{
							variationName: ['custom element'],
							string: '',
							variationText: ['children={<CSChip text="brand" />}'],
							component:
							<CSTooltip variant="info" content={<CSChip text="brand" />}>
								<CSChip text="brand" />
							</CSTooltip>
						}
					]
				},
				{
					propName: 'stylePosition',
					quickLink: 'tooltip position style',
					customText: 'Choose the CSS position value of the tooltip',
					variations: [
						{
							variationName: ['fixed'],
							quickLink: 'fixed',
							string: '',
							component:
								<CSTooltip content="Tooltip with position fixed" stylePosition="fixed" />
						},
						{
							variationName: ['absolute'],
							quickLink: 'absolute',
							string: '',
							component:
								<CSTooltip content="Tooltip with position absolute" position="bottom-center" stylePosition="absolute" />
						}
					]
				},
				{
					propName: 'focusable',
					customText: '',
					variations: [
						{
							variationName: ['false'],
							string: '',
							component:
							<CSTooltip focusable={false} content="Help text example"/>
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
					propertyName: 'content',
					description: 'Tooltip help text content'
				},
				{
					propertyName: 'delayTooltip',
					description: 'Delay the tooltip appearing in ms'
				},
				{
					propertyName: 'focusable',
					description: 'Determines whether tooltip is keyboard focusable',
					options: [
						'true',
						'false'
					]
				},
				{
					propertyName: 'height',
					description: 'Custom tooltip height'
				},
				{
					propertyName: 'iconColor',
					description: 'Color of tooltip icon',
					options: [
						'e.g.',
						'pink',
						'#ff0000',
						'rgba(100,100,255,1.00)'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library which overrides the default icon defined by variant'
				},
				{
					propertyName: 'iconSize',
					description: 'Size of the tooltip icon.',
					options: [
						'small',
						'medium'
					]
				},
				{
					propertyName: 'id',
					description: 'Tooltip id value'
				},
				{
					propertyName: 'position',
					description: 'Tooltip position',
					options: [
						'top-right',
						'top-left',
						'top-center',
						'bottom-right',
						'bottom-left',
						'bottom-center'
					]
				},
				{
					propertyName: 'stylePosition',
					description: 'Choose the CSS position value of the tooltip',
					options: [
						'fixed',
						'absolute'
					]
				},
				{
					propertyName: 'tooltipHeader',
					description: 'Content of the tooltip header'
				},
				{
					propertyName: 'variant',
					description: 'Color variant of tooltip',
					options: [
						'info',
						'warning',
						'error'
					]
				},
				{
					propertyName: 'width',
					description: 'Custom tooltip width'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4',
						'1.4.13',
						'2.1.1',
						'2.1.2',
						'2.4.7',
						'2.5.3',
						'3.2.1',
						'3.3.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'Icon as a child element with aria-hidden'
							],
							properties: [
								'aria-labelledby - associate tooltip icon with tooltip body',
								'role="tooltip"'
							],
							styling: [
								'Focus state styles',
								'Text color contrast ratio > 4.5'
							],
							keyboardOperability: [
								'Logic for focus to open tooltip'
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
	render() {
		const component = this.getDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
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

export default CSTooltipPreview;
