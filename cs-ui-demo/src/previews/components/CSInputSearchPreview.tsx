import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSInputSearch } from '@cloudsense/cs-ui-components';

interface CSInputSearchPreviewState {
	focused: boolean;
}

class CSInputSearchPreview extends React.Component<{}, CSInputSearchPreviewState> {
	state = { focused: false };

	handleChange = () => alert('Value has changed.');
	handleBlur = () => alert('Input has lost focus.');
	handleKeyDown = (event: any) => alert(`Key ${event.key} has been pressed.`);
	handleClearSearch = () => alert('Value has been cleared.');
	handleFocus = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Input has gained focus.');
			}
			return { focused: !prevState.focused };
		});
	}

	getDoc() {
		const json = {
			name: 'Input Search',
			usage: 'Search input is used for search value entry.',
			accessible: 'yes',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" value="Value" />
						}
					]
				},
				{
					propName: 'placeholder',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" placeholder="Search name" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" id="search" />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" />
						}
					]
				},
				{
					propName: 'labelHidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputSearch label="Type here:" labelHidden />
						}
					]
				},
				{
					propName: 'labelTitle',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputSearch label="Type here:" labelTitle />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" helpText="Help text example" />
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right'],
							quickLink: 'top-right',
							component:
								<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="bottom-left" />
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputSearch label="Type here:" disabled />
						}
					]
				},
				{
					propName: 'hidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputSearch label="Type here:" hidden />
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputSearch label="Type here:" required />
						}
					]
				},
				{
					propName: 'error',
					alert: {
						variant: 'info',
						text: 'Component in error state should always contain associated error message to satisfy accessibility best practices!'
					},
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputSearch label="Type here:" error />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSInputSearch label="Enter value:" error errorMessage="Error message!" />
						}
					]
				},
				{
					propName: 'iconPosition',
					variations: [
						{
							variationName: ['right'],
							quickLink: 'right',
							component:
								<CSInputSearch label="Type here:" iconPosition="right" />
						}
					]
				},
				{
					propName: 'borderType',
					variations: [
						{
							variationName: ['square'],
							quickLink: 'square',
							component:
								<CSInputSearch label="Type here:" borderType="square" />
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['50%'],
							quickLink: '50%',
							component:
								<CSInputSearch label="Type here:" width="50%" />
						}
					]
				},
				{
					propName: 'onBlur',
					customText: '',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" onBlur={this.handleBlur} />
						}
					]
				},

				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" onChange={this.handleChange} />
						}
					]
				},
				{
					propName: 'onFocus',
					customText: '',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" onFocus={this.handleFocus} />
						}
					]
				},
				{
					propName: 'onKeyDown',
					customText: '',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" onKeyDown={this.handleKeyDown} />
						}
					]
				},
				{
					propName: 'onClearSearch',
					customText: 'Provides option to call a function after search cleared to provide extra functionality',
					variations: [
						{
							component:
								<CSInputSearch label="Type here and clear search:" onClearSearch={this.handleClearSearch} />
						}
					]
				},
				{
					propName: 'autoFocus',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputSearch label="Type here:" autoFocus />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSInputSearch label="Type here:" title="This is a title" />
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSInputSearch label="Type here:" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					name: 'autoFocus',
					types: ['boolean'],
					default: 'false',
					description: 'Set whether the search input should be autofocused.'
				}, {
					name: 'borderType',
					customTypes: [{
						name: 'CSInputSearchBorderType',
						types: ['\'round\'', '\'square\'']
					}],
					default: '\'round\'',
					description: 'Set a border style for the search input.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the search input.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the search input.'
				}, {
					name: 'error',
					types: ['boolean'],
					description: 'Toggle the error state.'
				}, {
					name: 'errorMessage',
					customTypes: [{
						name: 'CSFieldErrorMsgType',
						types: ['string', 'Array<string>']
					}],
					description: 'Set the error message or messages for the number input.'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed in the tooltip.'
				}, {
					name: 'hidden',
					types: ['boolean'],
					default: 'false',
					description: 'Control the hidden attribute.'
				}, {
					name: 'iconPosition',
					customTypes: [{
						name: 'CSInputSearchIconPosition',
						types: ['\'left\'', '\'right\'']
					}],
					default: '\'left\'',
					description: 'Set where the icon should be positioned.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the search input.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the search input label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the search input label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'onBlur',
					types: ['(event) => void'],
					description: 'Handler method for the blur event.'
				}, {
					name: 'onChange',
					types: ['(event) => void'],
					description: 'Handler method for the change event.'
				}, {
					name: 'onFocus',
					types: ['(event) => any'],
					description: 'Handler method for the focus event.'
				}, {
					name: 'onKeyDown',
					types: ['(event) => void'],
					description: 'Handler method for the keydown event.'
				}, {
					name: 'onClearSearch',
					types: ['() => void'],
					description: 'Handler method for when the input is cleared.'
				}, {
					name: 'placeholder',
					types: ['string'],
					description: 'Set a search input placeholder.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Make the search input required.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the search input title.'
				}, {
					name: 'tooltipPosition',
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
					description: 'Set the tooltip position for the search input.'
				}, {
					name: 'value',
					types: ['string'],
					description: 'Set the search input value.'
				}, {
					name: 'width',
					types: ['string'],
					description: 'Set the search input field width. (eg. 100%, 20rem, 400px, etc.)'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the search input.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.3.1',
						'1.4.1',
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'2.4.7',
						'2.5.3',
						'3.2.1',
						'3.2.2',
						'3.3.1',
						'3.3.2',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML `<input type="number">`',
								'Icon as a child element with `aria-hidden`',
								'Clear button as a child element'
							],
							properties: [
								'`aria-invalid`',
								'`aria-required`',
								'`aria-labelledby` - associate field with label'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'OOTB focusable'
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

export default CSInputSearchPreview;
