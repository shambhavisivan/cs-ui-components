import React, { useState } from 'react';
import { CSTransfer } from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSTransferProps from './cs-transfer-props';
import CSTransferAccessibility from './cs-transfer-accessibility';

export interface TransferState {
	[key: string]: Array<React.ReactText>;
}

const items = [
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

const CSTransferPreview = () => {
	const [state, setState] = useState<TransferState>({
		onTransferKeys: ['ff0000'],
		targetKeys: ['ff0000'],
		baseKeys: ['008000'],
		oneWayKeys: ['0000ff'],
		searchableKeys: ['ffff00'],
		selectAllKeys: ['008000'],
		labelKeys: ['0000ff'],
		labelHelpKeys: ['ff0000'],
		stylingKeys: ['008000'],
		stylingCheckListKeys: ['0000ff'],
		idKeys: ['008000'],
		classKeys: ['0000ff']
	});

	const handleTransfer = (keys: React.ReactText | Array<React.ReactText>, stateName: string) => {
		const keysArray = Array.isArray(keys) ? keys : [keys];
		const data = state[stateName];
		const newKeys = keysArray.some(key => data.includes(key)) ? data.filter((key: React.ReactText) => !keysArray.includes(key)) : [...data, ...keysArray];

		setState(prevState => ({ ...prevState, [stateName]: newKeys }));
	};

	return (
		<CSD.Page
			title="Transfer"
			accessible="yes"
			accessibility={CSTransferAccessibility}
			tables={CSTransferProps}
			routePrefix="cs-ui"
		>
			<CSD.Heading>Base Usage</CSD.Heading>
			<CSD.Section>
				<CSD.Text>
					Define an array of objects to be used as a data source.
					The object accepts `key` and `label` attributes.
					In case the key is within the `targetKeys` prop,
					that item will be displayed in the target list section.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys']}
					code={`
						const items = [
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

						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'baseKeys')}
						targetKeys={state.baseKeys}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Interaction</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Transferring Items</CSD.Heading>
				<CSD.Text>The `onTransfer` prop is a handler method for the change event. When invoked the item `keys` are returned.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys']}
					code={`
						const handleTransfer = (keys: React.ReactText | Array<React.ReactText>) => {
							const newKeys = Array.isArray(keys) ? keys : [keys];

							if (newKeys.some((key: React.ReactText) => selectedKeys.includes(key))) {
								setSelectedKeys(selectedKeys.filter((key: React.ReactText) => !newKeys.includes(key));
							} else {
								setSelectedKeys([...selectedKeys, ...newKeys]);
							}
						}

						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'onTransferKeys')}
						targetKeys={state.onTransferKeys}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Left To Right Transfers</CSD.Heading>
				<CSD.Text>The `oneWay` prop only allows left-to-right transfers. A delete button is rendered in the target list to remove the selected `key`.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys', 'oneWay']}
					code={`
						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
							oneWay
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'oneWayKeys')}
						targetKeys={state.oneWayKeys}
						oneWay
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Search For Items</CSD.Heading>
				<CSD.Text>The `searchable` prop renders a search bar for both lists which allows you to filter through each list as you type.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys', 'searchable']}
					code={`
						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
							searchable
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'searchableKeys')}
						targetKeys={state.searchableKeys}
						searchable
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Select All Items</CSD.Heading>
				<CSD.Text>The `selectAll` prop renders a checkbox to select all items in a list. It can be only used with the check-list variant.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys', 'variant', 'selectAll']}
					code={`
						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
							variant="check-list"
							selectAll
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'selectAllKeys')}
						targetKeys={state.selectAllKeys}
						variant="check-list"
						selectAll
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Data Management</CSD.Heading>
			<CSD.Section>
				<CSD.Text>An array of keys using the `targetKeys` prop corresponding to selected transfer items.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys']}
					code={`
						const [selectedKeys, setSelectedKeys] = useState(['ff0000']);

						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'targetKeys')}
						targetKeys={state.targetKeys}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Label Options</CSD.Heading>
			<CSD.Section>
				<CSD.Text>
					Set the source list and target list labels using the `sourceLabel` and `targetLabel` props.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys']}
					code={`
						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'labelKeys')}
						targetKeys={state.labelKeys}
					/>
				</CSD.Preview>
				<CSD.Text>
					The `helpText` prop allows you to set the text to be displayed in the transfer lists tooltip.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys', 'helpText']}
					code={`
						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
							helpText={{
								source: 'Source help text example.',
								target: 'Target help text example.'
							}}
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'labelHelpKeys')}
						targetKeys={state.labelHelpKeys}
						helpText={{
							source: 'Source help text example.',
							target: 'Target help text example.'
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Styling</CSD.Heading>
			<CSD.Section>
				<CSD.Text>Set a transfer list variant using the `variant` prop. It renders a simple list by default and a check list if that particular variant is set.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys', 'variant']}
					code={`
						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
						/>

						<CSTransfer
							items={items}
							variant="check-list"
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'stylingKeys')}
						targetKeys={state.stylingKeys}
					/>
					<CSTransfer
						items={items}
						variant="check-list"
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'stylingCheckListKeys')}
						targetKeys={state.stylingCheckListKeys}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>IDs &amp; Classes</CSD.Heading>
			<CSD.Section>
				<CSD.Text>You can provide a custom ID and class to the element which contains the transfer component.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTransferProps}
					related={['items', 'sourceLabel', 'targetLabel', 'onTransfer', 'targetKeys', 'id', 'className']}
					code={`
						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
							id="csd-custom-id"
						/>

						<CSTransfer
							items={items}
							sourceLabel="Source"
							targetLabel="Target"
							onTransfer={handleTransfer}
							targetKeys={selectedKeys}
							className="csd-custom-br-mint"
						/>
					`}
				>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'idKeys')}
						targetKeys={state.idKeys}
						id="csd-custom-id"
					/>
					<CSTransfer
						items={items}
						sourceLabel="Source"
						targetLabel="Target"
						onTransfer={(key: React.ReactText | Array<React.ReactText>) => handleTransfer(key, 'classKeys')}
						targetKeys={state.classKeys}
						className="csd-custom-br-mint"
					/>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSTransferPreview;
