import React from 'react';
import { CSTransfer } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSTransferPreviewState {
	[key: string]: Array<React.ReactText>;
}

class CSTransferPreview extends React.Component<{}, CSTransferPreviewState> {
	items = [
		{
			key: 'ff0000',
			label: 'red'
		}, {
			key: '008000',
			label: 'green'
		}, {
			key: '0000ff',
			label: 'blue'
		}, {
			key: 'ffff00',
			label: 'yellow'
		}
	];

	constructor(props: any) {
		super(props);
		this.state = {
			onTransferKeys: ['ff0000'],
			targetKeys: ['ff0000']
		};
	}

	onTransferHandler = (keys: React.ReactText | Array<React.ReactText>, stateName: string) => {
		const keysArray = Array.isArray(keys) ? keys : [keys];
		const state = this.state[stateName];
		const newKeys = keysArray.some(key => state.includes(key)) ?
			state.filter(key => !keysArray.includes(key)) :
			[...state, ...keysArray];

		this.setState({ [stateName]: newKeys });
	}

	getDoc = () => ({
		name: 'Transfer',
		usage: 'Transfer is a double column choice box for selecting multiple items.',
		accessible: 'yes',
		components: [
			{
				name: 'CSTransfer',
				examples: [
					{
						propName: 'items',
						variations: [
							{
								component: <CSTransfer
									items={this.items}
									sourceLabel="Source"
									targetLabel="Target"
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
								/>`
							}
						]
					}, {
						propName: 'sourceLabel | targetLabel',
						variations: [
							{
								component: <CSTransfer
									items={this.items}
									sourceLabel="Example of sourceLabel"
									targetLabel="Example of targetLabel"
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Example of sourceLabel"
									targetLabel="Example of targetLabel"
								/>`
							}
						]
					},
					// {
					// 	propName: 'disabled',
					// 	alert: {
					// 		variant: 'info',
					// 		text: 'Disabled can only be set through items array which is passed to component.'
					// 	},
					// 	variations: [
					// 		{
					// 			component: <CSTransfer
					// 				items={this.items}
					// 				sourceLabel="Source"
					// 				targetLabel="Target"
					// 			/>,
					// 			code: `<CSTransfer
					// 				items={[
					// 					{
					// 						key: 'ff0000',
					// 						label: 'red',
					// 						disabled: true
					// 					}, {
					// 						key: '008000',
					// 						label: 'green'
					// 					}, {
					// 						key: '0000ff',
					// 						label: 'blue'
					// 					}, {
					// 						key: 'ffff00',
					// 						label: 'yellow'
					// 					}
					// 				]}
					// 				sourceLabel="Source"
					// 				targetLabel="Target"
					// 			/>`
					// 		}
					// 	]
					// },
					{
						propName: 'helpText',
						variations: [
							{
								component: <CSTransfer
									items={this.items}
									sourceLabel="Source"
									targetLabel="Target"
									helpText={{
										source: 'Source help text example.',
										target: 'Target help text example.'
									}}
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									helpText={{
										source: 'Source help text example.',
										target: 'Target help text example.'
									}}
								/>`
							}
						]
					}, {
						propName: 'onTransfer',
						variations: [
							{
								secondaryVariants: 'targetKeys: [\'ff0000\']',
								component: <CSTransfer
									items={this.items}
									sourceLabel="Source"
									targetLabel="Target"
									onTransfer={key => this.onTransferHandler(key, 'onTransferKeys')}
									targetKeys={this.state.onTransferKeys}
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									onTransfer={(keys) => this.setState({ onTransferKeys: keys })}
									targetKeys={this.state.onTransferKeys}
								/>`
							}
						]
					}, {
						propName: 'oneWay',
						variations: [
							{
								primaryVariants: 'oneWay={true}',
								component: <CSTransfer
									items={this.items}
									sourceLabel="Source"
									targetLabel="Target"
									targetKeys={['ff0000']}
									oneWay
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									oneWay
								/>`
							}
						]
					}, {
						propName: 'searchable',
						variations: [
							{
								primaryVariants: 'searchable={true}',
								component: <CSTransfer
									items={this.items}
									sourceLabel="Source"
									targetLabel="Target"
									searchable
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									searchable
								/>`
							}
						]
					}, {
						propName: 'selectAll',
						alert: {
							variant: 'info',
							text: 'This prop can only be used in combination with check-list variant.'
						},
						variations: [
							{
								primaryVariants: 'selectAll={true}',
								component: <CSTransfer
									items={this.items}
									sourceLabel="Source"
									targetLabel="Target"
									variant="check-list"
									selectAll
								/>,
								code: ` <CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									variant="check-list"
									selectAll
								/>`
							}
						]
					}, {
						propName: 'targetKeys',
						variations: [
							{
								secondaryVariants: 'onTransfer = () => {...}',
								component: <CSTransfer
									items={this.items}
									sourceLabel="Source"
									targetLabel="Target"
									onTransfer={key => this.onTransferHandler(key, 'targetKeys')}
									targetKeys={this.state.targetKeys}
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									onTransfer={(keys) => this.setState({targetKeys: keys })}
									targetKeys={this.state.targetKeys}
								/>`
							}
						]
					}, {
						propName: 'variant',
						alert: {
							variant: 'info',
							text: 'For selecting multiple items in simple-list transfer variant hold CTRL key.'
						},
						variations: [
							{
								primaryVariants: 'variant="simple-list"',
								quickLink: 'simple-list',
								component: <CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
								/>`
							}, {
								primaryVariants: 'variant="check-list"',
								quickLink: 'check-list',
								component: <CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									variant="check-list"
									sourceLabel="Source"
									targetLabel="Target"
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									variant="check-list"
									sourceLabel="Source"
									targetLabel="Target"
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
								component: <CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSTransfer
									items={[
										{
											key: 'ff0000',
											label: 'red'
										}, {
											key: '008000',
											label: 'green'
										}, {
											key: '0000ff',
											label: 'blue'
										}, {
											key: 'ffff00',
											label: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									id="custom-id"
									className="custom-br-mint"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'items',
						required: true,
						customTypes: {
							name: 'Array<CSTransferItemsType>',
							types: 'object'
						},
						description: 'Define an array of objects to be used as a data source. The object accepts key and label attributes. In case the key is within targetKeys, that item will be displayed in the target list.'
					}, {
						name: 'sourceLabel',
						required: true,
						types: 'string',
						description: 'Set the source list label.'
					}, {
						name: 'targetLabel',
						required: true,
						types: 'string',
						description: 'Set the target list label.'
					}, {
						name: 'helpText',
						customTypes: {
							name: 'CSTransferHelpText',
							types: 'object'
						},
						description: 'Set the text to be displayed in the transfer lists tooltip.'
					}, {
						name: 'onTransfer',
						types: '(key: ReactText | Array<ReactText>) => void',
						description: 'Handler method for the change event.'
					}, {
						name: 'oneWay',
						types: 'boolean',
						default: 'false',
						description: 'Only allow left-to-right transfers.'
					}, {
						name: 'searchable',
						types: 'boolean',
						default: 'false',
						description: 'Render a search bar for both lists.'
					}, {
						name: 'selectAll',
						types: 'boolean',
						default: 'false',
						description: 'Render a checkbox to select all items in a list. It can be only used with the check-list variant.'
					}, {
						name: 'targetKeys',
						types: 'Array<ReactText>',
						description: 'An array of keys corresponding to selected transfer items.'
					}, {
						name: 'variant',
						customTypes: {
							name: 'CSTransferVariant',
							types: [`'simple-list'`, `'check-list'`]
						},
						default: `'simple-list'`,
						description: 'Set a transfer list variant.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the transfer.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the transfer.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the transfer wrapper div.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.1.1',
				'2.1.1',
				'2.1.2',
				'2.1.4',
				'2.4.3',
				'2.4.7',
				'3.2.1',
				'3.3.1',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<ul>`',
					'`<li>`',
					'`<CSButton>` - move selection buttons'
				],
				attributes: [
					'`aria-describedby` - list is associated with belonging label',
					'`aria-selected`',
					'`role="listbox"`',
					'`role="option"`'
				],
				styling: [
					'Color contrast ratio > 4.5',
					'Distinct hover, active and focus state styles'
				],
				keyboardOperability: [
					'Proper focus management and keyboard operability ensured by structure and `<CSButton>`',
					'`Left` - move left to selection buttons or source list',
					'`Right` - move right to the selection buttons or target list',
					'`Up` - move up through the list or selection buttons',
					'`Down` - move down through the list or selection buttons'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSTransferPreview;
