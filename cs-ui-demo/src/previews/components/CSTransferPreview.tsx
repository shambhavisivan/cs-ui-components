import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSTransfer } from '@cloudsense/cs-ui-components';

class CSTransferPreview extends React.Component {
	getDoc() {
		const colorsDataSource = [
			{
				key: 'ff0000',
				name: 'red'
			},
			{
				key: '008000',
				name: 'green'
			},
			{
				key: '0000ff',
				name: 'blue'
			},
			{
				key: 'ffff00',
				name: 'yellow'
			},
			{
				key: 'ffa500',
				name: 'orange'
			},
			{
				key: 'ee89ee',
				name: 'violet'
			},
			{
				key: '00008b',
				name: 'darkblue'
			},
			{
				key: 'ff00ff',
				name: 'fuchsia'
			},
			{
				key: '800000',
				name: 'maroon'
			}
		];

		const dataSourceWithDisabledItems = [
			{
				key: '008000',
				name: 'green',
				disabled: true
			},
			{
				key: '0000ff',
				name: 'blue'
			},
			{
				key: 'ffff00',
				name: 'yellow',
				disabled: true
			},
			{
				key: 'ffa500',
				name: 'orange',
				disabled: true
			}
		];
		const targetKeys = ['ff0000', '008000', 'ee89ee'];
		const handleOnChange = (e: any) => alert('Selected items are: ' + e);

		const json = {
			name: 'Transfer',
			usage: 'Transfer is a double column choice box for selecting multiple items.',
			accessible: 'partially',
			examples: [
				{
					propName: 'dataSource',
					variations: [
						{
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
								/>
						}
					]
				},
				{
					propName: 'variant',
					alert: {
						variant: 'info',
						text: 'For selecting multiple items in simple-list transfer variant hold CTRL key!'
					},
					variations: [
						{
							variationName: ['simple-list'],
							quickLink: 'simple-list',
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
								/>
						},
						{
							variationName: ['check-list'],
							quickLink: 'check-list',
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									variant="check-list"
									sourceLabel="Source"
									targetLabel="Target"
								/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
									id="id"
								/>
						}
					]
				},
				{
					propName: 'oneWay',
					variations: [
						{
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
									oneWay
								/>
						}
					]
				},
				{
					propName: 'targetKeys',
					variations: [
						{
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									targetKeys={targetKeys}
									sourceLabel="Source"
									targetLabel="Target"
								/>
						}
					]
				},
				{
					propName: 'sourceLabel',
					variations: [
						{
							variationName: ['Source'],
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
								/>
						}
					]
				},
				{
					propName: 'targetLabel',
					variations: [
						{
							variationName: ['Target'],
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
								/>
						}
					]
				},
				{
					propName: 'sourceHelpText',
					variations: [
						{
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
									sourceHelpText="Help text example"
								/>
						}
					]
				},
				{
					propName: 'targetHelpText',
					variations: [
						{
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
									targetHelpText="Help text example"
								/>
						}
					]
				},
				{
					propName: 'searchable',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
									searchable
								/>
						}
					]
				},
				{
					propName: 'selectAll',
					alert: {
						variant: 'info',
						text: 'This prop can only be used in combination with check-list variant!'
					},
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
									variant="check-list"
									selectAll
								/>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSTransfer
									dataSource={colorsDataSource}
									sourceLabel="Source"
									targetLabel="Target"
									onChange={e => handleOnChange(e)}
								/>
						}
					]
				},
				{
					propName: 'disabled',
					alert: {
						variant: 'info',
						text: 'This can only be set through dataSource array which is passed to component!'
					},
					variations: [
						{
							component:
								<CSTransfer
									dataSource={dataSourceWithDisabledItems}
									sourceLabel="Source"
									targetLabel="Target"
								/>
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
						'2.4.3',
						'2.4.7',
						'3.2.1',
						'3.3.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML `<ul>`',
								'HTML `<li>`',
								'HTML `<button>`'
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
								'Proper focus management and keyboard operability ensured by structure and `<button>`',
								'Additional logic provided for arrow navigation in all directions'
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

export default CSTransferPreview;
