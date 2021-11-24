import * as React from 'react';
import { render, shallow, mount } from 'enzyme';
import '../../setupTests';
import CSCustomSelect from '../../components/custom-select/CSCustomSelect';
import CSCustomSelectDropdownAction from '../../components/custom-select/CSCustomSelectDropdownAction';
import CSCustomSelectOption from '../../components/custom-select/CSCustomSelectOption';

const options = [
	{ key: 0, label: 'Product' },
	{ key: 1, label: 'Services' },
	{ key: 2, label: 'Sales' },
	{ key: 3, label: 'Marketing' },
];

const customSelectTextLabel = 'Enter value';
const errorText = 'Error message';

describe('<CSCustomSelect />', () => {
	it('should pass correct label value to CSLabel', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} />).dive();
		expect(uut.find('CSLabel').prop('label')).toBe(customSelectTextLabel);
	});

	it('should pass correct option object to CSCustomSelectOption', () => {
		const option = [{ key: 0, label: 'Product' }];
		const uut = mount(<CSCustomSelect
			label={customSelectTextLabel}
			options={option}
		/>);
		const customSelectInput = uut.find('.cs-custom-select-input > input');
		customSelectInput.simulate('click');
		const optionComponent = uut.find('.cs-autoposition CSCustomSelectOption');
		const optionObject = optionComponent.prop('option');
		expect(JSON.stringify(optionObject)).toBe(JSON.stringify(option[0]));
		uut.unmount();
	});

	it('should pass an array of option objects to CSCustomSelectOption', () => {
		const uut = mount(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
		/>);
		const customSelectInput = uut.find('.cs-custom-select-input > input');
		customSelectInput.simulate('click');
		expect(uut.find('.cs-autoposition CSCustomSelectOption')).toHaveLength(4);
		const optionObject1 = uut.find('.cs-autoposition CSCustomSelectOption').at(0).prop('option');
		expect(JSON.stringify(optionObject1)).toBe(JSON.stringify(options[0]));
		const optionObject2 = uut.find('.cs-autoposition CSCustomSelectOption').at(1).prop('option');
		expect(JSON.stringify(optionObject2)).toBe(JSON.stringify(options[1]));
		const optionObject3 = uut.find('.cs-autoposition CSCustomSelectOption').at(2).prop('option');
		expect(JSON.stringify(optionObject3)).toBe(JSON.stringify(options[2]));
		const optionObject4 = uut.find('.cs-autoposition CSCustomSelectOption').at(3).prop('option');
		expect(JSON.stringify(optionObject4)).toBe(JSON.stringify(options[3]));
		uut.unmount();
	});

	it('should pass initialPosition right value to CSAutoposition', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} align="left" />).find('CSCustomSelect').dive();
		uut.find('input').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain('right');
	});

	it('should pass initialPosition left value to CSAutoposition', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} align="right" />).find('CSCustomSelect').dive();
		uut.find('input').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain('left');
	});

	it('should apply border radius', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} borderRadius="1rem" />).dive();
		const customSelectStyle = uut.find('.cs-custom-select-input-wrapper').get(0).props.style;
		expect(customSelectStyle).toHaveProperty('--cs-custom-select-border-radius', '1rem');
	});

	it('should set disabled attribute to true', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} disabled />).dive();
		expect(uut.find('.cs-custom-select-input > input').props().disabled).toEqual(true);
	});

	it('should pass correct action object to CSCustomSelectDropdownAction', () => {
		const dropdownActions = [{
			label: 'Add department',
			iconName: 'add',
			onClick: () => alert('Department added.'),
		}];
		const uut = mount(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
			dropdownActions={dropdownActions}
		/>);
		const customSelectInput = uut.find('.cs-custom-select-input > input');
		customSelectInput.simulate('click');
		const dropdownActionComponent = uut.find('.cs-autoposition CSCustomSelectDropdownAction');
		const dropdownActionObject = dropdownActionComponent.prop('action');
		expect(JSON.stringify(dropdownActionObject)).toBe(JSON.stringify(dropdownActions[0]));
		uut.unmount();
	});

	it('should pass an array of action objects to CSCustomSelectDropdownAction', () => {
		const dropdownActions = [{
			label: 'Add department',
			iconName: 'add',
			onClick: () => alert('Department added.'),
		}, {
			label: 'Add department 2',
			iconName: 'add2',
			onClick: () => alert('Department 2 added.'),
		}, {
			label: 'Add department 3',
			iconName: 'add3',
			onClick: () => alert('Department 3 added.'),
		}];
		const uut = mount(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
			dropdownActions={dropdownActions}
		/>);
		const customSelectInput = uut.find('.cs-custom-select-input > input');
		customSelectInput.simulate('click');
		expect(uut.find('.cs-autoposition CSCustomSelectDropdownAction')).toHaveLength(3);
		uut.unmount();
	});

	it('should render an error custom select', () => {
		const uut = render(<CSCustomSelect label={customSelectTextLabel} options={options} error />);
		expect(uut.find('.cs-custom-select-input-wrapper-error')).toHaveLength(1);
	});

	it('should render an error message from string', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} error errorMessage={errorText} />).dive();
		expect(uut.find('CSFieldErrorMsg').prop('message')).toBe(errorText);
	});

	it('should pass correct error message value to CSTooltip', () => {
		const uut = shallow(
			<CSCustomSelect
				label={customSelectTextLabel}
				options={options}
				error
				errorMessage={errorText}
				errorTooltip
			/>,
		).dive();
		expect(uut.find('CSFieldErrorMsg').prop('message')).toBe(errorText);
		expect(uut.find('CSFieldErrorMsg').dive().find('CSTooltip').prop('content')).toBe(errorText);
	});

	it('should render gridCustomPopup class', () => {
		const uut = mount(<CSCustomSelect label={customSelectTextLabel} options={options} gridCustomPopup />);
		const customSelectInput = uut.find('.cs-custom-select-input > input');
		customSelectInput.simulate('click');
		const autoposition = uut.find('.cs-autoposition .cs-custom-select-dropdown-wrapper.ag-custom-component-popup');
		expect(autoposition).toBeTruthy();
		uut.unmount();
	});

	it('should render tooltip along label with a help message and pass correct value to CSLabel which renders tooltip', () => {
		const helpTextMsg = 'help text in tooltip';
		const uut = mount(<CSCustomSelect label={customSelectTextLabel} options={options} helpText={helpTextMsg} />);
		const toggleLabel = uut.find('CSLabel');
		expect(toggleLabel.prop('helpText')).toBe(helpTextMsg);
		uut.unmount();
	});

	it('should hide custom select', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} hidden />).dive();
		expect(uut.find('.cs-custom-select-wrapper.cs-element-hidden')).toHaveLength(1);
	});

	it('should not display label', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} labelHidden />).dive();
		expect(uut.find('.cs-custom-select-wrapper > CSLabel')).toHaveLength(0);
	});

	it('should display title on label', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} labelTitle />).dive();
		const customSelectLabel = uut.find('.cs-custom-select-wrapper > CSLabel');
		expect(customSelectLabel.prop('title')).toBe(customSelectTextLabel);
	});

	it('should return multiple elements from selected keys with correct values', () => {
		const keys = [0, 2, 3];
		const uut = mount(<CSCustomSelect label={customSelectTextLabel} options={options} multiselect selectedKeys={keys} />);
		expect(uut.find('.cs-custom-select-items > .cs-custom-select-option')).toHaveLength(3);
		expect(uut.find('.cs-custom-select-option-value').at(0).text()).toBe(options[0].label);
		expect(uut.find('.cs-custom-select-option-value').at(1).text()).toBe(options[2].label);
		expect(uut.find('.cs-custom-select-option-value').at(2).text()).toBe(options[3].label);
		uut.unmount();
	});

	it('onSearch should fire onChange method', () => {
		const handleOnSearchMock = jest.fn();
		const uut = mount(<CSCustomSelect label={customSelectTextLabel} options={options} onSearch={handleOnSearchMock} />);
		uut.find('input').simulate('change');
		expect(handleOnSearchMock).toHaveBeenCalledTimes(1);
		uut.unmount();
	});

	it('should apply position bottom', () => {
		const bottom = 'bottom';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} position={bottom} />).find('CSCustomSelect').dive();
		uut.find('input').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain(bottom);
	});

	it('should apply position top', () => {
		const top = 'top';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} position={top} />).find('CSCustomSelect').dive();
		uut.find('input').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain(top);
	});

	it('should render custom select with placeholder attribute', () => {
		const placeholderText = 'Enter text';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} placeholder={placeholderText} />).dive();
		expect(uut.find('.cs-custom-select-input > input').prop('placeholder')).toBe(placeholderText);
	});

	it('should set required attribute', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} required />).dive();
		expect(uut.find('.cs-custom-select-input > input').props().required).toEqual(true);
	});

	it('should return one element from selected keys with correct value', () => {
		const key = 3;
		const uut = mount(<CSCustomSelect label={customSelectTextLabel} options={options} selectedKeys={key} />);
		expect(uut.find('.cs-custom-select-value-wrapper > .cs-custom-select-value')).toHaveLength(1);
		expect(uut.find('.cs-custom-select-value').text()).toBe(options[3].label);
		uut.unmount();
	});

	it('should apply showCompactMultiselect', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} multiselect showCompactMultiselect selectedKeys={[1, 2]} />).dive();
		expect(uut.find('.cs-custom-select-value-wrapper > .cs-custom-select-value')).toHaveLength(2);
		expect(uut.find('.cs-custom-select-value').at(1).text()).toContain(',');
	});

	it('should set title attribute', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} title="title" />).dive();
		const customSelectInput = uut.find('.cs-custom-select-input > input');
		expect(customSelectInput.props().title).toBe('title');
	});

	it('should pass correct tooltip position value to CSLabel', () => {
		const tooltipPositionValue = 'top-left';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} helpText="test" tooltipPosition={tooltipPositionValue} />).dive();
		const customSelectLabel = uut.find('CSLabel');
		// Make sure CSLabel prop tooltipPosition has received correct value
		expect(customSelectLabel.prop('tooltipPosition')).toBe(tooltipPositionValue);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} className={customClass} />).dive();
		const customSelectWrapper = uut.find(`.cs-custom-select-wrapper.${customClass}`);
		expect(customSelectWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} id={customId} />).dive();
		const element = uut.find(`.cs-custom-select-wrapper#${customId}`);
		expect(element).toHaveLength(1);
	});
});

describe('<CSCustomSelectDropdownAction />', () => {
	const focusInputFn = jest.fn();
	const setDropdownVisibleFn = jest.fn();

	const action = {
		iconName: 'add',
		label: 'Add department',
	};

	it('should return dropdown actions', () => {
		const uut = shallow(<CSCustomSelectDropdownAction action={action} focusInput={() => null} setDropdownVisible={() => null} />);
		const button = uut.find('CSButton').dive();
		expect(button.prop('iconName')).toBe(action.iconName);
		expect(button.prop('label')).toBe(action.label);
		expect(uut.find('.cs-custom-select-dropdown-action')).toHaveLength(1);
	});

	it('should invoke focusInput function when escape key is pressed', () => {
		const uut = shallow(<CSCustomSelectDropdownAction action={action} focusInput={focusInputFn} setDropdownVisible={() => null} />);
		uut.simulate('keydown', { key: 'Escape' });
		expect(focusInputFn).toHaveBeenCalledTimes(1);
	});

	it('should invoke setDropdownVisible function when escape key is pressed', () => {
		const uut = shallow(<CSCustomSelectDropdownAction action={action} focusInput={() => null} setDropdownVisible={setDropdownVisibleFn} />);
		uut.simulate('keydown', { key: 'Escape' });
		expect(setDropdownVisibleFn).toHaveBeenCalledTimes(1);
	});
});

describe('<CSCustomSelectOption />', () => {
	const focusInputFn = jest.fn();
	const setDropdownVisibleFn = jest.fn();
	const onSelectChangeFn = jest.fn();

	const option = {
		key: 5,
		label: 'Test',
	};

	it('should invoke focusInput', () => {
		const uut = shallow(<CSCustomSelectOption selected={false} option={option} onSelectChange={() => null} focusInput={focusInputFn} setDropdownVisible={() => null} />);
		uut.simulate('click');
		expect(focusInputFn).toHaveBeenCalledTimes(1);
	});
	it('should return option', () => {
		const uut = shallow(<CSCustomSelectOption option={option} selected={false} onSelectChange={() => null} focusInput={() => null} setDropdownVisible={() => null} />);
		expect(uut.find('.cs-custom-select-option-value').text()).toBe(option.label);
	});

	it('should invoke onSelectChange', () => {
		const uut = shallow(<CSCustomSelectOption selected={false} option={option} onSelectChange={onSelectChangeFn} focusInput={() => null} setDropdownVisible={() => null} />);
		uut.simulate('click');
		expect(onSelectChangeFn).toHaveBeenCalledTimes(1);
	});

	it('should apply selected', () => {
		const uut = shallow(<CSCustomSelectOption selected option={option} onSelectChange={() => null} focusInput={() => null} setDropdownVisible={() => null} />);
		expect(uut.find('.cs-custom-select-option-selected')).toHaveLength(1);
	});

	it('should invoke setDropdownVisible', () => {
		const uut = shallow(<CSCustomSelectOption selected={false} option={option} onSelectChange={() => null} focusInput={() => null} setDropdownVisible={setDropdownVisibleFn} />);
		uut.simulate('click');
		expect(setDropdownVisibleFn).toHaveBeenCalledTimes(1);
	});

	it('should apply multiselect', () => {
		const uut = shallow(<CSCustomSelectOption multiselect selected={false} option={option} onSelectChange={() => null} focusInput={() => null} setDropdownVisible={() => null} />);
		expect(uut.find('.cs-custom-select-option-selected')).toHaveLength(0);
		expect(uut.find('.cs-custom-select-option-check-icon')).toHaveLength(1);
	});
});
