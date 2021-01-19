import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

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
			accessible: 'no',
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
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'dataSource',
					description: 'Tooltip help text content'
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event'
				},
				{
					propertyName: 'oneWay',
					description: 'Display as single direction style',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'searchable',
					description: 'Renders search box for both lists',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'selectAll',
					description: 'Renders checkbox which will select all items of one list. It can be only used with check-list variant',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'sourceHelpText',
					description: 'Source list help text for tooltip display'
				},
				{
					propertyName: 'sourceLabel',
					description: 'Label of the source list'
				},
				{
					propertyName: 'targetHelpText',
					description: 'Target list help text for tooltip display'
				},
				{
					propertyName: 'targetKeys',
					description: 'A set of keys of elements that are listed in the target column'
				},
				{
					propertyName: 'targetLabel',
					description: 'Label of the target list'
				},
				{
					propertyName: 'variant',
					description: 'Transfer list variant',
					options: [
						'simple-list',
						'check-list'
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

	getCSTransferItemDoc() {
		const json = {
			name: 'Transfer Item',
			properties: [
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					helperPropInComponents: [
						'Transfer Item'
					],
					options: [
						'false',
						'true'
					]
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getDoc();
		const component2 = this.getCSTransferItemDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2]} />
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
