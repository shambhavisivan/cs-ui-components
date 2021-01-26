import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSCustomSelect, CSAlert, CSOption } from '@cloudsense/cs-ui-components';

class CSCustomSelectPreview extends React.Component {

	itemsArray = [
		{ itemKey: '1', value: 'A' },
		{ itemKey: '2', value: 'B' },
		{ itemKey: '3', value: 'C' },
		{ itemKey: '4', value: 'D' }
	];

	optionItems = this.itemsArray.map(item => (
		<CSOption
			key={item.itemKey}
			itemKey={item.itemKey}
			value={item.value}
		/>
	));

	optionItemsFilterByKey = this.itemsArray.map(item => (
		<CSOption
			key={item.itemKey}
			itemKey={item.itemKey}
			value={item.value}
			filterBy="itemKey"
		/>
	));

	optionItemsFilterByValue = this.itemsArray.map(item => (
		<CSOption
			key={item.itemKey}
			itemKey={item.itemKey}
			value={item.value}
			filterBy="value"
		/>
	));

	optionItemsWithClassName = this.itemsArray.map(item => (
		<CSOption
			key={item.itemKey}
			itemKey={item.itemKey}
			value={item.value}
			className="custom-class"
		/>
	));

	optionItemsWithID = this.itemsArray.map(item => (
		<CSOption
			key={item.itemKey}
			itemKey={item.itemKey}
			value={item.value}
			id={item.itemKey}
		/>
	));

	handleSelectChange = (options: any) => {
		if (typeof options === 'object') {
			alert(`Selected item: ${JSON.stringify(options)}`);
		} else {
			alert(`Selected item: ${options}`);
		}
	}

	handleChange = () => alert('Value has changed.');

	getDoc() {
		const json = {
			name: 'Custom Select',
			usage: 'Select element presents a menu of options.',
			accessible: 'no',
			examples: [
				{
					propName: 'value',
					alert: {
						variant: 'info',
						text: 'To set multiselect list default options, array of keys must be passed to the value prop, otherwise key can be passed to set one value as default!'
					},
					customText: '',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" value="1" onSelectChange={this.handleSelectChange}>
									{this.optionItems}
								</CSCustomSelect>
						},
						{
							variationText: ['multiselect="true"'],
							component:
								<CSCustomSelect
									label="Choose letter"
									value={['1', '2', '3']}
									multiselect
									onSelectChange={this.handleSelectChange}
								>
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" id="letter">
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter">
									{this.optionItems}
								</CSCustomSelect>
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
								<CSCustomSelect label="Choose letter" labelHidden >
									{this.optionItems}
								</CSCustomSelect>
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
								<CSCustomSelect label="Choose letter" labelTitle>
									{this.optionItems}
								</CSCustomSelect>
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
								<CSCustomSelect label="Choose letter" borderType="square">
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSCustomSelect
									label="Choose letter"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								>
									{this.optionItems}
								</CSCustomSelect>
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
								<CSCustomSelect
									label="Choose letter"
									helpText="Help text example"
									tooltipPosition="top-right"
								>
									{this.optionItems}
								</CSCustomSelect>
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSCustomSelect
									label="Choose letter"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									{this.optionItems}
								</CSCustomSelect>
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSCustomSelect
									label="Choose letter"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								>
									{this.optionItems}
								</CSCustomSelect>
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSCustomSelect
									label="Choose letter"
									helpText="Help text example"
									tooltipPosition="bottom-left"
								>
									{this.optionItems}
								</CSCustomSelect>
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
								<CSCustomSelect label="Choose letter" disabled>
									{this.optionItems}
								</CSCustomSelect>
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
								<CSCustomSelect label="Choose letter" hidden>
									{this.optionItems}
								</CSCustomSelect>
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
								<CSCustomSelect label="Choose letter" required>
									{this.optionItems}
								</CSCustomSelect>
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
								<CSCustomSelect label="Choose letter" error>
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSCustomSelect label="Choose letter" error errorMessage="Term not found">
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" title="This is a title">
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" onChange={this.handleChange}>
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'multiselect',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" multiselect>
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'onSelectChange',
					variations: [
						{
							component:
								<CSCustomSelect
									label="Choose letter"
									multiselect
									onSelectChange={this.handleSelectChange}
								>
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'exportValue',
					alert: {
						variant: 'info',
						text: 'By default Custom Select exports objects which contain itemKey and value. If this props is defined, Custom Select will export values of the key that match this prop!'
					},
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default',
							variationText: ['multiselect="true"'],
							component:
								<CSCustomSelect
									label="Choose letter"
									multiselect
									onSelectChange={this.handleSelectChange}
								>
									{this.optionItems}
								</CSCustomSelect>
						},
						{
							variationName: ['itemKey'],
							quickLink: 'itemKey',
							variationText: ['multiselect="true"'],
							component:
								<CSCustomSelect
									label="Choose letter"
									multiselect
									onSelectChange={this.handleSelectChange}
									exportValue="itemKey"
								>
									{this.optionItems}
								</CSCustomSelect>
						},
						{
							variationName: ['value'],
							quickLink: 'value',
							variationText: ['multiselect="true"'],
							component:
								<CSCustomSelect
									label="Choose letter"
									multiselect
									onSelectChange={this.handleSelectChange}
									exportValue="value"
								>
									{this.optionItems}
								</CSCustomSelect>
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
								<CSCustomSelect label="Choose letter" className="custom-class">
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'CSOption - itemKey',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter">
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'CSOption - value',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter">
									{this.optionItems}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'CSOption - id',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter">
									{this.optionItemsWithID}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'CSOption - filterBy',
					alert: {
						variant: 'info',
						text: 'Option can be filtered by either itemKey or value or both. By default option will be filtered by both itemKey and value!'
					},
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default',
							component:
								<CSCustomSelect label="Choose letter">
									{this.optionItems}
								</CSCustomSelect>
						},
						{
							variationName: ['itemKey'],
							quickLink: 'itemKey',
							component:
								<CSCustomSelect label="Choose letter">
									{this.optionItemsFilterByKey}
								</CSCustomSelect>
						},
						{
							variationName: ['value'],
							quickLink: 'value',
							component:
								<CSCustomSelect label="Choose letter">
									{this.optionItemsFilterByValue}
								</CSCustomSelect>
						}
					]
				},
				{
					propName: 'CSOption - className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSCustomSelect label="Choose letter">
									{this.optionItemsWithClassName}
								</CSCustomSelect>
						}
					]
				}
			],

			properties: [
				{
					name: 'borderType',
					customTypes: [{
						name: 'CSCustomSelectBorderType',
						types: ['\'round\'', '\'square\'']
					}],
					default: '\'round\'',
					description: 'Set the border type.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the custom select.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the custom select.'
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
					description: 'Set the error message or messages for the custom select.'
				}, {
					name: 'exportValue',
					customTypes: [{
						name: 'CSCustomSelectExportValueType',
						types: ['\'itemKey\'', '\'value\'']
					}],
					description: 'Set key of the value that will be exported when selection is changed. By default object containing itemKey and value will be exported!'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed for the tooltip.'
				}, {
					name: 'hidden',
					types: ['boolean'],
					default: 'false',
					description: 'Control the hidden attribute.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the custom select.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the custom select label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the custom select label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'multiselect',
					types: ['boolean'],
					default: 'false',
					description: 'Allow selection of multiple options.'
				}, {
					name: 'onChange',
					types: ['(event) => any'],
					description: 'Handler method for the change event.'
				}, {
					name: 'onSelectChange',
					types: ['(event) => void'],
					description: 'Handler method for when the selection is changed.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Make the custom select required.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the custom select title.'
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
					description: 'Set the tooltip position for the custom select.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the custom select input.'
				}, {
					name: 'value',
					types: ['string', 'Array<string>'],
					description: 'Set the default option/s of Custom Select. If multiselect is set, this prop needs to recieve array of valid itemKeys, otherwise one itemKey is passed to default Custom Select component.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.3.1',
						'1.4.1',
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
								'HTML <input type="text">'
							],
							properties: [
								'aria-labelledby - associate field with label',
								'aria-expanded'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'Enter opens dropdown.',
								'Escape closes dropdown'
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

	getCSOptionDoc() {
		const json = {
			name: 'Option',
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the li tag.'
				}, {
					name: 'filterBy',
					customTypes: [{
						name: 'CSOptionFilterByType',
						types: ['\'itemKey\'', '\'value\'']
					}],
					description: 'Set the key by whom the option will be filtered. By default option is filtered by itemKey and value.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the option.'
				}, {
					name: 'itemKey',
					types: ['string'],
					required: true,
					description: 'Set unique identifier of the option.'
				}, {
					name: 'value',
					types: ['string'],
					required: true,
					description: 'Set value to display of the option.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the li tag.'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getDoc();
		const component2 = this.getCSOptionDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert variant="warning" text="This component is under construction and should not be used." />
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

export default CSCustomSelectPreview;
