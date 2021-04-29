import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSCustomSelect, CSAlert, CSOption } from '@cloudsense/cs-ui-components';

class CSCustomSelectPreview extends React.Component {
	handleSelectChange = (options: any) => {
		if (typeof options === 'object') {
			alert(`Selected item: ${JSON.stringify(options)}`);
		} else {
			alert(`Selected item: ${options}`);
		}
	}

	handleSearch = (e: any) => alert(e.target.value);

	getCustomSelectDoc = () => ({
		name: 'Custom Select',
		usage: 'Select element presents a menu of options.',
		accessible: 'no',
		previews: [
			{
				name: 'Custom Select',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for custom select. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSCustomSelect label="Choose letter">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSCustomSelect label="Choose letter" borderRadius="0">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" borderRadius="0">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSCustomSelect label="Choose letter" disabled>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" disabled>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'error',
						alert: {
							variant: 'info',
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices.'
						},
						variations: [
							{
								primaryVariants: 'error={true}',
								component: <CSCustomSelect label="Choose letter" error>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" error>
								<CSOption itemKey="1" value="A" />
								<CSOption itemKey="2" value="B" />
								<CSOption itemKey="3" value="C" />
								<CSOption itemKey="4" value="D" />
							</CSCustomSelect>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSCustomSelect
									label="Choose letter"
									error
									errorMessage="Term not found"
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect
									label="Choose letter"
									error
									errorMessage="Term not found"
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'exportValue',
						alert: {
							variant: 'info',
							text: 'By default Custom Select exports objects which contain itemKey and value. If this props is defined, Custom Select will export values of the key that match this prop.'
						},
						variations: [
							{
								primaryVariants: 'exportValue="default"',
								quickLink: 'default',
								component: <CSCustomSelect
									label="Choose letter"
									onSelectChange={this.handleSelectChange}
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect
									label="Choose letter"
									onSelectChange={this.handleSelectChange}
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}, {
								primaryVariants: 'exportValue="itemKey"',
								quickLink: 'itemKey',
								component: <CSCustomSelect
									label="Choose letter"
									onSelectChange={this.handleSelectChange}
									exportValue="itemKey"
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect
									label="Choose letter"
									onSelectChange={this.handleSelectChange}
									exportValue="itemKey"
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}, {
								primaryVariants: 'exportValue="value"',
								quickLink: 'value',
								component: <CSCustomSelect
									label="Choose letter"
									onSelectChange={this.handleSelectChange}
									exportValue="value"
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect
									label="Choose letter"
									onSelectChange={this.handleSelectChange}
									exportValue="value"
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSCustomSelect label="Choose letter" helpText="Help text example">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" helpText="Help text example">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSCustomSelect label="Choose letter" hidden>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" hidden>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSCustomSelect label="Choose letter" labelHidden>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" labelHidden>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSCustomSelect label="Choose letter" labelTitle>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" labelTitle>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'multiselect',
						variations: [
							{
								primaryVariants: 'multiselect={true}',
								component: <CSCustomSelect label="Choose letter" multiselect>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" multiselect>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'onSearch',
						variations: [
							{
								component: <CSCustomSelect label="Choose letter" onSearch={this.handleSearch}>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" onSearch={this.handleSearch}>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'onSelectChange',
						variations: [
							{
								component: <CSCustomSelect
									label="Choose letter"
									onSelectChange={this.handleSelectChange}
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect
									label="Choose letter"
									onSelectChange={this.handleSelectChange}
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSCustomSelect label="Choose letter" required>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" required>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSCustomSelect label="Choose letter" title="This is a title">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter" title="This is a title">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
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
								component: <CSCustomSelect
									label="Choose letter"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect
									label="Choose letter"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'value',
						alert: {
							variant: 'info',
							text: 'To set multiselect list default options, array of keys must be passed to the value prop, otherwise key can be passed to set one value as default.'
						},
						variations: [
							{
								component: <CSCustomSelect
									label="Choose letter"
									value="1"
									onSelectChange={this.handleSelectChange}
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect
									label="Choose letter"
									value="1"
									onSelectChange={this.handleSelectChange}
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}, {
								secondaryVariants: 'multiselect={true}',
								component: <CSCustomSelect
									label="Choose letter"
									value={['1', '2', '3']}
									multiselect
									onSelectChange={this.handleSelectChange}
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect
									label="Choose letter"
									value={['1', '2', '3']}
									multiselect
									onSelectChange={this.handleSelectChange}
								>
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
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
								component: <CSCustomSelect
									label="Choose letter"
									id="custom-select-id"
									className="custom-class"
								>
									<CSOption
										itemKey="1"
										value="A"
										id="custom-select-option-id"
										className="custom-select-option-class"
									/>
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect
									label="Choose letter"
									id="custom-select-id"
									className="custom-class"
								>
									<CSOption
										itemKey="1"
										value="A"
										id="custom-select-option-id"
										className="custom-select-option-class"
									/>
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}
				]
			}, {
				name: 'Custom Select Option',
				examples: [
					{
						propName: 'itemKey | value',
						variations: [
							{
								component: <CSCustomSelect label="Choose letter">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}
						]
					}, {
						propName: 'searchBy',
						alert: {
							variant: 'info',
							text: 'Option can be filtered by either itemKey or value or both. By default option will be filtered by both itemKey and value.'
						},
						variations: [
							{
								primaryVariants: 'searchBy="default"',
								quickLink: 'default',
								component: <CSCustomSelect label="Choose letter">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter">
									<CSOption itemKey="1" value="A" />
									<CSOption itemKey="2" value="B" />
									<CSOption itemKey="3" value="C" />
									<CSOption itemKey="4" value="D" />
								</CSCustomSelect>`
							}, {
								primaryVariants: 'searchBy="itemKey"',
								quickLink: 'itemKey',
								component: <CSCustomSelect label="Choose letter">
									<CSOption searchBy="itemKey" itemKey="1" value="A" />
									<CSOption searchBy="itemKey" itemKey="2" value="B" />
									<CSOption searchBy="itemKey" itemKey="3" value="C" />
									<CSOption searchBy="itemKey" itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter">
									<CSOption searchBy="itemKey" itemKey="1" value="A" />
									<CSOption searchBy="itemKey" itemKey="2" value="B" />
									<CSOption searchBy="itemKey" itemKey="3" value="C" />
									<CSOption searchBy="itemKey" itemKey="4" value="D" />
								</CSCustomSelect>`
							}, {
								primaryVariants: 'searchBy="value"',
								quickLink: 'value',
								component: <CSCustomSelect label="Choose letter">
									<CSOption searchBy="value" itemKey="1" value="A" />
									<CSOption searchBy="value" itemKey="2" value="B" />
									<CSOption searchBy="value" itemKey="3" value="C" />
									<CSOption searchBy="value" itemKey="4" value="D" />
								</CSCustomSelect>,
								code: `<CSCustomSelect label="Choose letter">
									<CSOption searchBy="value" itemKey="1" value="A" />
									<CSOption searchBy="value" itemKey="2" value="B" />
									<CSOption searchBy="value" itemKey="3" value="C" />
									<CSOption searchBy="value" itemKey="4" value="D" />
								</CSCustomSelect>`
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
				types: ['<CSOption />'],
				description: 'This component is designed to support CSOption as a child.'
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
				description: 'Set key of the value that will be exported when selection is changed. By default object containing itemKey and value will be exported.'
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
				description: 'Control whether to set the title attribute on the field label.'
			}, {
				name: 'multiselect',
				types: ['boolean'],
				default: 'false',
				description: 'Allow selection of multiple options.'
			}, {
				name: 'onSearch',
				types: ['(event) => any'],
				description: 'Handler method when serch term changes.'
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
				default: '\'top-right\'',
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
							'HTML `<input type="text">`'
						],
						properties: [
							'`aria-labelledby` - associate field with label',
							'`aria-expanded`'
						],
						styling: [
							'Focus state styles'
						],
						keyboardOperability: [
							'Enter opens dropdown',
							'Escape closes dropdown'
						]
					}
				]
			}
		]
	})

	getCSOptionDoc = () => ({
			name: 'Option',
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the li tag.'
				}, {
					name: 'searchBy',
					customTypes: [{
						name: 'CSOptionFilterByType',
						types: ['\'itemKey\'', '\'value\'']
					}],
					description: 'Set the attribute against which the options should be searched. The options are filtered by both itemKey and value by default.'
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
		})

	render() {
		const component = this.getCustomSelectDoc();
		const component2 = this.getCSOptionDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert
						variant="warning"
						text="This component is under construction and should not be used."
						styleFormat="scoped"
					/>
					<PreviewProperties {...component} />
					<PreviewTable components={[component, component2]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSCustomSelectPreview;
