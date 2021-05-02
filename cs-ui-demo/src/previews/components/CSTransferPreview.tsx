import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSTransfer } from '@cloudsense/cs-ui-components';

class CSTransferPreview extends React.Component {
	handleOnChange = (e: any) => alert('Selected items are: ' + e);

	getTransferDoc = () => ({
		name: 'Transfer',
		usage: 'Transfer is a double column choice box for selecting multiple items.',
		accessible: 'yes',
		previews: [
			{
				name: 'CSTransfer',
				examples: [
					{
						propName: 'dataSource',
						variations: [
							{
								component: <CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
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
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Example of sourceLabel"
									targetLabel="Example of targetLabel"
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Example of sourceLabel"
									targetLabel="Example of targetLabel"
								/>`
							}
						]
					}, {
						propName: 'disabled',
						alert: {
							variant: 'info',
							text: 'Disabled can only be set through dataSource array which is passed to component.'
						},
						variations: [
							{
								component: <CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red',
											disabled: true
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
											disabled: true
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
								/>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									onChange={e => this.handleOnChange(e)}
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									onChange={e => this.handleOnChange(e)}
								/>`
							}
						]
					}, {
						propName: 'oneWay',
						variations: [
							{
								primaryVariants: 'oneWay={true}',
								component: <CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									oneWay
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
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
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									searchable
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
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
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									variant="check-list"
									selectAll
								/>,
								code: ` <CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
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
						propName: 'sourceHelpText',
						variations: [
							{
								component: <CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									sourceHelpText="Help text example"
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									sourceHelpText="Help text example"
								/>`
							}
						]
					}, {
						propName: 'targetHelpText',
						variations: [
							{
								component: <CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									targetHelpText="Help text example"
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									targetHelpText="Help text example"
								/>`
							}
						]
					}, {
						propName: 'targetKeys',
						variations: [
							{
								component: <CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									targetKeys={['ff0000', '008000', 'ee89ee']}
									sourceLabel="Source"
									targetLabel="Target"
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									targetKeys={['ff0000', '008000', 'ee89ee']}
									sourceLabel="Source"
									targetLabel="Target"
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
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
								/>`
							}, {
								primaryVariants: 'variant="check-list"',
								quickLink: 'check-list',
								component: <CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									variant="check-list"
									sourceLabel="Source"
									targetLabel="Target"
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
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
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSTransfer
									dataSource={[
										{
											key: 'ff0000',
											name: 'red'
										}, {
											key: '008000',
											name: 'green'
										}, {
											key: '0000ff',
											name: 'blue'
										}, {
											key: 'ffff00',
											name: 'yellow'
										}
									]}
									sourceLabel="Source"
									targetLabel="Target"
									id="custom-id"
									className="custom-class"
								/>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the transfer.'
			}, {
				name: 'dataSource',
				customTypes: [{
					name: 'Array<CSTransferItemsType>',
					types: ['object']
				}],
				required: true,
				description: 'Define an array of objects to be used as a data source. The object accepts disabled, key and name attributes. In case the key is within targetKeys, that item will be displayed in the target list.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the transfer.'
			}, {
				name: 'onChange',
				types: ['(value) => any'],
				description: 'Handler method for the change event.'
			}, {
				name: 'oneWay',
				types: ['boolean'],
				default: 'false',
				description: 'Only allow left-to-right transfers.'
			}, {
				name: 'searchable',
				types: ['boolean'],
				default: 'false',
				description: 'Render a search bar for both lists.'
			}, {
				name: 'selectAll',
				types: ['boolean'],
				default: 'false',
				description: 'Render a checkbox to select all items in a list. It can be only used with the check-list variant.'
			}, {
				name: 'sourceHelpText',
				types: ['string'],
				description: 'Set the text to be displayed in the source list tooltip.'
			}, {
				name: 'sourceLabel',
				required: true,
				types: ['string'],
				description: 'Set the source list label.'
			}, {
				name: 'targetHelpText',
				types: ['string'],
				description: 'Set the text to be displayed in the target list tooltip.'
			}, {
				name: 'targetKeys',
				types: ['Array<string>'],
				description: 'A set of keys for the elements listed in the target list.'
			}, {
				name: 'targetLabel',
				required: true,
				types: ['string'],
				description: 'Set the target list label.'
			}, {
				name: 'variant',
				customTypes: [{
					name: 'CSTransferVariant',
					types: ['\'simple-list\'', '\'check-list\'']
				}],
				default: '\'simple-list\'',
				description: 'Set a transfer list variant.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the transfer wrapper div.'
			}
		],
		accessibility: [
			{
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
				requirements: [
					{
						structure: [
							'`<ul>`',
							'`<li>`',
							'`<CSButton>` - move selection buttons'
						],
						properties: [
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
				]
			}
		]
	})

	render() {
		const component = this.getTransferDoc();

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

export default CSTransferPreview;
