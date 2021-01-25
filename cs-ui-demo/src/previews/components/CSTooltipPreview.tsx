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
							component:
								<CSTooltip variant="info" content="Help text example" />
						},
						{
							variationName: ['warning'],
							quickLink: 'warning',
							component:
								<CSTooltip variant="warning" content="Help text example" />
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							component:
								<CSTooltip variant="error" content="Help text example" />
						},
						{
							variationName: ['success'],
							quickLink: 'success',
							component:
								<CSTooltip variant="success" content="Help text example" />
						},
						{
							variationName: ['basic'],
							quickLink: 'basic',
							component:
								<CSTooltip variant="basic" content="Help text example" />
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
							component:
								<CSTooltip iconColor="pink" content="Help text example" />
						},
						{
							variationName: ['#ff0000'],
							quickLink: '#ff0000',
							component:
								<CSTooltip iconColor="#ff0000" content="Help text example" />
						},
						{
							variationName: ['rgba(100,100,255,1.00)'],
							quickLink: 'rgba(100,100,255,1.00)',
							component:
								<CSTooltip iconColor="rgba(100,100,255,1.00)" content="Help text example" />
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
							component:
								<CSTooltip iconName="quote" content="Help text example" />
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
							component:
								<CSTooltip iconName="info" content="Help text example" />
						},
						{
							variationName: ['medium'],
							quickLink: 'medium',
							variationText: ['iconName="info"'],
							component:
								<CSTooltip iconName="info" iconSize="medium" content="Help text example" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSTooltip iconName="quote" content="Help text example" id="id" />
						}
					]
				},
				{
					propName: 'position',
					alert: {
						variant: 'info',
						text: 'The provided position will be overridden if the tooltip is outside of viewport. This auto-position functionality is only working with stylePosition fixed for now!'
					},
					variations: [
						{
							variationName: ['top-right'],
							quickLink: 'top-right with array',
							variationText: ['array'],
							component:
								<CSTooltip content={['This is an example tooltip', 'One more tooltip', 'Another tooltip to display']} position="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="top-left" />
						},
						{
							variationName: ['top-center'],
							quickLink: 'top-center',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="top-center" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="bottom-left" />
						},
						{
							variationName: ['bottom-center'],
							quickLink: 'bottom-center',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="bottom-center" />
						},
						{
							variationName: ['right-top'],
							quickLink: 'right-top',
							component:
								<CSTooltip height="400px" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="right-top" />
						},
						{
							variationName: ['right-center'],
							quickLink: 'right-center',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="right-center" />
						},
						{
							variationName: ['right-bottom'],
							quickLink: 'right-bottom',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="right-bottom" />
						},
						{
							variationName: ['left-top'],
							quickLink: 'left-top',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="left-top" />
						},
						{
							variationName: ['left-center'],
							quickLink: 'left-center',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="left-center" />
						},
						{
							variationName: ['left-bottom'],
							quickLink: 'left-bottom',
							component:
								<CSTooltip content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="left-bottom" />
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
							component:
								<CSTooltip tooltipHeader="Info" content={['This is an example tooltip', 'One more tooltip', 'Another tooltip to display']} />
						},
						{
							variationName: ['warning'],
							quickLink: 'warning',
							variationText: ['position="bottom-left"'],
							component:
								<CSTooltip variant="warning" tooltipHeader="Warning" position="bottom-left" content="Help text example" />
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							component:
								<CSTooltip variant="error" tooltipHeader="Error" content="Help text example" />
						},
						{
							variationName: ['success'],
							quickLink: 'success',
							component:
								<CSTooltip variant="success" tooltipHeader="Success" content="Help text example" />
						},
						{
							variationName: ['basic'],
							quickLink: 'basic',
							component:
								<CSTooltip variant="basic" tooltipHeader="Basic" content="Help text example" />
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
							component:
								<CSTooltip iconName="quote" content="Help text example" className="custom-class" />
						}
					]
				},
				{
					propName: 'delayTooltip',
					customText: '',
					variations: [
						{
							variationName: ['500'],
							quickLink: '500',
							component:
								<CSTooltip delayTooltip={500} content="Help text example" />
						}
					]
				},
				{
					propName: 'height',
					customText: '',
					variations: [
						{
							variationName: ['200px'],
							quickLink: '200px',
							component:
								<CSTooltip height="200px" content="Help text example" />
						},
						{
							variationName: ['auto'],
							quickLink: 'auto',
							component:
								<CSTooltip height="auto" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi." />
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['5rem'],
							quickLink: '5rem',
							component:
								<CSTooltip width="5rem" content="Help text example" />
						},
						{
							variationName: ['auto'],
							quickLink: 'auto',
							component:
								<CSTooltip width="auto" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi." />
						}
					]
				},
				{
					propName: 'children',
					customText: '',
					variations: [
						{
							variationName: ['child'],
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
							component:
								<CSTooltip content="Tooltip with position fixed. Tooltip with position fixed. Tooltip with position fixed." stylePosition="fixed" />
						},
						{
							variationName: ['absolute'],
							quickLink: 'absolute',
							component:
								<CSTooltip content="Tooltip with position absolute. Tooltip with position absolute. Tooltip with position absolute." stylePosition="absolute" />
						}
					]
				},
				{
					propName: 'focusable',
					customText: '',
					variations: [
						{
							variationName: ['false'],
							component:
								<CSTooltip focusable={false} content="Help text example" />
						}
					]
				},
				{
					propName: 'padding',
					customText: '',
					variations: [
						{
							variationName: ['0'],
							component:
								<CSTooltip padding="0" content="Help text example" />
						}
					]
				}
			],
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the tooltip.'
				}, {
					name: 'content',
					required: true,
					types: ['string', 'Array<string>', 'Element'],
					description: 'Set the content of the tooltip.'
				}, {
					name: 'delayTooltip',
					types: ['number'],
					default: '0',
					description: 'Delay the tooltip becoming visible in ms.'
				}, {
					name: 'focusable',
					types: ['boolean'],
					default: 'true',
					description: 'Determines whether the tooltip is keyboard focusable'
				}, {
					name: 'height',
					types: ['string'],
					description: 'Set the tooltip height. (eg. 100px, 10rem, etc.)'
				}, {
					name: 'iconColor',
					types: ['string'],
					description: 'Set a custom colour for the tooltip icon. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
				}, {
					name: 'iconName',
					types: ['string'],
					description: 'Override the default icon defined by the variant.'
				}, {
					name: 'iconSize',
					customTypes: [{
						name: 'CSTooltipIconSize',
						types: ['\'small\'', '\'medium\'']
					}],
					default: '\'small\'',
					description: 'Set a size of the tooltip icon.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the tooltip.'
				}, {
					name: 'padding',
					types: ['string'],
					description: 'Set custom padding for the tooltip.'
				}, {
					name: 'position',
					customTypes: [{
						name: 'CSTooltipPosition',
						types: [
							'\'bottom-right\'',
							'\'bottom-left\'',
							'\'top-right\'',
							'\'top-left\'',
							'\'top-center\'',
							'\'bottom-center\'',
							'\'right-top\'',
							'\'right-center\'',
							'\'right-bottom\'',
							'\'left-top\'',
							'\'left-center\'',
							'\'left-bottom\''
						]
					}],
					default: '\'top-right\'',
					description: 'Set the tooltip position.'
				}, {
					name: 'stylePosition',
					customTypes: [{
						name: 'CSTooltipStylePosition',
						types: ['\'fixed\'', '\'absolute\'']
					}],
					default: '\'fixed\'',
					description: 'Choose the CSS position value for the tooltip.'
				}, {
					name: 'tooltipHeader',
					types: ['string'],
					description: 'Set the text content of the tooltip header.'
				}, {
					name: 'variant',
					customTypes: [{
						name: 'CSTooltipVariant',
						types: [
							'\'info\'',
							'\'warning\'',
							'\'error\'',
							'\'success\'',
							'\'basic\''
						]
					}],
					description: 'Set the tooltip color variant.'
				}, {
					name: 'width',
					types: ['string'],
					description: 'Set the tooltip width. (eg. 200px, 20rem, 50%, etc.)'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the tooltip div wrapper.'
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
