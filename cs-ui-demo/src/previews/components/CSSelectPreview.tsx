import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSSelect } from '@cloudsense/cs-ui-components';

class CSSelectPreview extends React.Component {
	handleChange = () => alert('Selection has changed.');

	getSelectDoc = () => ({
		name: 'Select',
		usage: 'Select element presents a menu of options.',
		accessible: 'yes',
		previews: [
			{
				name: 'Select',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for select. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSSelect label="Choose color">
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>,
								code: `<CSSelect label="Choose color">
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSSelect label="Choose" borderRadius="0">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect label="Choose" borderRadius="0">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSSelect label="Choose number" disabled>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect label="Choose number" disabled>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'error',
						alert: {
							variant: 'info',
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices!'
						},
						variations: [
							{
								primaryVariants: 'error={true}',
								component: <CSSelect label="Choose amount" error>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" error>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSSelect
									label="Choose amount"
									error
									errorMessage="Error message!"
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect
									label="Choose amount"
									error
									errorMessage="Error message!"
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSSelect label="Choose number" helpText="Help text example">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect label="Choose number" helpText="Help text example">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSSelect label="Choose number" hidden>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect label="Choose number" hidden>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSSelect label="Choose color" labelHidden>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>,
								code: `<CSSelect label="Choose color" labelHidden>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle=[true]',
								component: <CSSelect label="Choose color" labelTitle>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>,
								code: `<CSSelect label="Choose color" labelTitle>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'name',
						variations: [
							{
								component: <CSSelect label="Choose amount" name="Select field">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" name="Select field">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSSelect label="Choose amount" onChange={this.handleChange}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" onChange={this.handleChange}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSSelect label="Choose amount" readOnly>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" readOnly>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSSelect label="Choose amount" required>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" required>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSSelect label="Choose amount" title="This is a title">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" title="This is a title">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'tooltipPosition',
						alert: {
							variant: 'info',
							text: 'This prop can only be used when helpText is set.'
						},
						variations: [
							{
								primaryVariants: 'tooltipPosition="top-left"',
								component: <CSSelect
									label="Choose number"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect
									label="Choose number"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								component: <CSSelect label="Choose amount" value="30">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" value="30">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSSelect
									label="Choose amount"
									id="custom-id"
									className="custom-class"
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect
									label="Choose amount"
									id="custom-id"
									className="custom-class"
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'borderRadius',
				types: ['string'],
				default: '0.25rem',
				description: 'Set a border radius style.'
			}, {
				name: 'children',
				customTypes: [{
					name: 'CSSelectChildren',
					types: ['<option>', 'any']
				}],
				description: 'This component is designed to support <option> tags as children.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the select.'
			}, {
				name: 'disabled',
				types: ['boolean'],
				default: 'false',
				description: 'Disable the select.'
			}, {
				name: 'error',
				types: ['boolean'],
				default: 'false',
				description: 'Toggle the error state.'
			}, {
				name: 'errorMessage',
				customTypes: [{
					name: 'CSFieldErrorMsgType',
					types: ['string', 'Array<string>']
				}],
				description: 'Set the error message or messages for the select.'
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
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the select.'
			}, {
				name: 'label',
				required: true,
				types: ['string'],
				description: 'Set the select label.'
			}, {
				name: 'labelHidden',
				types: ['boolean'],
				default: 'false',
				description: 'Hide the select label.'
			}, {
				name: 'labelTitle',
				types: ['boolean'],
				description: 'Control whether to set the title attribute.'
			}, {
				name: 'name',
				types: ['string'],
				description: 'Set the checkbox name attribute.'
			}, {
				name: 'onChange',
				types: ['(event) => any'],
				description: 'Handler method for the change event.'
			}, {
				name: 'readOnly',
				types: ['boolean'],
				default: 'false',
				description: 'Control whether to apply the readonly attribute.'
			}, {
				name: 'required',
				types: ['boolean'],
				default: 'false',
				description: 'Make the select required.'
			}, {
				name: 'title',
				types: ['string'],
				description: 'Set the select title.'
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
				default: '\'top-right\'',
				description: 'Set the tooltip position for the select.'
			}, {
				name: 'value',
				types: ['any'],
				description: 'Pass a value to the select.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the select tag.'
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
							'`<select>`',
							'Icon as a child element of wrapper with `aria-hidden`'
						],
						properties: [
							'`aria-invalid` - true when there is an error',
							'`aria-required` - true when selecting an option is required',
							'`aria-label` - description when label is hidden',
							'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
							'`role="combobox"` - implicit with `<select>`'
						],
						styling: [
							'Focus state styles'
						],
						keyboardOperability: [
							'`<select>` OOTB focusable and dropdown operable with arrows `Up` and  `Down`'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getSelectDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSSelectPreview;
