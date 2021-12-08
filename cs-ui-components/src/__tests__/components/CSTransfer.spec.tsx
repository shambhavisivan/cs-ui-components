import * as React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import CSTransfer from '../../components/transfer/CSTransfer';
import CSTransferList from '../../components/transfer/CSTransferList';
import CSTransferItem from '../../components/transfer/CSTransferItem';
import { CSTransferContextProvider } from '../../components/transfer/CSTransferContext';

const sourceListLabel = 'Source';
const targetListLabel = 'Target';
const simpleListVariant = 'simple-list';
const checkListVariant = 'check-list';
const sourceListType = 'source';
const targetListType = 'target';
const onTransferMock = jest.fn();
const helpText = 'Help text';
const items = [
	{
		key: 'ff0000',
		label: 'red',
	}, {
		key: '008000',
		label: 'green',
	}, {
		key: '0000ff',
		label: 'blue',
	}, {
		key: 'ffff00',
		label: 'yellow',
	},
];

describe('<CSTransfer />', () => {
	it('should render the default CSTransfer', () => {
		const uut = shallow(
			<CSTransfer
				items={items}
				sourceLabel={sourceListLabel}
				targetLabel={targetListLabel}
			/>,
		).dive();
		// Should render transfer lists
		const transferLists = uut.find('.cs-transfer-wrapper > CSTransferList');
		expect(transferLists).toHaveLength(2);
		const sourceList = transferLists.at(0);
		const targetList = transferLists.at(1);
		// Should render transfer actions
		const transferActions = uut.find('.cs-transfer-actions > CSButton');
		expect(transferActions).toHaveLength(2);
		// sourceLabel | targetLabel
		expect(sourceList.prop('listType')).toBe(sourceListType);
		expect(targetList.prop('listType')).toBe(targetListType);
		// items
		expect(sourceList.dive().find('CSTransferItem')).toHaveLength(4);
	});

	it('should pass source list and target list labels to CSTransferList components', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
			/>,
		).dive();
		const transferLabels = uut.find('CSTransferList');
		expect(transferLabels.at(0).prop('label')).toBe(sourceListLabel);
		expect(transferLabels.at(1).prop('label')).toBe(targetListLabel);
	});

	it('should pass help text to source CSTransferList', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				helpText={{ source: helpText }}
			/>,
		).dive();
		const sourceList = uut.find('CSTransferList').at(0);
		const sourceHelpText = sourceList.prop('helpText');
		expect(sourceHelpText).toBe(helpText);
	});

	it('should pass help text to target CSTransferList', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				helpText={{ target: helpText }}
			/>,
		);
		const targetList = uut.find('CSTransferList').at(1).dive();
		const targetHelpText = targetList.find('CSLabel').prop('helpText');
		expect(targetHelpText).toBe(helpText);
	});

	it('should call onTransfer', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				onTransfer={onTransferMock}
			/>,
		).dive();
		const sourceList = uut.find('CSTransferList').at(0).dive();
		const sourceListItem = sourceList.find('CSTransferItem').at(0);
		const moveToTargetAction = uut.find('CSButton').at(0);
		sourceListItem.simulate('click');
		moveToTargetAction.simulate('click');
		expect(onTransferMock).toHaveBeenCalledTimes(1);
	});

	it('should set list item to target list based on targetKeys value', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				targetKeys={['ff0000']}
			/>,
		).dive();
		const targetList = uut.find('CSTransferList').at(1).dive();
		const targetListItem = targetList.find('CSTransferItem').dive().find('.cs-transfer-li-simple');
		expect(targetListItem).toHaveLength(1);
		expect(targetListItem.text()).toBe('red');
	});

	it('should render transfer with one button for transfering items from source to target', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				targetKeys={['ff0000']}
				oneWay
			/>,
		);
		const transferAction = uut.find('div.cs-transfer-actions CSButton');
		expect(transferAction).toHaveLength(1);
	});

	it('should call onTransfer if delete button on one-way target list item is clicked', () => {
		const uut = mount(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				oneWay
				targetKeys={['ff0000']}
				onTransfer={onTransferMock}
			/>,
		);
		const targetListItemDelete = uut.find('.cs-transfer-list-wrapper ul').at(1).find('.cs-transfer-li-one-way .cs-btn');
		targetListItemDelete.simulate('click');
		expect(onTransferMock).toHaveBeenCalled();
	});

	it('should pass searchable to CSTransferLists', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				searchable
			/>,
		).dive();
		const transferLists = uut.find('CSTransferList');
		const sourceList = transferLists.at(0);
		const targetList = transferLists.at(1);
		expect(sourceList.prop('searchable')).toBeTruthy();
		expect(targetList.prop('searchable')).toBeTruthy();
	});

	it('should pass simple-list variant to CSTransferLists', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
			/>,
		);
		const transferLists = uut.find('CSTransferList');
		const sourceList = transferLists.at(0);
		const targetList = transferLists.at(1);
		expect(sourceList.prop('variant')).toBe(simpleListVariant);
		expect(targetList.prop('variant')).toBe(simpleListVariant);
	});

	it('should pass check-list variant to CSTransferLists', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				variant={checkListVariant}
			/>,
		);
		const transferLists = uut.find('CSTransferList');
		const sourceList = transferLists.at(0);
		const targetList = transferLists.at(1);
		expect(sourceList.prop('variant')).toBe(checkListVariant);
		expect(targetList.prop('variant')).toBe(checkListVariant);
	});

	it('should pass selectAll to CSTransferLists', () => {
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				variant={checkListVariant}
				selectAll
			/>,
		).dive();
		const transferLists = uut.find('CSTransferList');
		const sourceList = transferLists.at(0);
		const targetList = transferLists.at(1);
		expect(sourceList.prop('selectAll')).toBeTruthy();
		expect(targetList.prop('selectAll')).toBeTruthy();
	});

	it('should render transfer with custom class', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				className={customClass}
			/>,
		);
		expect(uut.find(`.cs-transfer-wrapper.${customClass}`)).toHaveLength(1);
	});

	it('should render transfer with custom ID', () => {
		const customID = 'custom-id';
		const uut = shallow(
			<CSTransfer
				targetLabel={targetListLabel}
				sourceLabel={sourceListLabel}
				items={items}
				id={customID}
			/>,
		);
		expect(uut.find('.cs-transfer-wrapper').prop('id')).toBe(customID);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(
			<CSTransfer
				items={items}
				sourceLabel={sourceListLabel}
				targetLabel={targetListLabel}
				data-testid="rest"
			/>,
		);
		const transfer = uut.find({ 'data-testid': 'rest' });
		expect(transfer).toHaveLength(1);
	});
});

describe('<CSTransferList />', () => {
	it('should render list wrappers and ul element with CSTransferItem components', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={simpleListVariant}
				listType={sourceListType}
			/>,
		);
		const transferListItems = uut.find('div.cs-transfer-list-wrapper > div.cs-transfer-list-group > ul.cs-transfer-list > CSTransferItem');
		expect(transferListItems).toHaveLength(4);
	});

	it('should pass label to CSLabel', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={simpleListVariant}
				listType={sourceListType}
			/>,
		);
		const transferLabel = uut.find('.cs-transfer-list-wrapper > CSLabel');
		expect(transferLabel.prop('label')).toBe(sourceListLabel);
	});

	it('should pass simple-list variant to CSTransferItem', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={simpleListVariant}
				listType={sourceListType}
			/>,
		);
		const transferListItem = uut.find('CSTransferItem').at(0);
		expect(transferListItem.prop('itemVariant')).toBe(simpleListVariant);
	});

	it('should pass check-list variant to CSTransferItem', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={checkListVariant}
				listType={sourceListType}
			/>,
		);
		const transferListItem = uut.find('CSTransferItem').at(0);
		expect(transferListItem.prop('itemVariant')).toBe(checkListVariant);
	});

	it('should pass source listType to CSTransferItem', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={checkListVariant}
				listType={sourceListType}
			/>,
		);
		const transferListItem = uut.find('CSTransferItem').at(0);
		expect(transferListItem.prop('listType')).toBe(sourceListType);
	});

	it('should pass target listType to CSTransferItem', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={checkListVariant}
				listType={targetListType}
			/>,
		);
		const transferListItem = uut.find('CSTransferItem').at(0);
		expect(transferListItem.prop('listType')).toBe(targetListType);
	});

	it('should render correct node if no items are present in listItems prop', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={[]}
				variant={checkListVariant}
				listType={sourceListType}
			/>,
		);
		const noDataNode = uut.find('ul.cs-transfer-list > li.cs-transfer-list-no-data');
		const noDataNodeIcon = noDataNode.find('CSIcon');
		const noDataNodeText = noDataNode.find('span.cs-transfer-list-no-data-text').text();
		expect(noDataNodeIcon.prop('name')).toBe('error');
		expect(noDataNodeIcon.prop('color')).toBe('var(--cs-transfer-list-no-data-c)');
		expect(noDataNodeText).toBe('No data');
	});

	it('should pass helpText to CSLabel', () => {
		const transferListHelpText = 'Help text.';
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={simpleListVariant}
				listType={sourceListType}
				helpText={transferListHelpText}
			/>,
		);
		const transferLabel = uut.find('.cs-transfer-list-wrapper > CSLabel');
		expect(transferLabel.prop('helpText')).toBe(transferListHelpText);
	});

	it('should render select all CSCheckbox in transfer list header', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={checkListVariant}
				listType={sourceListType}
				selectAll
			/>,
		);
		const selectAllCheckbox = uut.find('div.cs-transfer-list-header > CSCheckbox');
		expect(selectAllCheckbox).toHaveLength(1);
	});

	it('should render disabled CSCheckbox in transfer list header if no list items are defined', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={[]}
				variant={checkListVariant}
				listType={sourceListType}
				selectAll
			/>,
		);
		const selectAllCheckbox = uut.find('div.cs-transfer-list-header > CSCheckbox');
		expect(selectAllCheckbox.prop('disabled')).toBeTruthy();
	});

	it('should render CSInputSearch in transfer list header', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={checkListVariant}
				listType={sourceListType}
				searchable
			/>,
		);
		const inputSearch = uut.find('div.cs-transfer-list-header > CSInputSearch');
		expect(inputSearch).toHaveLength(1);
	});

	it('should render disabled CSInputSearch in transfer list header if no list items are defined', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={[]}
				variant={checkListVariant}
				listType={sourceListType}
				searchable
			/>,
		);
		const inputSearch = uut.find('div.cs-transfer-list-header > CSInputSearch');
		expect(inputSearch.prop('disabled')).toBeTruthy();
	});

	it('should correctly filter items by CSInputSearch search term', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={checkListVariant}
				listType={sourceListType}
				searchable
			/>,
		);
		const inputSearch = uut.find('div.cs-transfer-list-header > CSInputSearch');
		inputSearch.prop('onChange')({ target: { value: 'red' } } as React.ChangeEvent<HTMLInputElement>);
		const transferItem = uut.find('CSTransferItem');
		expect(transferItem.prop('label')).toBe('red');
	});

	it('should set CSTransferItem selected prop if key is in selectList', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={checkListVariant}
				listType={sourceListType}
				searchable
				selectList={['ff0000']}
			/>,
		);
		const transferItem = uut.find('CSTransferItem').at(0);
		expect(transferItem.prop('selected')).toBeTruthy();
	});

	it('should pass item key to CSTransferItem', () => {
		const uut = shallow(
			<CSTransferList
				label={sourceListLabel}
				listItems={items}
				variant={checkListVariant}
				listType={sourceListType}
			/>,
		);
		const transferListItem = uut.find('CSTransferItem').at(0);
		expect(transferListItem.prop('itemKey')).toBe(items[0].key);
	});
});

describe('<CSTransferItem />', () => {
	it('should render simple-list list item with label', () => {
		const uut = shallow(
			<CSTransferItem
				itemKey={items[0].key}
				label={items[0].label}
				itemVariant={simpleListVariant}
			/>,
		);
		const transferListItem = uut.find('li > button.cs-transfer-li.cs-transfer-li-simple');
		expect(transferListItem).toHaveLength(1);
		expect(transferListItem.text()).toBe(items[0].label);
	});

	it('should render check-list list item with label', () => {
		const uut = shallow(
			<CSTransferItem
				itemKey={items[0].key}
				label={items[0].label}
				itemVariant={checkListVariant}
			/>,
		);
		const transferListItem = uut.find('li.cs-transfer-li.cs-transfer-li-check-list');
		const transferListLabel = transferListItem.find('.cs-transfer-li-label');
		const transferListCheckbox = transferListLabel.find('CSCheckbox');
		expect(transferListItem).toHaveLength(1);
		expect(transferListLabel.text()).toBe(`<CSCheckbox />${items[0].label}`);
		expect(transferListCheckbox).toHaveLength(1);
	});

	it('should render disabled simple-list list item', () => {
		const uut = shallow(
			<CSTransferItem
				itemKey={items[0].key}
				label={items[0].label}
				itemVariant={simpleListVariant}
				disabled
			/>,
		);
		const disabledTransferListItem = uut.find('button.cs-transfer-li-disabled');
		expect(disabledTransferListItem).toHaveLength(1);
		expect(disabledTransferListItem.props().disabled).toBeTruthy();
	});

	it('should render disabled check-list list item', () => {
		const uut = shallow(
			<CSTransferItem
				itemKey={items[0].key}
				label={items[0].label}
				itemVariant={checkListVariant}
				disabled
			/>,
		);
		const disabledTransferListItem = uut.find('li.cs-transfer-li-disabled');
		const disabledCheckbox = disabledTransferListItem.find('CSCheckbox');
		expect(disabledTransferListItem).toHaveLength(1);
		expect(disabledCheckbox.prop('disabled')).toBeTruthy();
	});

	it('should call onSelect when simple-list button is clicked', () => {
		const onSelectMock = jest.fn();
		const uut = shallow(
			<CSTransferItem
				itemKey={items[0].key}
				label={items[0].label}
				itemVariant={simpleListVariant}
				onSelect={onSelectMock}
			/>,
		);
		uut.find('button').simulate('click');
		expect(onSelectMock).toHaveBeenCalledTimes(1);
	});

	it('should call onSelect when check-list checkbox is changed', () => {
		const onSelectMock = jest.fn();
		const uut = shallow(
			<CSTransferItem
				itemKey={items[0].key}
				label={items[0].label}
				itemVariant={checkListVariant}
				onSelect={onSelectMock}
			/>,
		);
		uut.find('CSCheckbox').simulate('change');
		expect(onSelectMock).toHaveBeenCalledTimes(1);
	});

	it('should render selected simple-list list item', () => {
		const uut = shallow(
			<CSTransferItem
				itemKey={items[0].key}
				label={items[0].label}
				itemVariant={simpleListVariant}
				selected
			/>,
		);
		const selectedTransferListItem = uut.find('button.cs-transfer-li-selected');
		expect(selectedTransferListItem).toHaveLength(1);
		expect(selectedTransferListItem.prop('aria-selected')).toBeTruthy();
	});

	it('should render selected check-list list item', () => {
		const uut = shallow(
			<CSTransferItem
				itemKey={items[0].key}
				label={items[0].label}
				itemVariant={checkListVariant}
				selected
			/>,
		);
		const selectedTransferListItem = uut.find('li.cs-transfer-li-selected');
		const selectedCheckbox = selectedTransferListItem.find('CSCheckbox');
		expect(selectedTransferListItem).toHaveLength(1);
		expect(selectedCheckbox.prop('checked')).toBeTruthy();
	});

	it('should render one-way list item with delete button', () => {
		const uut = mount(
			<CSTransferContextProvider
				onSelectChange={() => jest.fn()}
				onTransfer={onTransferMock}
				oneWay
			>
				<CSTransferItem
					itemKey={items[0].key}
					label={items[0].label}
					itemVariant={simpleListVariant}
					listType="target"
				/>
			</CSTransferContextProvider>,
		);
		const transferListItem = uut.find('.cs-transfer-li-one-way');
		const deleteButton = transferListItem.find('.cs-transfer-li > CSButton');
		expect(transferListItem).toHaveLength(1);
		expect(deleteButton.prop('iconName')).toBe('delete');
	});
});
