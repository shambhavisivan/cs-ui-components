import React from 'react';
import { CSButtonSize, CSLookup, CSTooltipPosition, CSIconOrigin } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSLookupPreviewState {
	focused: boolean;
}

const columns = [
	{ key: 'Account', header: 'Account' },
	{ key: 'Industry', header: 'Industry' }
];

const options = [
	{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
	{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
	{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } },
	{ key: 4, data: { Id: 4, Account: 'Elisa', Industry: 'Telecommunications' } },
	{ key: 5, data: { Id: 5, Account: 'Facebook', Industry: 'Social media' } },
	{ key: 6, data: { Id: 6, Account: 'Google', Industry: 'Technology' } },
	{ key: 7, data: { Id: 7, Account: 'Spotify', Industry: 'Streaming and media' } },
	{ key: 8, data: { Id: 8, Account: 'British Gas', Industry: 'Energy' } },
	{ key: 9, data: { Id: 9, Account: 'Columbia Pictures', Industry: 'Film' } },
	{ key: 10, data: { Id: 10, Account: 'Rimac', Industry: 'Car manufacturing' } },
	{ key: 11, data: { Id: 11, Account: 'News Corp', Industry: 'Mass media' } },
	{ key: 12, data: { Id: 12, Account: 'Telstra', Industry: 'Telecommunications' } },
	{ key: 13, data: { Id: 13, Account: 'Netflix', Industry: 'Production' } },
	{ key: 14, data: { Id: 14, Account: 'Instagram', Industry: 'Social media' } },
	{ key: 15, data: { Id: 15, Account: 'Vodafone', Industry: 'Telecommunications' } },
	{ key: 16, data: { Id: 16, Account: 'Apple', Industry: 'Software' } },
	{ key: 17, data: { Id: 17, Account: 'Amazon', Industry: 'E-commerce' } },
	{ key: 18, data: { Id: 18, Account: 'Ikea', Industry: 'Furniture retail' } },
	{ key: 19, data: { Id: 19, Account: 'Microsoft', Industry: 'Software' } },
	{ key: 20, data: { Id: 20, Account: 'Visa', Industry: 'Finance' } },
	{ key: 21, data: { Id: 21, Account: 'IBM', Industry: 'Software' } },
	{ key: 22, data: { Id: 22, Account: 'eBay', Industry: 'E-commerce' } },
	{ key: 23, data: { Id: 23, Account: 'Oracle', Industry: 'Software' } },
	{ key: 24, data: { Id: 24, Account: 'Tesla', Industry: 'Car manufacturing' } },
	{ key: 25, data: { Id: 25, Account: 'YouTube', Industry: 'Streaming and media' } },
	{ key: 26, data: { Id: 26, Account: 'O2', Industry: 'Telecommunications' } },
	{ key: 27, data: { Id: 27, Account: 'Warner Bros. Pictures', Industry: 'Film' } }
];

class CSLookupPreview extends React.Component<{}, CSLookupPreviewState> {
	state = {
		focused: false,
		icons: [
			{ iconName: 'cart' },
			{
				iconName: 'tag',
				iconOrigin: 'cs' as CSIconOrigin,
				getTooltip: {
					content: ['icons tooltip'],
					delay: 300,
					maxWidth: '20rem',
					padding: '0.5rem',
					position: 'bottom-left' as CSTooltipPosition,
					stickyOnClick: true
				}
			}
		],
		actions: [
			{
				action: () => alert('Delete option called'),
				labelHidden: true,
				icon: { iconName: 'delete' },
				size: 'small' as CSButtonSize,
				name: 'Delete'
			},
			{
				action: () => alert('Add option called'),
				icon: { iconName: 'add' },
				labelHidden: true,
				size: 'small' as CSButtonSize,
				name: 'Add',
				getTooltip: {
					content: ['actions tooltip'],
					delay: 300,
					padding: '0.5rem',
					position: 'bottom-left' as CSTooltipPosition,
					stickyOnClick: true
				}
			}
		]
	};

	handleBlur = () => alert('Lookup has lost focus.');
	handleFocus = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Lookup is focused.');
			}
			return { focused: !prevState.focused };
		});
	}
	handleClose = () => alert('Lookup has closed.');
	handleSearch = (event: any) => alert(event.target.value);
	handleSelectChange = (item: any) => alert(JSON.stringify(item));

	fetchData = async (searchTerm: any, pageSize: any, pageNo: any) => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		if (searchTerm === '') {
			return {
				records: options.slice(pageNo * pageSize, (pageNo + 1) * pageSize),
				moreRecords: (pageNo + 1) * pageSize < options.length
			};
		} else {
			const filteredData = options
				.filter(record => record.data.Account.toString().toLowerCase().includes(searchTerm.toLowerCase()))
				.slice(pageNo * pageSize, (pageNo + 1) * pageSize);
			return {
				records: filteredData,
				moreRecords: (pageNo + 1) * pageSize < filteredData.length
			};
		}
	}

	getDoc = () => ({
		name: 'Lookup',
		usage: 'Lookup is an autocomplete combobox that will search against a database object.',
		accessible: 'yes',
		components: [
			{
				name: 'CSLookup',
				examples: [
					{
						propName: 'columns',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={[
										{ key: 'Account', header: 'Account' },
										{ key: 'Industry', header: 'Industry' }
									]}
									options={options}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={[
										{ key: 'Account', header: 'Account' },
										{ key: 'Industry', header: 'Industry' }
									]}
									options={options}
									mode="client"
								/>`
							}
						]
					}, {
						propName: 'fieldToBeDisplayed',
						variations: [
							{
								primaryVariants: 'fieldToBeDisplayed="Id"',
								component: <CSLookup
									fieldToBeDisplayed="Id"
									label="Id"
									options={options}
									columns={columns}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Id"
									label="Id"
									options={options}
									columns={columns}
									mode="client"
								/>`
							}
						]
					}, {
						propName: 'label',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
								/>`
							}
						]
					}, {
						propName: 'actions',
						variations: [
							{
								primaryVariants: [
									'actions={this.state.actions}'
								],
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									multiselect
									actions={this.state.actions}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									actions={[
										{
											action: () => alert('Delete option called'),
											labelHidden: true,
											icon: { iconName: 'delete' },
											size: 'small' as CSButtonSize,
											name: 'Delete'
										},
										{
											action: () => alert('Add option called'),
											icon: { iconName: 'add' },
											labelHidden: true,
											size: 'small' as CSButtonSize,
											name: 'Add',
											getTooltip: {
												content: ['actions tooltip'],
												delay: 300,
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true
											}
										}
									]}
								/>`
							}
						]
					}, {
						propName: 'align',
						variations: [
							{
								primaryVariants: 'align="left"',
								quickLink: 'left',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
								/>`
							}, {
								primaryVariants: 'align="right"',
								quickLink: 'right',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									align="right"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									align="right"
								/>`
							}
						]
					}, {
						propName: 'autoFocus',
						variations: [
							{
								primaryVariants: 'autoFocus={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									autoFocus
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									autoFocus
								/>`
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									borderRadius="0"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									borderRadius="0"
								/>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									disabled
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									disabled
								/>`
							}
						]
					}, {
						propName: 'dropdownHeight',
						variations: [
							{
								primaryVariants: 'dropdownHeight="5rem"',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									dropdownHeight="5rem"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									dropdownHeight="5rem"
								/>`
							}
						]
					}, {
						propName: 'dropdownWidth',
						variations: [
							{
								primaryVariants: 'dropdownWidth="10rem"',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									dropdownWidth="10rem"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									dropdownWidth="10rem"
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
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									error
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									error
								/>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									error
									errorMessage="Error message."
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									error
									errorMessage="Error message."
								/>`
							}
						]
					}, {
						propName: 'errorTooltip',
						variations: [
							{
								primaryVariants: 'errorTooltip={true}',
								secondaryVariants: 'error={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									error
									errorMessage="Error message."
									errorTooltip
								/>`
							}
						]
					}, {
						propName: 'gridCustomPopup',
						description: '.ag-custom-component-popup class added to lookup wrapper to support AG Grid custom components, this prevents lookup from closing on mouse click when inside lookup component.',
						variations: [
							{
								primaryVariants: 'gridCustomPopup={true}',
								quickLink: 'true',
								component: <CSLookup
									mode="client"
									label="Account"
									options={options}
									columns={columns}
									fieldToBeDisplayed="Account"
									gridCustomPopup
								/>,
								code: `<CSLookup
									mode="client"
									label="Account"
									options={options}
									columns={columns}
									fieldToBeDisplayed="Account"
									gridCustomPopup
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									helpText="Help text example"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									helpText="Help text example"
								/>`
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									hidden
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									hidden
								/>`
							}
						]
					}, {
						propName: 'icons',
						variations: [
							{
								primaryVariants: [
									'icons={this.state.icons}'
								],
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									icons={this.state.icons}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									icons={[
										{ iconName: 'cart'},
										{
											iconName: 'tag',
											iconOrigin: 'cs' as CSIconOrigin,
											getTooltip: {
												content: ['icons tooltip'],
												delay: 300,
												maxWidth: '20rem',
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true
											}
										}
									]}
								/>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									labelHidden
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									labelHidden
								/>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									labelTitle
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									labelTitle
								/>`
							}
						]
					}, {
						propName: 'multiselect',
						variations: [
							{
								primaryVariants: 'multiselect={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									multiselect
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									multiselect
								/>`
							}
						]
					}, {
						propName: 'onBlur',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									onBlur={this.handleBlur}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									onBlur={this.handleBlur}
								/>`
							}
						]
					}, {
						propName: 'onFocus',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									onFocus={this.handleFocus}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									onFocus={this.handleFocus}
								/>`
							}
						]
					}, {
						propName: 'onDropdownClose',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									onDropdownClose={this.handleClose}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									onDropdownClose={this.handleClose}
								/>`
							}
						]
					}, {
						propName: 'onSearch',
						variations: [
							{
								secondaryVariants: ['searchBy={[\'Id\', \'Account\']}'],
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									searchBy={['Id', 'Account']}
									onSearch={this.handleSearch}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									searchBy={['Id', 'Account']}
									onSearch={this.handleSearch}
								/>`
							}
						]
					}, {
						propName: 'onSelectChange',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									onSelectChange={this.handleSelectChange}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									onSelectChange={this.handleSelectChange}
								/>`
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
									placeholder="Search..."
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
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
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
								/>`
							}, {
								primaryVariants: 'position="top"',
								quickLink: 'top',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									position="top"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									position="top"
								/>`
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									value={{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }}
									readOnly
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									value={{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }}
									readOnly
								/>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									required
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									required
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									title="This is a title"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									title="This is a title"
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
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									mode="client"
									options={options}
									columns={columns}
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									mode="client"
									options={options}
									columns={columns}
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
							}
						]
					}, {
						propName: 'value',
						alert: {
							variant: 'info',
							text: 'When multiselect is on, the value should be an array of records. Otherwise, it should be a single record.'
						},
						variations: [
							{
								primaryVariants: 'value={{...}}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
									value={{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
									value={{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }}
								/>`
							}, {
								primaryVariants: 'value={[...]}',
								secondaryVariants: 'multiselect={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
									multiselect
									value={[
										{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
										{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
										{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } }
									]}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
									multiselect
									value={[
										{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' },
										{ Id: 2, Account: 'Global Media', Industry: 'Industry' },
										{ Id: 3, Account: 'Salesforce', Industry: 'Software' }
									]}
								/>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-clas"'
								],
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									id="custom-id"
									className="custom-class"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'columns',
						required: true,
						types: 'Array<CSLookupTableColumnType>',
						description: 'Set which columns should be shown in the dropdown.'
					}, {
						name: 'fieldToBeDisplayed',
						required: true,
						types: 'string',
						description: 'Set which field should be displayed when an option is selected.'
					}, {
						name: 'label',
						required: true,
						types: 'string',
						description: 'Set the lookup label.'
					}, {
						name: 'mode',
						required: true,
						types: [`'client'`, `'server'`],
						description: 'Set whether the component should run in client-side or server-side mode. The client-side mode loads records by reading the options prop and filtering takes place within the component, while the server-side mode enables asynchronous fetching of records with the fetchOptions prop, which also enables infinite scroll and setting the minimum search term length.'
					}, {
						name: 'actions',
						customTypes: {
							name: 'CSLookupActionsProps',
							types: 'Array<CSLookupActionProps>'
						},
						description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
					}, {
						name: 'align',
						customTypes: {
							name: 'CSLookupDropdownAlign',
							types: [`'left'`, `'right'`]
						},
						default: `'left'`,
						description: 'Horizontally align the lookup dropdown in the case of an overflow.'
					}, {
						name: 'autoFocus',
						types: 'boolean',
						default: 'false',
						description: 'Set whether the lookup should be autofocused.'
					}, {
						name: 'borderRadius',
						types: 'string',
						default: `'0.25rem'`,
						description: 'Set a border radius style.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the lookup.'
					}, {
						name: 'dropdownHeight',
						types: 'string',
						description: 'Set height of lookup dropdown.'
					}, {
						name: 'dropdownWidth',
						types: 'string',
						description: 'Set width of lookup dropdown.'
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
						description: 'Set the error message or messages for the lookup.'
					}, {
						name: 'errorTooltip',
						types: 'boolean',
						description: 'Show an error tooltip for the lookup.'
					}, {
						name: 'gridCustomPopup',
						types: 'boolean',
						default: 'false',
						description: 'Provides React Portal support for AG Grid custom popups'
					}, {
						name: 'helpText',
						types: 'string',
						description: 'Set the text to be displayed in the tooltip.'
					}, {
						name: 'hidden',
						types: 'boolean',
						default: 'false',
						description: 'Control the hidden attribute.'
					}, {
						name: 'icons',
						customTypes: {
							name: 'CSLookupIconProps',
							types: 'Array<CSLookupIconProps>'
						},
						description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the lookup label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'multiselect',
						types: 'boolean',
						default: 'false',
						description: 'Allow selection of multiple options.'
					}, {
						name: 'onBlur',
						types: '(event, value) => any',
						description: 'Handler method for the blur event.'
					}, {
						name: 'onFocus',
						types: '(event) => any',
						description: 'Handler method for the focus event.'
					}, {
						name: 'onLookupDropdownClose',
						types: '() => void',
						description: 'Handler method for when the lookup is closed.'
					}, {
						name: 'onSearch',
						types: '(event) => any',
						description: 'Handler method for when the search term changes.'
					}, {
						name: 'onSelectChange',
						types: '(event) => any',
						description: `Handler method for when the selection is changed. By returning false from handler method, selected item won't be updated. Undefined return value will evaluate as true.`
					}, {
						name: 'placeholder',
						types: 'string',
						description: 'Set a lookup placeholder.'
					}, {
						name: 'position',
						customTypes: {
							name: 'CSLookupDropdownPosition',
							types: [`'bottom'`, `'top'`]
						},
						default: `'bottom'`,
						description: 'Determine the vertical position of the lookup dropdown content.'
					}, {
						name: 'readOnly',
						types: 'boolean',
						default: 'false',
						description: 'Control whether to apply the readonly attribute.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Make the lookup required.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the lookup title.'
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
						description: 'Set the tooltip position for the lookup.'
					}, {
						name: 'value',
						types: [
							'CSDataTableRowInterface',
							'Array<CSDataTableRowInterface>',
							'null'
						],
						description: 'Set which values should be displayed in the lookup.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the lookup.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the wrapper div.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the text input.'
					}
				]
			}, {
				name: 'Client-Side CSLookup',
				examples: [
					{
						propName: 'options',
						variations: [
							{
								secondaryVariants: 'mode="client"',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									options={options}
									mode="client"
								/>`
							}
						]
					}, {
						propName: 'loading',
						variations: [
							{
								primaryVariants: 'loading={true}',
								secondaryVariants: 'mode="client"',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									loading
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									loading
								/>`
							}
						]
					}, {
						propName: 'searchBy',
						variations: [
							{
								primaryVariants: `searchBy={['Id', 'Account']}`,
								secondaryVariants: 'mode="client"',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									searchBy={['Id', 'Account']}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									options={options}
									columns={columns}
									mode="client"
									searchBy={['Id', 'Account']}
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'options',
						required: true,
						types: 'Array<CSDataTableRowInterface>',
						description: 'Set the data that should be shown in the dropdown.'
					}, {
						name: 'loading',
						types: 'boolean',
						default: 'false',
						description: 'Render a spinner in the dropdown instead of options.'
					}, {
						name: 'searchBy',
						types: 'Array<string>',
						description: 'Set the keys by which the options should be filtered. By default, the options are filtered by the key provided in the columns prop.'
					}
				]
			}, {
				name: 'Server-Side CSLookup',
				examples: [
					{
						propName: 'fetchOptions',
						variations: [
							{
								secondaryVariants: 'mode="server"',
								component: <CSLookup
									fetchOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									mode="server"
									pageSize={27}
								/>,
								code: `<CSLookup
									fetchOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									mode="server"
									pageSize={27}
								/>`
							}
						]
					}, {
						propName: 'pageSize',
						variations: [
							{
								primaryVariants: 'pageSize={10}',
								secondaryVariants: ['mode="server"', 'infiniteScroll={true}'],
								component: <CSLookup
									fetchOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									mode="server"
									infiniteScroll
									pageSize={10}
								/>,
								code: `<CSLookup
									fetchOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									mode="server"
									infiniteScroll
									pageSize={10}
								/>`
							}
						]
					}, {
						propName: 'infiniteScroll',
						variations: [
							{
								primaryVariants: 'infiniteScroll={true}',
								secondaryVariants: 'mode="server"',
								component: <CSLookup
									fetchOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									mode="server"
									pageSize={8}
									infiniteScroll
								/>,
								code: `<CSLookup
									fetchOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									mode="server"
									pageSize={8}
									infiniteScroll
								/>`
							}
						]
					}, {
						propName: 'minTermLength',
						variations: [
							{
								primaryVariants: 'minTermLength={3}',
								secondaryVariants: 'mode="server"',
								component: <CSLookup
									fetchOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									mode="server"
									pageSize={24}
									minTermLength={3}
								/>,
								code: `<CSLookup
									fetchOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									columns={columns}
									mode="server"
									pageSize={24}
									minTermLength={3}
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'fetchOptions',
						required: true,
						types: '(searchTerm, pageSize, pageNo) => Promise<CSLookupFetchResult>',
						description: 'Set a function which will be called on every search or focus change if the minTermLength prop is 0. The function takes the search term, the page size (which determines the number of returned records) and the page number which will automatically increase on every infiniteScroll event. It returns an object with a records property of the same type as options and a boolean moreRecords property which indicates whether further records can be fetched.'
					}, {
						name: 'pageSize',
						required: true,
						types: 'number',
						description: 'Set the number of records that should be returned after each lookup records fetch.'
					}, {
						name: 'infiniteScroll',
						types: 'boolean',
						default: 'false',
						description: 'Enable fetching additional records when the dropdown scroll hits the bottom.'
					}, {
						name: 'minTermLength',
						types: 'number',
						default: '0',
						description: 'Set the minimum number of characters that need to be entered before fetchOptions is fired.'
					}
				]
			}
		],
		accessibility: {
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
			requirements: {
				structure: [
					'`<input type="text">`',
					'`<CSDataTable>` - dropdown',
					'Clear button is `<CSButton>`'
				],
				attributes: [
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
					'`aria-expanded` - true when select is opened',
					'`aria-invalid` - true when there is an error',
					'`aria-required` - true when selecting an option is required',
					'`aria-multiselectable` - announces if multi selection is possible'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'`<input>` OOTB focusable',
					'`<CSButton>` - focusable and supports clicks with `Enter` and `Space`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSLookupPreview;
