import React from 'react';
import { CSCustomSelect } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

const options = [
	{ key: 0, label: 'Product' },
	{ key: 1, label: 'Services' },
	{ key: 2, label: 'Sales' },
	{ key: 3, label: 'Marketing' }
];

class CSCustomSelectPreview extends React.Component {
	state = {
		singleSelectKey: undefined,
		multiselectKeys: [],
		multiselectCompactKeys: []
	};

	handleSearch = (event: any) => alert(event.target.value);
	handleSelectChange = (option: any) => {
		if (typeof option === 'object') {
			alert(`Selected item: ${JSON.stringify(option)}`);
		} else {
			alert(`Selected item: ${option}`);
		}
	}

	getDoc = () => ({
		name: 'Custom Select',
		usage: 'Select element presents a menu of options.',
		alerts: {
			variant: 'warning',
			text: 'This component is under construction and should not be used.'
		},
		accessible: 'yes',
		components: [
			{
				name: 'CSCustomSelect',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for custom select. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSCustomSelect options={options} label="Select department" />,
								code: '<CSCustomSelect options={options} label="Select department" />'
							}
						]
					}, {
						propName: 'align',
						variations: [
							{
								primaryVariants: 'align="left"',
								quickLink: 'left',
								component: <CSCustomSelect options={options} label="Select department" />,
								code: '<CSCustomSelect options={options} label="Select department" />'
							}, {
								primaryVariants: 'align="right"',
								quickLink: 'right',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									align="right"
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									align="right"
								/>`
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									borderRadius="0"
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									borderRadius="0"
								/>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									disabled
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									disabled
								/>`
							}
						]
					}, {
						propName: 'dropdownActions',
						variations: [
							{
								component: <CSCustomSelect
									options={options}
									label="Select department"
									dropdownActions={[{
										label: 'Add department',
										iconName: 'add',
										onClick: () => alert('Department added.')
									}]}
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									dropdownActions={[{
										label: 'Add department',
										iconName: 'add',
										onClick: () => alert('Department added.')
									}]}
								/>`
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
								component: <CSCustomSelect
									options={options}
									label="Select department"
									error
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									error
								/>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									error
									errorMessage="Error message"
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									error
									errorMessage="Error message"
								/>`
							}
						]
					}, {
						propName: 'gridCustomPopup',
						variations: [
							{
								primaryVariants: 'gridCustomPopup={true}',
								component: <CSCustomSelect
									options={options}
									label="Choose letter"
									gridCustomPopup
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Choose letter"
									gridCustomPopup
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSCustomSelect
									options={options}
									label="Select department"
									helpText="Help text"
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									helpText="Help text"
								/>`
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									hidden
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									hidden
								/>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									labelHidden
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									labelHidden
								/>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									labelTitle
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									labelTitle
								/>`
							}
						]
					}, {
						propName: 'onSearch',
						variations: [
							{
								component: <CSCustomSelect
									options={options}
									label="Select department"
									onSearch={this.handleSearch}
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									onSearch={this.handleSearch}
								/>`
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSCustomSelect
									options={options}
									label="Select department"
									placeholder="Search..."
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									placeholder="Search..."
								/>`
							}
						]
					}, {
						propName: 'position',
						variations: [
							{
								primaryVariants: 'position="bottom"',
								quickLink: 'bottom',
								component: <CSCustomSelect options={options} label="Select department" />,
								code: '<CSCustomSelect options={options} label="Select department" />'
							}, {
								primaryVariants: 'position="top"',
								quickLink: 'top',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									position="top"
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									position="top"
								/>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									required
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									required
								/>`
							}
						]
					}, {
						propName: 'showCompactMultiselect',
						variations: [
							{
								primaryVariants: 'showCompactMultiselect={true}',
								secondaryVariants: 'multiselect={true}',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									multiselect
									selectedKeys={[1, 2]}
									showCompactMultiselect
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									multiselect
									selectedKeys={[1, 2]}
									showCompactMultiselect
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSCustomSelect
									options={options}
									label="Select department"
									title="Custom title"
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									title="Custom title"
								/>`
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
									options={options}
									label="Select department"
									helpText="Help text"
									tooltipPosition="top-left"
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									helpText="Help text"
									tooltipPosition="top-left"
								/>`
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
									options={options}
									label="Select department"
									id="custom-select-id"
									className="custom-br-mint"
								/>,
								code: `<CSCustomSelect
									options={options}
									label="Select department"
									id="custom-select-id"
									className="custom-br-mint"
								/>`
							}
						]
					}, {
						propName: 'selection',
						variations: [
							{
								primaryVariants: 'single select',
								quickLink: 'single select',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									selectedKeys={this.state.singleSelectKey}
									onClear={() => this.setState({ singleSelectKey: undefined })}
									onSelect={(option: any) => this.setState((prevState: any) => ({
										singleSelectKey: prevState.singleSelectKey === option.key ? undefined : option.key
									}))}
								/>,
								code: `<CSCustomSelect
									options={[
										{ key: 0, label: 'Product' },
										{ key: 1, label: 'Services' },
										{ key: 2, label: 'Sales' },
										{ key: 3, label: 'Marketing' }
									]}
									label="Select department"
									selectedKeys={this.state.singleSelectKey}
									onClear={() => this.setState({ singleSelectKey: undefined })}
									onSelect={(option: any) => this.setState((prevState: any) => ({
										singleSelectKey: prevState.singleSelectKey === option.key ? undefined : option.key
									}))}
								/>`
							}, {
								primaryVariants: 'multiselect',
								quickLink: 'multiselect',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									multiselect
									selectedKeys={this.state.multiselectKeys}
									onClear={() => this.setState({ multiselectKeys: [] })}
									onSelect={(option: any) => this.setState((prevState: any) => {
										const prevIndex = prevState.multiselectKeys.indexOf(option.key);
										const newSelectedKeys = prevState.multiselectKeys;
										if (prevIndex >= 0) {
											newSelectedKeys.splice(prevIndex, 1);
										} else {
											newSelectedKeys.push(option.key);
										}
										return { multiselectKeys: [...newSelectedKeys] };
									})}
									onDeselect={(option: any) => this.setState((prevState: any) => {
										const prevIndex = prevState.multiselectKeys.indexOf(option.key);
										const newSelectedKeys = prevState.multiselectKeys;
										if (prevIndex >= 0) {
											newSelectedKeys.splice(prevIndex, 1);
										}
										return { multiselectKeys: [...newSelectedKeys] };
									})}
								/>,
								code: `<CSCustomSelect
									options={[
										{ key: 0, label: 'Product' },
										{ key: 1, label: 'Services' },
										{ key: 2, label: 'Sales' },
										{ key: 3, label: 'Marketing' }
									]}
									label="Select department"
									multiselect
									selectedKeys={this.state.multiselectKeys}
									onClear={() => this.setState({ multiselectKeys: [] })}
									onSelect={(option: any) => this.setState((prevState: any) => {
										const prevIndex = prevState.multiselectKeys.indexOf(option.key);
										const newSelectedKeys = prevState.multiselectKeys;
										if (prevIndex >= 0) {
											newSelectedKeys.splice(prevIndex, 1);
										} else {
											newSelectedKeys.push(option.key);
										}
										return { multiselectKeys: [...newSelectedKeys] };
									})}
									onDeselect={(option: any) => this.setState((prevState: any) => {
										const prevIndex = prevState.multiselectKeys.indexOf(option.key);
										const newSelectedKeys = prevState.multiselectKeys;
										if (prevIndex >= 0) {
											newSelectedKeys.splice(prevIndex, 1);
										}
										return { multiselectKeys: [...newSelectedKeys] };
									})}
								/>`
							}, {
								primaryVariants: 'multiselect compact',
								quickLink: 'multiselect compact',
								component: <CSCustomSelect
									options={options}
									label="Select department"
									multiselect
									showCompactMultiselect
									selectedKeys={this.state.multiselectCompactKeys}
									onClear={() => this.setState({ multiselectCompactKeys: [] })}
									onSelect={(option: any) => this.setState((prevState: any) => {
										const prevIndex = prevState.multiselectCompactKeys.indexOf(option.key);
										const newSelectedKeys = prevState.multiselectCompactKeys;
										if (prevIndex >= 0) {
											newSelectedKeys.splice(prevIndex, 1);
										} else {
											newSelectedKeys.push(option.key);
										}
										return { multiselectCompactKeys: [...newSelectedKeys] };
									})}
									onDeselect={(option: any) => this.setState((prevState: any) => {
										const prevIndex = prevState.multiselectCompactKeys.indexOf(option.key);
										const newSelectedKeys = prevState.multiselectCompactKeys;
										if (prevIndex >= 0) {
											newSelectedKeys.splice(prevIndex, 1);
										}
										return { multiselectCompactKeys: [...newSelectedKeys] };
									})}
								/>,
								code: `<CSCustomSelect
									options={[
										{ key: 0, label: 'Product' },
										{ key: 1, label: 'Services' },
										{ key: 2, label: 'Sales' },
										{ key: 3, label: 'Marketing' }
									]}
									label="Select department"
									multiselect
									showCompactMultiselect
									selectedKeys={this.state.multiselectCompactKeys}
									onClear={() => this.setState({ multiselectCompactKeys: [] })}
									onSelect={(option: any) => this.setState((prevState: any) => {
										const prevIndex = prevState.multiselectCompactKeys.indexOf(option.key);
										const newSelectedKeys = prevState.multiselectCompactKeys;
										if (prevIndex >= 0) {
											newSelectedKeys.splice(prevIndex, 1);
										} else {
											newSelectedKeys.push(option.key);
										}
										return { multiselectCompactKeys: [...newSelectedKeys] };
									})}
									onDeselect={(option: any) => this.setState((prevState: any) => {
										const prevIndex = prevState.multiselectCompactKeys.indexOf(option.key);
										const newSelectedKeys = prevState.multiselectCompactKeys;
										if (prevIndex >= 0) {
											newSelectedKeys.splice(prevIndex, 1);
										}
										return { multiselectCompactKeys: [...newSelectedKeys] };
									})}
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'options',
						required: true,
						types: 'Array<CSCustomSelectOptionInterface>',
						description: 'Array of objects with key and label attributes that define the available select options.'
					}, {
						name: 'label',
						required: true,
						types: 'string',
						description: 'Set the custom select label.'
					}, {
						name: 'align',
						customTypes: [{
							name: 'CSCustomSelectDropdownAlign',
							types: [`'left'`, `'right'`]
						}],
						default: `'left'`,
						description: 'Horizontally align the custom select dropdown in the case of an overflow.'
					}, {
						name: 'borderRadius',
						types: 'string',
						default: `'0.25rem'`,
						description: 'Set a border radius style.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the custom select.'
					}, {
						name: 'dropdownActions',
						types: 'Array<CSButtonProps>',
						description: 'Add custom action items to the dropdown.'
					}, {
						name: 'error',
						types: 'boolean',
						description: 'Toggle the error state.'
					}, {
						name: 'errorMessage',
						customTypes: {
							name: 'CSFieldErrorMsgType',
							types: ['string', 'Array<string>']
						},
						description: 'Set the error message or messages for the custom select.'
					}, {
						name: 'gridCustomPopup',
						types: 'boolean',
						default: 'false',
						description: 'Provides React Portal support for AG Grid custom popups.'
					}, {
						name: 'helpText',
						types: 'string',
						description: 'Set the text to be displayed for the tooltip.'
					}, {
						name: 'hidden',
						types: 'boolean',
						default: 'false',
						description: 'Control the hidden attribute.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the custom select label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute on the field label.'
					}, {
						name: 'multiselect',
						types: 'boolean',
						default: 'false',
						description: 'Add support for selecting multiple items.'
					}, {
						name: 'onClear',
						types: '() => void',
						description: 'Handler method for clearing the selection.'
					}, {
						name: 'onDeselect',
						types: '(option) => void',
						description: 'Handler method for deselecting an option. Should only be used with multiselect.'
					}, {
						name: 'onSearch',
						types: '(event) => void',
						description: 'Handler method when search term changes.'
					}, {
						name: 'onSelect',
						types: '(option) => void',
						description: 'Handler method for when the selection is changed.'
					}, {
						name: 'placeholder',
						types: 'string',
						description: 'Set a custom select input placeholder.'
					}, {
						name: 'position',
						customTypes: [{
							name: 'CSCustomSelectDropdownPosition',
							types: [`'bottom'`, `'top'`]
						}],
						default: `'bottom'`,
						description: 'Determine the vertical position of the custom select dropdown content.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Make the custom select required.'
					}, {
						name: 'searchBy',
						default: `'label'`,
						customTypes: [{
							name: 'CSCustomSelectSearchByType',
							types: [`'label'`, `'all'`]
						}]
					}, {
						name: 'selectedKeys',
						types: ['React.ReactText', 'Array<React.ReactText>'],
						description: 'A single key or an array of keys corresponding to selected options.'
					}, {
						name: 'showCompactMultiselect',
						types: 'boolean',
						default: 'false',
						description: 'Hides multiselect items from input wrapper.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the custom select title.'
					}, {
						name: 'tooltipPosition',
						customTypes: {
							name: 'CSTooltipPosition',
							types: [
								`'top-right'`,
								`'top-center'`,
								`'top-left'`,
								`'bottom-right'`,
								`'bottom-center'`,
								`'bottom-left'`,
								`'right-top'`,
								`'right-center'`,
								`'right-bottom'`,
								`'left-top'`,
								`'left-center'`,
								`'left-bottom'`
							]
						},
						default: `'top-right'`,
						description: 'Set the tooltip position for the custom select.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the custom select.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the custom select.'
					}, {
						name: 'children',
						types: '<CSOption />',
						description: 'This component is designed to support CSOption as a child.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the custom select input.'
					}
				]
			}
		],
		accessibility: {
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
			requirements: {
				structure: [
					'HTML `<input type="text">`'
				],
				attributes: [
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
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSCustomSelectPreview;
