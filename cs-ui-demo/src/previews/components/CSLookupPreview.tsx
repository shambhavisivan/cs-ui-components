import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSLookup, CSAlert } from '@cloudsense/cs-ui-components';

interface CSLookupPreviewState {
	focused: boolean;
}
class CSLookupPreview extends React.Component<{}, CSLookupPreviewState> {

	state = {
		focused: false
	};

	handleOnBlur = () => alert('Lookup has lost focus!');
	handleOnFocus = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Lookup is focused.');
			}
			return { focused: !prevState.focused };
		});
	}
	handleOnSearch = (e: any) => alert(e.target.value);
	handleSelectChange = (item: any) => alert(JSON.stringify(item));

	getDoc() {

		const lookupSimple = {
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

		const fetchData = async (searchTerm: any, pageSize: any, pageNo: any) => {
			await new Promise(resolve => setTimeout(resolve, 2000));
			if (searchTerm === '') {
				return {
					records: lookupSimple.data.slice(pageNo * pageSize, (pageNo + 1) * pageSize),
					moreRecords: (pageNo + 1) * pageSize < lookupSimple.data.length
				};
			} else {
				const filteredData = lookupSimple.data
					.filter(record => record.Account.toString().toLowerCase().includes(searchTerm))
					.slice(pageNo * pageSize, (pageNo + 1) * pageSize);
				return {
					records: filteredData,
					moreRecords: (pageNo + 1) * pageSize < filteredData.length
				};
			}
		};

		const lookupAdvanced = {
			columns: [
				{ key: 'name', label: 'Name' },
				{ key: 'id', label: 'Id label' },
				{ key: 'cspmb__recurring_charge__c', label: 'Reccuring Charge' }
			],
			data: [
				{
					'cspmb__recurring_charge__c': 21.02,
					'name': 'CP 1',
					'id': 'a1n4J0000005YUmQAM',
					'attributes.url': '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J0000005YUmQAM',
					'attributes.type': 'cspmb__Price_Item__c',
					'label': 'CP 1',
					'key': 'a1n4J0000005YUmQAM',
					'__lookup': {
						cspmb__Recurring_Charge__c: 21.02,
						Name: 'CP 1',
						Id: 'a1n4J0000005YUmQAM',
						attributes: {
							url: '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J0000005YUmQAM',
							type: 'cspmb__Price_Item__c'
						}
					}
				},
				{
					'cspmb__recurring_charge__c': 10000,
					'name': 'CP 2',
					'id': 'a1n4J0000005YUnQAM',
					'attributes.url': '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J0000005YUnQAM',
					'attributes.type': 'cspmb__Price_Item__c',
					'label': 'CP 2',
					'key': 'a1n4J0000005YUnQAM',
					'__lookup': {
						cspmb__Recurring_Charge__c: 10000,
						Name: 'CP 2',
						Id: 'a1n4J0000005YUnQAM',
						attributes: {
							url: '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J0000005YUnQAM',
							type: 'cspmb__Price_Item__c'
						}
					}
				},
				{
					'cspmb__account__r.name': 'account cp 2444',
					'cspmb__account__r.id': '0014J00000LjWtpQAF',
					'cspmb__account__r.attributes.url': '/services/data/v49.0/sobjects/Account/0014J00000LjWtpQAF',
					'cspmb__account__r.attributes.type': 'Account',
					'cspmb__account__c': '0014J00000LjWtpQAF',
					'cspmb__recurring_charge__c': 23,
					'name': 'CP 2444',
					'id': 'a1n4J0000005YUlQAM',
					'attributes.url': '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J0000005YUlQAM',
					'attributes.type': 'cspmb__Price_Item__c',
					'label': 'CP 2444',
					'key': 'a1n4J0000005YUlQAM',
					'__lookup': {
						cspmb__Account__r: {
							Name: 'account cp 2444',
							Id: '0014J00000LjWtpQAF',
							attributes: {
								url: '/services/data/v49.0/sobjects/Account/0014J00000LjWtpQAF',
								type: 'Account'
							}
						},
						cspmb__Account__c: '0014J00000LjWtpQAF',
						cspmb__Recurring_Charge__c: 23,
						Name: 'CP 2444',
						Id: 'a1n4J0000005YUlQAM',
						attributes: {
							url: '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J0000005YUlQAM',
							type: 'cspmb__Price_Item__c'
						}
					}
				},
				{
					'cspmb__recurring_charge__c': 21,
					'name': 'CP 5',
					'id': 'a1n4J000000auw1QAA',
					'attributes.url': '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J000000auw1QAA',
					'attributes.type': 'cspmb__Price_Item__c',
					'label': 'CP 5',
					'key': 'a1n4J000000auw1QAA',
					'__lookup': {
						cspmb__Recurring_Charge__c: 21,
						Name: 'CP 5',
						Id: 'a1n4J000000auw1QAA',
						attributes: {
							url: '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J000000auw1QAA',
							type: 'cspmb__Price_Item__c'
						}
					}
				},
				{
					'cspmb__recurring_charge__c': 21,
					'name': 'CP 6',
					'id': 'a1n4J000000auw6QAA',
					'attributes.url': '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J000000auw6QAA',
					'attributes.type': 'cspmb__Price_Item__c',
					'label': 'CP 6',
					'key': 'a1n4J000000auw6QAA',
					'__lookup': {
						cspmb__Recurring_Charge__c: 21,
						Name: 'CP 6',
						Id: 'a1n4J000000auw6QAA',
						attributes: {
							url: '/services/data/v49.0/sobjects/cspmb__Price_Item__c/a1n4J000000auw6QAA',
							type: 'cspmb__Price_Item__c'
						}
					}
				}
			]
		};

		const json = {
			name: 'Lookup',
			usage: 'Lookup is an autocomplete combobox that will search against a database object',
			accessible: 'partially',
			examples: [
				{
					propName: 'value',
					customText: '',
					alert: {
						variant: 'info',
						text: 'If multiselect is set value prop must receive array of records, otherwise single record can be passed to value prop.'
					},
					variations: [
						{
							variationName: ['Record<string, any>'],
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									fieldToBeDisplayed="Account"
									lookupColumns={lookupSimple.columns}
									value={{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' }}
								/>
						},
						{
							variationName: ['Array<Record<string, any>>'],
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									fieldToBeDisplayed="Account"
									lookupColumns={lookupSimple.columns}
									multiselect
									value={[
										{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' },
										{ Id: 2, Account: 'Global Media', Industry: 'Industry' },
										{ Id: 3, Account: 'Salesforce', Industry: 'Software' }
									]}
								/>
						}
					]
				},
				{
					propName: 'autoFocus',
					customText: '',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									autoFocus
									lookupOptions={lookupSimple.data}
									fieldToBeDisplayed="Account"
									lookupColumns={lookupSimple.columns}
								/>
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									id="Accounts"
									lookupOptions={lookupSimple.data}
									fieldToBeDisplayed="Account"
									lookupColumns={lookupSimple.columns}
								/>
						}
					]
				},
				{
					propName: 'placeholder',
					customText: '',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupAdvanced.data}
									lookupColumns={lookupAdvanced.columns}
									fieldToBeDisplayed="name"
									placeholder="Search..."
									searchBy={['cspmb__recurring_charge__c', 'name', 'attributes.url']}
								/>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupAdvanced.data}
									lookupColumns={lookupAdvanced.columns}
									fieldToBeDisplayed="Account"
								/>
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
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									labelHidden
								/>
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
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									labelTitle
								/>
						}
					]
				},
				{
					propName: 'loading',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									loading
								/>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									helpText="Help text example"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>
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
								<CSLookup
									mode="client"
									label="Account"
									helpText="Help text example"
									tooltipPosition="top-right"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>
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
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									disabled
								/>
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
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									hidden
								/>
						}
					]
				},
				{
					propName: 'readOnly',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									readOnly
									value={{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' }}
								/>
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
								<CSLookup
									mode="client"
									required
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'align',
					customText: '',
					variations: [
						{
							variationName: ['left'],
							quickLink: 'left',
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>
						},
						{
							variationName: ['right'],
							quickLink: 'right',
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									align="right"
								/>
						}
					]
				},
				{
					propName: 'position',
					customText: '',
					variations: [
						{
							variationName: ['bottom'],
							quickLink: 'bottom',
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>

						},
						{
							variationName: ['top'],
							quickLink: 'top',
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									position="top"
								/>
						}
					]
				},
				{
					propName: 'lookupColumns',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'fieldToBeDisplayed',
					variations: [
						{
							variationName: ['Account'],
							quickLink: 'Account',
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>
						},
						{
							variationName: ['Industry'],
							quickLink: 'Industry',
							component:
								<CSLookup
									mode="client"
									label="Industry"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Industry"
								/>
						},
						{
							variationName: ['Id'],
							quickLink: 'Id',
							component:
								<CSLookup
									mode="client"
									label="Id"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Id"
								/>
						}
					]
				},
				{
					propName: 'multiselect',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									multiselect
								/>
						}
					]
				},
				{
					propName: 'onBlur',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									onBlur={this.handleOnBlur}
								/>
						}
					]
				},
				{
					propName: 'onFocus',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									onFocus={this.handleOnFocus}
								/>
						}
					]
				},
				{
					propName: 'onSearch',
					variations: [
						{
							variationText: ['searchBy={[\'Id\', \'Account\']}'],
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									searchBy={['Id', 'Account']}
									onSearch={this.handleOnSearch}
								/>
						}
					]
				},
				{
					propName: 'onSelectChange',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									onSelectChange={this.handleSelectChange}
								/>
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
								<CSLookup
									mode="client"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									label="Account"
									error
								/>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									error
									errorMessage="Error message!"
								/>
						}
					]
				},
				{
					propName: 'borderRadius',
					variations: [
						{
							variationName: ['0'],
							quickLink: '0',
							component:
								<CSLookup
									mode="client"
									label="Account"
									borderRadius="0"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									title="This is a title"
								/>
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
								<CSLookup
									mode="client"
									label="Account"
									className="custom-class"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'CSLookup client mode - searchBy',
					variations: [
						{
							variationName: ['Id', 'Account'],
							quickLink: '["Id", "Account"]',
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
									searchBy={['Id', 'Account']}
								/>
						}
					]
				},
				{
					propName: 'CSLookup client mode - lookupOptions',
					variations: [
						{
							component:
								<CSLookup
									mode="client"
									label="Account"
									lookupOptions={lookupSimple.data}
									lookupColumns={lookupSimple.columns}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'CSLookup server mode - fetchLookupOptions',
					variations: [
						{
							component:
								<CSLookup
									mode="server"
									label="Account"
									lookupColumns={lookupSimple.columns}
									fetchLookupOptions={fetchData}
									fieldToBeDisplayed="Account"
									pageSize={27}
								/>
						}
					]
				},
				{
					propName: 'CSLookup server mode - infiniteScroll',
					variations: [
						{
							component:
								<CSLookup
									mode="server"
									label="Account"
									lookupColumns={lookupSimple.columns}
									fetchLookupOptions={fetchData}
									fieldToBeDisplayed="Account"
									pageSize={8}
									infiniteScroll
									multiselect
								/>
						}
					]
				},
				{
					propName: 'CSLookup server mode - minTermLength',
					variations: [
						{
							component:
								<CSLookup
									mode="server"
									label="Account"
									lookupColumns={lookupSimple.columns}
									fetchLookupOptions={fetchData}
									fieldToBeDisplayed="Account"
									pageSize={24}
									minTermLength={3}
								/>
						}
					]
				},
				{
					propName: 'CSLookup server mode - pageSize',
					variations: [
						{
							component:
								<CSLookup
									mode="server"
									label="Account"
									lookupColumns={lookupSimple.columns}
									fetchLookupOptions={fetchData}
									fieldToBeDisplayed="Account"
									pageSize={10}
									infiniteScroll
								/>
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
					description: 'Align the lookup dropdown.'

				}, {
					name: 'autoFocus',
					types: ['boolean'],
					default: 'false',
					description: 'Set whether the lookup input should be autofocused.'
				}, {
					name: 'borderRadius',
					types: ['string'],
					default: '0.25rem',
					description: 'Set a border radius style.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the text input.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the text input.'
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
					description: 'Set which field will be displayed when the option is selected.'
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
					description: 'Set the ID for the text input.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the text input label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the text input label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'loading',
					types: ['boolean'],
					default: 'false',
					description: 'Renders spinner in dropdown insted of dropdown options.'
				}, {
					name: 'lookupColumns',
					required: true,
					types: ['Array<CSLookupTableColumnType>'],
					description: 'Set columns which will be shown in the dropdown.'
				}, {
					name: 'mode',
					required: true,
					types: ['client', 'server'],
					default: 'client',
					description: 'Set the mode of component. Server mode enables loading records through lookupOptions prop and filtering takes place from within component, while server mode enables asynchronous fetching of records with fetchLookupOptions API which also enables infinite scroll and setting the minimum search term length.'
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
					description: 'Handler method when serch term changes.'
				}, {
					name: 'onSelectChange',
					types: ['(event) => void'],
					description: 'Handler method for when the selection is changed.'
				}, {
					name: 'placeholder',
					types: ['string'],
					description: 'Set a text input placeholder.'
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
					description: 'Make the text input required.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the text input title.'
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
					description: 'Set the tooltip position for the text input.'
				},
				{
					name: 'value',
					types: ['Record<string, any>', 'Array<Record<string, any>>', 'null'],
					description: 'Set value to display of the option.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the text input.'
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
								'`<input type="text">`',
								'`<CSTable>` - dropdown',
								'Clear button is `<CSButton>`'
							],
							properties: [
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

	getCSLookupClientDoc() {
		const json = {
			name: 'Lookup Client Mode',
			properties: [
				{
					name: 'lookupOptions',
					required: true,
					types: ['Array<Record<string, any>>'],
					description: 'Set data which will be shown in dropdown.'
				},
				{
					name: 'searchBy',
					types: ['Array<string>'],
					description: 'Set keys by which options will be filtered. By default options are filtered by key provided in lookupColumns prop.'
				}
			]
		};

		return json;
	}

	getCSLookupServerDoc() {
		const json = {
			name: 'Lookup Server Mode',
			properties: [
				{
					name: 'fetchLookupOptions',
					types: ['(searchTerm: string, pageSize: number, pageNo: number) => Promise<CSLookupFetchResult>'],
					required: true,
					description: 'API which will be called on every search change or focus of the component if minTermLength is 0. It accepts search term, pageSize prop which will determine number of the returned records and pageNo which will automatically increase on every scroll if infiniteScroll is set.'
				},
				{
					name: 'infiniteScroll',
					types: ['boolean'],
					default: 'false',
					description: 'Enables fetching additional records when dropdown hits the bottom.'
				},
				{
					name: 'minTermLength',
					default: '0',
					types: ['number'],
					description: 'Set the minimum number of search term length that needs to be entered before fetchLookupOptions is fired.'
				},
				{
					name: 'pageSize',
					types: ['number'],
					required: true,
					description: 'Set the number of records that will be returned after each fetch of the lookup records.'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getDoc();
		const component2 = this.getCSLookupClientDoc();
		const component3 = this.getCSLookupServerDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert
						variant="warning"
						text="This component is under construction and should not be used."
						styleFormat="scoped"
					/>
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2, component3]} />
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

export default CSLookupPreview;
