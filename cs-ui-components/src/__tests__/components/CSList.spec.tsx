import * as React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CSList from '../../components/list/CSList';
import CSListItem from '../../components/list/CSListItem';
import CSListGroup from '../../components/list/CSListGroup';
import CSButton from '../../components/CSButton';

const listGroupText = 'List group';

describe('<CSList />', () => {
	it('should render default CSList', () => {
		const uut = shallow(
			<CSList size="medium">
				<CSListItem />
			</CSList>,
		);
		const listItem = uut.find('.cs-list-wrapper > CSListItem');
		expect(listItem.dive().find('.cs-list-item-medium.cs-list-item-simple-list')).toHaveLength(1);
	});
	it('should pass small size value to list item', () => {
		const size = 'small';
		const uut = shallow(
			<CSList size={size}>
				<CSListItem />
			</CSList>,
		);
		const listItem = uut.find('.cs-list-wrapper > CSListItem');
		expect(listItem.prop('listSize')).toBe(size);
		expect(listItem.dive().find('.cs-list-item-small.cs-list-item-simple-list')).toHaveLength(1);
	});

	it('should pass medium size value to list item', () => {
		const size = 'medium';
		const uut = shallow(
			<CSList size={size}>
				<CSListItem />
			</CSList>,
		);
		const listItem = uut.find('.cs-list-wrapper > CSListItem');
		expect(listItem.prop('listSize')).toBe(size);
		expect(listItem.dive().find('.cs-list-item-medium.cs-list-item-simple-list')).toHaveLength(1);
	});

	it('should pass large size value to list item', () => {
		const size = 'large';
		const uut = shallow(
			<CSList size={size}>
				<CSListItem />
			</CSList>,
		);
		const listItem = uut.find('.cs-list-wrapper > CSListItem');
		expect(listItem.prop('listSize')).toBe(size);
		expect(listItem.dive().find('.cs-list-item-large.cs-list-item-simple-list')).toHaveLength(1);
	});

	it('should be a simple list variant', () => {
		const variant = 'simple-list';
		const uut = shallow(
			<CSList>
				<CSListItem variant={variant} />
			</CSList>,
		);
		const listItem = uut.find('.cs-list-wrapper > CSListItem');
		expect(listItem.prop('listVariant')).toBe(variant);
		expect(listItem.dive().find('.cs-list-item-simple-list')).toHaveLength(1);
	});

	it('should be a check list variant', () => {
		const variant = 'check-list';
		const uut = shallow(
			<CSList variant={variant}>
				<CSListItem />
			</CSList>,
		);
		const listItem = uut.find('.cs-list-wrapper > CSListItem');
		expect(listItem.prop('listVariant')).toBe(variant);
		expect(listItem.dive().find('.cs-list-item-check-list')).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSList className={customClass} />);
		expect(uut.find(`.cs-list-wrapper.${customClass}`));
	});

	it('should have a custom id', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSList id={customId} />);
		expect(uut.find(`.cs-list-wrapper#${customId}`));
	});

	it('should render children', () => {
		const uut = shallow(
			<CSList>
				<div className="custom-child" />
			</CSList>,
		);
		expect(uut.find('.cs-list-wrapper > .custom-child')).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSList data-testid="rest" />);
		const list = uut.find({ 'data-testid': 'rest' });
		expect(list).toHaveLength(1);
	});
});

describe('<CSListItem />', () => {
	it('should render default CSListItem', () => {
		const uut = shallow(
			<CSList>
				<CSListItem />
			</CSList>,
		);
		const listItem = uut.find('CSListItem');
		expect(listItem.dive().find('.cs-list-item-simple-list')).toHaveLength(1);
		expect(listItem.prop('disabled')).toBeFalsy();
		expect(listItem.prop('selected')).toBeFalsy();
		expect(listItem.prop('aria-selected')).toBeFalsy();
	});

	it('should have custom content', () => {
		const uut = shallow(<CSListItem customContent={(<CSButton label="Button" />)} />);
		const customContent = uut.find('.cs-list-item > .cs-list-item-custom-content');
		expect(customContent.find('CSButton')).toHaveLength(1);
	});

	it('should be a disabled simple list variant ', () => {
		const uut = shallow(
			<CSList>
				<CSListItem disabled />
			</CSList>,
		);
		const listItem = uut.find('CSListItem').dive().find('.cs-list-item-disabled');
		expect(listItem).toHaveLength(1);
		expect(listItem.prop('tabIndex')).toBe(-1);
	});

	it('should be a disabled check list variant ', () => {
		const uut = shallow(
			<CSList variant="check-list">
				<CSListItem disabled />
			</CSList>,
		);
		const listItem = uut.find('CSListItem');
		expect(listItem.dive().find('.cs-list-item-disabled')).toHaveLength(1);
		expect(listItem.dive().find('CSCheckbox').prop('disabled')).toBeTruthy();
	});

	it('should trigger onSelectChange function with click event', () => {
		const handleOnSelectChangeMock = jest.fn();
		const uut = shallow(
			<CSList>
				<CSListItem onSelectChange={handleOnSelectChangeMock} />
			</CSList>,
		);
		const listItem = uut.find('CSListItem').dive().find('.cs-list-item-wrapper > .cs-list-item');
		listItem.simulate('click');
		expect(handleOnSelectChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should render selected list item in simple-list list variant', () => {
		const uut = shallow(
			<CSList>
				<CSListItem selected />
			</CSList>,
		);
		const listItem = uut.find('CSListItem').dive().find('.cs-list-item-selected');
		expect(listItem).toHaveLength(1);
		expect(listItem.prop('aria-selected')).toBeTruthy();
	});

	it('should render selected checkbox in check-list list variant', () => {
		const uut = shallow(
			<CSList variant="check-list">
				<CSListItem selected />
			</CSList>,
		);
		const listItem = uut.find('CSListItem');
		expect(listItem.dive().find('.cs-list-item-check-list')).toHaveLength(1);
		expect(listItem.dive().find('CSCheckbox').prop('checked')).toBeTruthy();
	});

	it('should have text', () => {
		const text = 'List item';
		const uut = shallow(<CSListItem text={text} />);
		expect(uut.find('.cs-list-item-text').text()).toBe(text);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSListItem className={customClass} />);
		expect(uut.find(`.cs-list-item-wrapper.${customClass}`));
	});

	it('should have a custom id', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSListItem id={customId} />);
		expect(uut.find(`.cs-list-item-wrapper#${customId}`));
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSListItem data-testid="rest" />);
		const listItem = uut.find({ 'data-testid': 'rest' });
		expect(listItem).toHaveLength(1);
	});
});

describe('<CSListGroup />', () => {
	it('should render default CSListGroup', () => {
		const uut = shallow(
			<CSList>
				<CSListGroup text={listGroupText} />
			</CSList>,
		);
		const listGroup = uut.find('CSListGroup');
		// Check if it's collapsible
		expect(listGroup.dive().find('CSIcon')).toHaveLength(1);
		expect(listGroup.dive().find('.cs-list-group-header-simple-list')).toHaveLength(1);
		expect(listGroup.prop('checkboxOption')).toBe('select-all');
	});

	it('should select all list items', () => {
		const checkboxOption = 'select-all';
		const uut = shallow(
			<CSList variant="check-list">
				<CSListGroup text={listGroupText} checkboxOption={checkboxOption}>
					<CSListItem />
					<CSListItem />
				</CSListGroup>
			</CSList>,
		);
		const listGroup = uut.find('CSListGroup').dive();
		const listGroupCheckbox = listGroup.find('.cs-list-group-header-inner-wrapper  > CSCheckbox').dive().find('.cs-checkbox');
		listGroupCheckbox.simulate('change');
		const firstListItem = listGroup.find('CSListItem').at(0).dive();
		const secondListItem = listGroup.find('CSListItem').at(1).dive();
		expect(firstListItem.find('CSCheckbox').prop('checked')).toBeTruthy();
		expect(secondListItem.find('CSCheckbox').prop('checked')).toBeTruthy();
	});

	it('should select self', () => {
		const checkboxOption = 'select-self';
		const uut = shallow(
			<CSList variant="check-list">
				<CSListGroup text={listGroupText} checkboxOption={checkboxOption}>
					<CSListItem />
					<CSListItem />
				</CSListGroup>
			</CSList>,
		);
		const listGroup = uut.find('CSListGroup').dive();
		const listGroupCheckbox = listGroup.find('.cs-list-group-header-inner-wrapper  > CSCheckbox').dive().find('.cs-checkbox');
		listGroupCheckbox.simulate('change');
		const firstListItem = listGroup.find('CSListItem').at(0).dive();
		const secondListItem = listGroup.find('CSListItem').at(1).dive();
		expect(firstListItem.find('CSCheckbox').prop('checked')).toBeFalsy();
		expect(secondListItem.find('CSCheckbox').prop('checked')).toBeFalsy();
		expect(listGroup.find('CSCheckbox').prop('checked')).toBeTruthy();
	});

	it('should not be selectable', () => {
		const uut = shallow(
			<CSList variant="check-list">
				<CSListGroup text={listGroupText} checkboxOption="not-selectable" />
			</CSList>,
		);
		const listGroup = uut.find('CSListGroup');
		expect(listGroup.dive().find('CSCheckbox')).toHaveLength(0);
	});

	it('should be collapsible', () => {
		const uut = shallow(<CSListGroup text={listGroupText} collapsible />);
		expect(uut.find('CSIcon')).toHaveLength(1);
	});

	it('should not be collapsible', () => {
		const uut = shallow(<CSListGroup text={listGroupText} collapsible={false} />);
		expect(uut.find('.cs-list-group-header-noncollapsible')).toHaveLength(1);
	});

	it('should have custom content', () => {
		const uut = shallow(
			<CSList>
				<CSListGroup
					text={listGroupText}
					customContent={(
						<CSButton label="delete" />
					)}
				/>
			</CSList>,
		);
		const listGroup = uut.find('CSListGroup');
		const customContentWrapper = listGroup.dive().find('.cs-list-group-header-inner-wrapper > .cs-list-group-header-custom-content');
		expect(customContentWrapper).toHaveLength(1);
		const customContent = listGroup.dive().find('CSButton');
		expect(customContent).toHaveLength(1);
	});

	it('should not have custom content', () => {
		const uut = shallow(
			<CSList>
				<CSListGroup text={listGroupText} />
			</CSList>,
		);
		const listGroup = uut.find('CSListGroup');
		const customContentWrapper = listGroup.dive().find('.cs-list-group-header-inner-wrapper > .cs-list-group-header-custom-content');
		expect(customContentWrapper).toHaveLength(0);
	});

	it('should be a simple list variant', () => {
		const uut = shallow(
			<CSList>
				<CSListGroup text={listGroupText} />
			</CSList>,
		);
		const listGroup = uut.find('CSListGroup');
		expect(listGroup.dive().find('CSIcon')).toHaveLength(1);
		expect(listGroup.dive().find('.cs-list-group-header-simple-list')).toHaveLength(1);
	});

	it('should be a check list variant', () => {
		const uut = shallow(
			<CSList variant="check-list">
				<CSListGroup text={listGroupText} />
			</CSList>,
		);
		const listGroup = uut.find('CSListGroup');
		expect(listGroup.dive().find('CSCheckbox')).toHaveLength(1);
		expect(listGroup.dive().find('.cs-list-group-header-check-list')).toHaveLength(1);
	});

	it('should trigger onSelectChange function with change event', () => {
		const handleOnSelectChangeMock = jest.fn();
		const uut = shallow(
			<CSList variant="check-list">
				<CSListGroup text={listGroupText} onSelectChange={handleOnSelectChangeMock} />
			</CSList>,
		);
		const checkbox = uut.find('CSListGroup').dive().find('.cs-list-group-header-inner-wrapper').find('CSCheckbox')
			.dive()
			.find('.cs-checkbox');
		checkbox.simulate('change');
		expect(handleOnSelectChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should be a simple list variant with text', () => {
		const uut = shallow(
			<CSList>
				<CSListGroup text={listGroupText} />
			</CSList>,
		);
		const listGroup = uut.find('CSListGroup');
		expect(listGroup.dive().find('.cs-list-group-header-inner-wrapper > .cs-list-group-header-text')).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSListGroup text={listGroupText} className={customClass} />);
		expect(uut.find(`.cs-list-group-wrapper.${customClass}`));
	});

	it('should have a custom id', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSListGroup text={listGroupText} id={customId} />);
		expect(uut.find(`.cs-list-group-wrapper#${customId}`));
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSListGroup text={listGroupText} data-testid="rest" />);
		const listGroup = uut.find({ 'data-testid': 'rest' });
		expect(listGroup).toHaveLength(1);
	});
});
