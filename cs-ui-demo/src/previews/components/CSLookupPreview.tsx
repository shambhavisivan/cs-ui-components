import React from 'react';
import { CSLookup } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSLookupPreviewState {
	focused: boolean;
}

const sampleLookup = {
	columns: [
		{ key: 'Account', label: 'Account' },
		{ key: 'Industry', label: 'Industry' }
	],
	data: [
		{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' },
		{ Id: 2, Account: 'Global Media', Industry: 'Industry' },
		{ Id: 3, Account: 'Salesforce', Industry: 'Software' },
		{ Id: 4, Account: 'Elisa', Industry: 'Telecommunications' },
		{ Id: 5, Account: 'Facebook', Industry: 'Social media' },
		{ Id: 6, Account: 'Google', Industry: 'Technology' },
		{ Id: 7, Account: 'Spotify', Industry: 'Streaming and media' },
		{ Id: 8, Account: 'British Gas', Industry: 'Energy' },
		{ Id: 9, Account: 'Columbia Pictures', Industry: 'Film' },
		{ Id: 10, Account: 'Rimac', Industry: 'Car manufacturing' },
		{ Id: 11, Account: 'News Corp', Industry: 'Mass media' },
		{ Id: 12, Account: 'Telstra', Industry: 'Telecommunications' },
		{ Id: 13, Account: 'Netflix', Industry: 'Production' },
		{ Id: 14, Account: 'Instagram', Industry: 'Social media' },
		{ Id: 15, Account: 'Vodafone', Industry: 'Telecommunications' },
		{ Id: 16, Account: 'Apple', Industry: 'Software' },
		{ Id: 17, Account: 'Amazon', Industry: 'E-commerce' },
		{ Id: 18, Account: 'Ikea', Industry: 'Furniture retail' },
		{ Id: 19, Account: 'Microsoft', Industry: 'Software' },
		{ Id: 20, Account: 'Visa', Industry: 'Finance' },
		{ Id: 21, Account: 'IBM', Industry: 'Software' },
		{ Id: 22, Account: 'eBay', Industry: 'E-commerce' },
		{ Id: 23, Account: 'Oracle', Industry: 'Software' },
		{ Id: 24, Account: 'Tesla', Industry: 'Car manufacturing' },
		{ Id: 25, Account: 'YouTube', Industry: 'Streaming and media' },
		{ Id: 26, Account: 'O2', Industry: 'Telecommunications' },
		{ Id: 27, Account: 'Warner Bros. Pictures', Industry: 'Film' }
	]
};

class CSLookupPreview extends React.Component<{}, CSLookupPreviewState> {
	state = { focused: false };

	handleBlur = () => alert('Lookup has lost focus.');
	handleFocus = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Lookup is focused.');
			}
			return { focused: !prevState.focused };
		});
	}
	handleSearch = (event: any) => alert(event.target.value);
	handleSelectChange = (item: any) => alert(JSON.stringify(item));

	fetchData = async (searchTerm: any, pageSize: any, pageNo: any) => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		if (searchTerm === '') {
			return {
				records: sampleLookup.data.slice(pageNo * pageSize, (pageNo + 1) * pageSize),
				moreRecords: (pageNo + 1) * pageSize < sampleLookup.data.length
			};
		} else {
			const filteredData = sampleLookup.data
				.filter(record => record.Account.toString().toLowerCase().includes(searchTerm.toLowerCase()))
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
		alerts: {
			variant: 'warning',
			text: 'This component is under construction and should not be used.'
		},
		accessible: 'partially',
		components: [
			{
				name: 'CSLookup',
				examples: [
					{
						propName: 'fieldToBeDisplayed',
						variations: [
							{
								primaryVariants: 'fieldToBeDisplayed="Id"',
								component: <CSLookup
									fieldToBeDisplayed="Id"
									label="Id"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Id"
									label="Id"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupColumns={sampleLookup.columns}
									lookupOptions={sampleLookup.data}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									lookupOptions={sampleLookup.data}
									mode="client"
								/>`
							}
						]
					}, {
						propName: 'lookupColumns',
						variations: [
							{
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={[
										{ key: 'Account', label: 'Account' },
										{ key: 'Industry', label: 'Industry' }
									]}
									lookupOptions={sampleLookup.data}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={[
										{ key: 'Account', label: 'Account' },
										{ key: 'Industry', label: 'Industry' }
									]}
									lookupOptions={sampleLookup.data}
									mode="client"
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
								/>`
							}, {
								primaryVariants: 'align="right"',
								quickLink: 'right',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									align="right"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									autoFocus
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									borderRadius="0"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									disabled
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									disabled
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									error
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									error
									errorMessage="Error message."
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									error
									errorMessage="Error message."
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									helpText="Help text example"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									hidden
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									hidden
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									labelHidden
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									labelTitle
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									multiselect
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									onBlur={this.handleBlur}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									onFocus={this.handleFocus}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									onFocus={this.handleFocus}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									searchBy={['Id', 'Account']}
									onSearch={this.handleSearch}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									onSelectChange={this.handleSelectChange}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupColumns={sampleLookup.columns}
									lookupOptions={sampleLookup.data}
									mode="client"
									placeholder="Search..."
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									lookupOptions={sampleLookup.data}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
								/>`
							}, {
								primaryVariants: 'position="top"',
								quickLink: 'top',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									position="top"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									value={{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' }}
									readOnly
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									value={{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' }}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									required
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									title="This is a title"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									mode="client"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
									lookupColumns={sampleLookup.columns}
									lookupOptions={sampleLookup.data}
									mode="client"
									value={{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' }}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									lookupOptions={sampleLookup.data}
									mode="client"
									value={{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' }}
								/>`
							}, {
								primaryVariants: 'value={[...]}',
								secondaryVariants: 'multiselect={true}',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									lookupOptions={sampleLookup.data}
									mode="client"
									multiselect
									value={[
										{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' },
										{ Id: 2, Account: 'Global Media', Industry: 'Industry' },
										{ Id: 3, Account: 'Salesforce', Industry: 'Software' }
									]}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									lookupOptions={sampleLookup.data}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
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
						name: 'align',
						customTypes: [{
							name: 'CSLookupDropdownAlign',
							types: ['\'left\'', '\'right\'']
						}],
						default: '\'left\'',
						description: 'Horizontally align the lookup dropdown in the case of an overflow.'
					}, {
						name: 'autoFocus',
						types: ['boolean'],
						default: 'false',
						description: 'Set whether the lookup should be autofocused.'
					}, {
						name: 'borderRadius',
						types: ['string'],
						default: '\'0.25rem\'',
						description: 'Set a border radius style.'
					}, {
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the wrapper div.'
					}, {
						name: 'disabled',
						types: ['boolean'],
						default: 'false',
						description: 'Disable the lookup.'
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
						description: 'Set the error message or messages for the text input.'
					}, {
						name: 'fieldToBeDisplayed',
						required: true,
						types: ['string'],
						description: 'Set which field should be displayed when an option is selected.'
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
						description: 'Set the ID for the lookup.'
					}, {
						name: 'label',
						required: true,
						types: ['string'],
						description: 'Set the lookup label.'
					}, {
						name: 'labelHidden',
						types: ['boolean'],
						default: 'false',
						description: 'Hide the lookup label.'
					}, {
						name: 'labelTitle',
						types: ['boolean'],
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'lookupColumns',
						required: true,
						types: ['Array<CSLookupTableColumnType>'],
						description: 'Set which columns should be shown in the dropdown.'
					}, {
						name: 'mode',
						required: true,
						types: ['client', 'server'],
						description: 'Set whether the component should run in client-side or server-side mode. The server-side mode loads records by reading the lookupOptions prop and filtering takes place within the component, while the server-side mode enables asynchronous fetching of records with the fetchLookupOptions prop, which also enables infinite scroll and setting the minimum search term length.'
					}, {
						name: 'multiselect',
						types: ['boolean'],
						default: 'false',
						description: 'Allow selection of multiple options.'
					}, {
						name: 'onBlur',
						types: ['(event) => any'],
						description: 'Handler method for the blur event.'
					}, {
						name: 'onFocus',
						types: ['(event) => any'],
						description: 'Handler method for the focus event.'
					}, {
						name: 'onSearch',
						types: ['(event) => any'],
						description: 'Handler method for when the search term changes.'
					}, {
						name: 'onSelectChange',
						types: ['(event) => any'],
						description: 'Handler method for when the selection is changed. By returning false from handler method, selected item won\'t be updated. Undefined return value will evaluate as true.'
					}, {
						name: 'placeholder',
						types: ['string'],
						description: 'Set a lookup placeholder.'
					}, {
						name: 'position',
						customTypes: [{
							name: 'CSLookupDropdownPosition',
							types: ['\'bottom\'', '\'top\'']
						}],
						default: '\'bottom\'',
						description: 'Determine the vertical position of the lookup dropdown content.'
					}, {
						name: 'readOnly',
						types: ['boolean'],
						default: 'false',
						description: 'Control whether to apply the readonly attribute.'
					}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Make the lookup required.'
					}, {
						name: 'title',
						types: ['string'],
						description: 'Set the lookup title.'
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
						description: 'Set the tooltip position for the lookup.'
					}, {
						name: 'value',
						types: ['Record<string, any>', 'Array<Record<string, any>>', 'null'],
						description: 'Set which values should be displayed in the lookup.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the text input.'
					}
				]
			}, {
				name: 'Client-Side CSLookup',
				examples: [
					{
						propName: 'lookupOptions',
						variations: [
							{
								secondaryVariants: 'mode="client"',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									lookupOptions={[
										{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' },
										{ Id: 2, Account: 'Global Media', Industry: 'Industry' },
										{ Id: 3, Account: 'Salesforce', Industry: 'Software' },
										{ Id: 4, Account: 'Elisa', Industry: 'Telecommunications' },
										{ Id: 5, Account: 'Facebook', Industry: 'Social media' },
										{ Id: 6, Account: 'Google', Industry: 'Technology' },
										{ Id: 7, Account: 'Spotify', Industry: 'Streaming and media' },
										{ Id: 8, Account: 'British Gas', Industry: 'Energy' },
										{ Id: 9, Account: 'Columbia Pictures', Industry: 'Film' },
										{ Id: 10, Account: 'Rimac', Industry: 'Car manufacturing' },
										{ Id: 11, Account: 'News Corp', Industry: 'Mass media' },
										{ Id: 12, Account: 'Telstra', Industry: 'Telecommunications' },
										{ Id: 13, Account: 'Netflix', Industry: 'Production' },
										{ Id: 14, Account: 'Instagram', Industry: 'Social media' },
										{ Id: 15, Account: 'Vodafone', Industry: 'Telecommunications' },
										{ Id: 16, Account: 'Apple', Industry: 'Software' },
										{ Id: 17, Account: 'Amazon', Industry: 'E-commerce' },
										{ Id: 18, Account: 'Ikea', Industry: 'Furniture retail' },
										{ Id: 19, Account: 'Microsoft', Industry: 'Software' },
										{ Id: 20, Account: 'Visa', Industry: 'Finance' },
										{ Id: 21, Account: 'IBM', Industry: 'Software' },
										{ Id: 22, Account: 'eBay', Industry: 'E-commerce' },
										{ Id: 23, Account: 'Oracle', Industry: 'Software' },
										{ Id: 24, Account: 'Tesla', Industry: 'Car manufacturing' },
										{ Id: 25, Account: 'YouTube', Industry: 'Streaming and media' },
										{ Id: 26, Account: 'O2', Industry: 'Telecommunications' },
										{ Id: 27, Account: 'Warner Bros. Pictures', Industry: 'Film' }
									]}
									mode="client"
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									lookupOptions={[
										{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' },
										{ Id: 2, Account: 'Global Media', Industry: 'Industry' },
										{ Id: 3, Account: 'Salesforce', Industry: 'Software' },
										{ Id: 4, Account: 'Elisa', Industry: 'Telecommunications' },
										{ Id: 5, Account: 'Facebook', Industry: 'Social media' },
										{ Id: 6, Account: 'Google', Industry: 'Technology' },
										{ Id: 7, Account: 'Spotify', Industry: 'Streaming and media' },
										{ Id: 8, Account: 'British Gas', Industry: 'Energy' },
										{ Id: 9, Account: 'Columbia Pictures', Industry: 'Film' },
										{ Id: 10, Account: 'Rimac', Industry: 'Car manufacturing' },
										{ Id: 11, Account: 'News Corp', Industry: 'Mass media' },
										{ Id: 12, Account: 'Telstra', Industry: 'Telecommunications' },
										{ Id: 13, Account: 'Netflix', Industry: 'Production' },
										{ Id: 14, Account: 'Instagram', Industry: 'Social media' },
										{ Id: 15, Account: 'Vodafone', Industry: 'Telecommunications' },
										{ Id: 16, Account: 'Apple', Industry: 'Software' },
										{ Id: 17, Account: 'Amazon', Industry: 'E-commerce' },
										{ Id: 18, Account: 'Ikea', Industry: 'Furniture retail' },
										{ Id: 19, Account: 'Microsoft', Industry: 'Software' },
										{ Id: 20, Account: 'Visa', Industry: 'Finance' },
										{ Id: 21, Account: 'IBM', Industry: 'Software' },
										{ Id: 22, Account: 'eBay', Industry: 'E-commerce' },
										{ Id: 23, Account: 'Oracle', Industry: 'Software' },
										{ Id: 24, Account: 'Tesla', Industry: 'Car manufacturing' },
										{ Id: 25, Account: 'YouTube', Industry: 'Streaming and media' },
										{ Id: 26, Account: 'O2', Industry: 'Telecommunications' },
										{ Id: 27, Account: 'Warner Bros. Pictures', Industry: 'Film' }
									]}
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
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									loading
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									loading
								/>`
							}
						]
					}, {
						propName: 'searchBy',
						variations: [
							{
								primaryVariants: 'searchBy={[\'Id\', \'Account\']}',
								secondaryVariants: 'mode="client"',
								component: <CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									searchBy={['Id', 'Account']}
								/>,
								code: `<CSLookup
									fieldToBeDisplayed="Account"
									label="Account"
									lookupOptions={sampleLookup.data}
									lookupColumns={sampleLookup.columns}
									mode="client"
									searchBy={['Id', 'Account']}
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'lookupOptions',
						required: true,
						types: ['Array<Record<string, any>>'],
						description: 'Set the data that should be shown in the dropdown.'
					}, {
						name: 'loading',
						types: ['boolean'],
						default: 'false',
						description: 'Render a spinner in the dropdown instead of options.'
					}, {
						name: 'searchBy',
						types: ['Array<string>'],
						description: 'Set the keys by which the options should be filtered. By default, the options are filtered by the key provided in the lookupColumns prop.'
					}
				]
			}, {
				name: 'Server-Side CSLookup',
				examples: [
					{
						propName: 'fetchLookupOptions',
						variations: [
							{
								secondaryVariants: 'mode="server"',
								component: <CSLookup
									fetchLookupOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									mode="server"
									pageSize={27}
								/>,
								code: `<CSLookup
									fetchLookupOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
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
									fetchLookupOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									mode="server"
									infiniteScroll
									pageSize={10}
								/>,
								code: `<CSLookup
									fetchLookupOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
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
									fetchLookupOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									mode="server"
									pageSize={8}
									infiniteScroll
								/>,
								code: `<CSLookup
									fetchLookupOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
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
									fetchLookupOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
									mode="server"
									pageSize={24}
									minTermLength={3}
								/>,
								code: `<CSLookup
									fetchLookupOptions={this.fetchData}
									fieldToBeDisplayed="Account"
									label="Account"
									lookupColumns={sampleLookup.columns}
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
						name: 'fetchLookupOptions',
						types: ['(searchTerm, pageSize, pageNo) => Promise<CSLookupFetchResult>'],
						required: true,
						description: 'Set a function which will be called on every search or focus change if the minTermLength prop is 0. The function takes the search term, the page size (which determines the number of returned records) and the page number which will automatically increase on every infiniteScroll event. It returns an object with a records property of the same type as lookupOptions and a boolean moreRecords property which indicates whether further records can be fetched.'
					}, {
						name: 'infiniteScroll',
						types: ['boolean'],
						default: 'false',
						description: 'Enable fetching additional records when the dropdown scroll hits the bottom.'
					}, {
						name: 'minTermLength',
						default: '0',
						types: ['number'],
						description: 'Set the minimum number of characters that need to be entered before fetchLookupOptions is fired.'
					}, {
						name: 'pageSize',
						types: ['number'],
						required: true,
						description: 'Set the number of records that should be returned after each lookup records fetch.'
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
					'`<CSTable>` - dropdown',
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
					'`<CSButton>` - focusable and supports clicks with `Enter` and `Space`',
					'Dropdown keyboard operability limited - currently partially supported in table'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSLookupPreview;
