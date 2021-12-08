import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { NavLink } from 'react-router-dom';
import CSCustomSelect from '../../components/custom-select/CSCustomSelect';
import CSCustomSelectDropdownAction from '../../components/custom-select/CSCustomSelectDropdownAction';
import CSCustomSelectOption from '../../components/custom-select/CSCustomSelectOption';
import { CSButtonIconPosition, CSButtonRole, CSButtonSize, CSButtonStyle, CSButtonType, CSButtonWidth } from '../../components/CSButton';
import { CSIconOrigin } from '../../components/CSIcon';

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

	it('should pass an array of option objects to CSCustomSelectOption', () => {
		const uut = shallow(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
		/>).dive();
		const customSelectInput = uut.find('.cs-custom-select-input > input');
		customSelectInput.simulate('click');
		uut.find('CSCustomSelectOption').forEach((customSelectOption, optionIndex) => {
			expect(customSelectOption.prop('option')).toMatchObject(options[optionIndex]);
		});
	});

	it('should pass initialPosition right value to CSAutoposition', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} align="left" />).dive();
		uut.find('input').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain('right');
	});

	it('should pass initialPosition left value to CSAutoposition', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} align="right" />).dive();
		uut.find('input').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain('left');
	});

	it('should apply border radius', () => {
		const borderRadiusSize = '1rem';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} borderRadius={borderRadiusSize} />).dive();
		const customSelectStyle = uut.find('.cs-custom-select-input-wrapper').props().style;
		expect(customSelectStyle).toHaveProperty('--cs-custom-select-border-radius', borderRadiusSize);
	});

	it('should set disabled attribute to true', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} disabled />).dive();
		expect(uut.find('.cs-custom-select-input-wrapper-disabled')).toHaveLength(1);
		expect(uut.find('.cs-custom-select-input > input').props().disabled).toEqual(true);
	});

	it('should pass correct action objects to CSCustomSelectDropdownAction', () => {
		const dropdownActions = [{
			label: 'Add department',
			iconName: 'add',
			onClick: () => alert('Department added.'),
		}, {
			label: 'Add department 2',
			iconName: 'add',
			onClick: () => alert('Department 2 added.'),
		}, {
			label: 'Add department 3',
			iconName: 'add',
			onClick: () => alert('Department 3 added.'),
		}];
		const uut = shallow(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
			dropdownActions={dropdownActions}
		/>).dive();
		const customSelectInput = uut.find('.cs-custom-select-input > input');
		customSelectInput.simulate('click');
		uut.find('.cs-autoposition CSCustomSelectDropdownAction').forEach((customSelectAction, actionIndex) => {
			expect(customSelectAction.prop('action')).toMatchObject(dropdownActions[actionIndex]);
		});
		expect(uut.find('CSAutoposition CSCustomSelectDropdownAction')).toHaveLength(3);
	});

	it('should render an error custom select', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} error />).dive();
		const input = uut.find('input');
		const inputAriaInvalid = input.prop('aria-invalid');
		expect(inputAriaInvalid).toBeTruthy();
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
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} gridCustomPopup />).dive();
		const customSelectInput = uut.find('.cs-custom-select-input > input');
		customSelectInput.simulate('click');
		expect(uut.find('.cs-custom-select-dropdown-wrapper.ag-custom-component-popup')).toHaveLength(1);
	});

	it('should render tooltip along label with a help message and pass correct value to CSLabel which renders tooltip', () => {
		const helpTextMsg = 'help text in tooltip';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} helpText={helpTextMsg} />).dive();
		const toggleLabel = uut.find('CSLabel');
		expect(toggleLabel.prop('helpText')).toBe(helpTextMsg);
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
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} multiselect selectedKeys={keys} />).dive();
		expect(uut.find('.cs-custom-select-input-wrapper-multiselect')).toHaveLength(1);
		const customSelectInputMultiselect = uut.find('.cs-custom-select-input-multiselect');
		expect(customSelectInputMultiselect).toHaveLength(1);
		expect(customSelectInputMultiselect.find('input').prop('aria-multiselectable')).toBeTruthy();
	});

	it('should invoke the onClear method when an option is selected and the clear button is clicked', () => {
		const handleClearMock = jest.fn();
		const uut = shallow(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
			selectedKeys={0}
			onClear={handleClearMock}
		/>).dive();

		const closeButton = uut.find('CSButton');
		closeButton.simulate('click', { stopPropagation: () => { } });
		expect(handleClearMock).toHaveBeenCalledTimes(1);
	});

	it('should invoke onDeselect method when multiselect item deselected onClick', () => {
		const handleDeselect = jest.fn();
		const keys = [0, 2, 3];
		const uut = shallow(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
			multiselect
			onDeselect={handleDeselect}
			selectedKeys={keys}
		/>).dive();
		const button = uut.find('.cs-custom-select-items > .cs-custom-select-option > CSButton').at(0);
		button.simulate('click', { preventDefault: () => { } });
		expect(handleDeselect).toHaveBeenCalledTimes(1);
	});

	it('should invoke onDeselect method when multiselect item deselected with enter key', () => {
		const handleDeselect = jest.fn();
		const keys = [0, 2, 3];
		const uut = shallow(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
			multiselect
			onDeselect={handleDeselect}
			selectedKeys={keys}
		/>).dive();
		const button = uut.find('.cs-custom-select-items > .cs-custom-select-option > CSButton').at(0);
		button.simulate('keydown', { key: 'Enter', preventDefault: () => { } });
		expect(handleDeselect).toHaveBeenCalledTimes(1);
	});

	it('should invoke onDeselect method when multiselect item deselected with backspace key', () => {
		const handleDeselect = jest.fn();
		const keys = [0, 2, 3];
		const uut = shallow(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
			multiselect
			onDeselect={handleDeselect}
			selectedKeys={keys}
		/>).dive();
		const input = uut.find('input');
		input.simulate('keydown', { key: 'Backspace' });
		expect(handleDeselect).toHaveBeenCalledTimes(1);
	});

	it('should call onDropdownClose', () => {
		const handleDropdownCloseMock = jest.fn();
		const uut = shallow(<CSCustomSelect
			label={customSelectTextLabel}
			options={options}
			onDropdownClose={handleDropdownCloseMock}
		/>).dive();
		const input = uut.find('input');
		input.simulate('click');
		input.simulate('keydown', { key: 'Tab' });
		expect(handleDropdownCloseMock).toHaveBeenCalledTimes(1);
	});

	it('onSearch should fire onChange method', () => {
		const handleSearchMock = jest.fn();
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} onSearch={handleSearchMock} />).dive();
		uut.find('input').simulate('change', { target: { value: 'test' } });
		expect(handleSearchMock).toHaveBeenCalledTimes(1);
	});

	it('should render custom select with placeholder attribute', () => {
		const placeholderText = 'Enter text';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} placeholder={placeholderText} />).dive();
		expect(uut.find('.cs-custom-select-input > input').prop('placeholder')).toBe(placeholderText);
	});

	it('should apply position bottom', () => {
		const bottom = 'bottom';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} position={bottom} />).dive();
		uut.find('input').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain(bottom);
	});

	it('should apply position top', () => {
		const top = 'top';
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} position={top} />).dive();
		uut.find('input').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain(top);
	});

	it('should set required attribute', () => {
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} required />).dive();
		expect(uut.find('.cs-custom-select-input > input').props().required).toEqual(true);
	});

	it('should return one element from selected keys with correct value', () => {
		const key = 3;
		const uut = shallow(<CSCustomSelect label={customSelectTextLabel} options={options} selectedKeys={key} />).dive();
		expect(uut.find('.cs-custom-select-value-wrapper > .cs-custom-select-value')).toHaveLength(1);
		expect(uut.find('.cs-custom-select-value').text()).toBe(options[key].label);
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
		const customSelectLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(element).toHaveLength(1);
		expect(customSelectLabelHtmlFor).toBe(customId);
	});
});

describe('<CSCustomSelectDropdownAction />', () => {
	const action = {
		className: 'custom-class',
		ariaExpanded: false,
		ariaHaspopup: false,
		ariaLabel: 'Add department',
		borderRadius: '1rem',
		btnStyle: 'brand' as CSButtonStyle,
		btnType: 'success' as CSButtonType,
		color: 'red',
		disabled: false,
		iconColor: 'blue',
		iconName: 'add',
		iconOrigin: 'cs' as CSIconOrigin,
		iconPosition: 'left' as CSButtonIconPosition,
		iconRotate: '90',
		iconSize: '2rem',
		id: 'custom-id',
		label: 'Add department',
		labelHidden: false,
		link: 'https://www.google.com',
		loading: false,
		onClick: () => alert('onclick'),
		onKeyDown: () => alert('onkeydown'),
		onMouseDown: () => alert('onmousedown'),
		onMouseEnter: () => alert('onmouseenter'),
		onMouseLeave: () => alert('onmouseleave'),
		openInNewTab: false,
		role: 'menuitem' as CSButtonRole,
		routerLink: <NavLink to="/utilities/LightningIcons" />,
		size: 'small' as CSButtonSize,
		title: 'custom title',
		value: 'custom value',
		width: 'max' as CSButtonWidth,
		forwardRef: {
			current: null as any,
		},
	};

	it('should return dropdown actions', () => {
		const uut = shallow(<CSCustomSelectDropdownAction action={action} focusInput={() => { }} closeDropdown={() => { }} />).dive();
		const button = uut.find('CSButton');
		const buttonProps = button.props();
		const buttonExpectedProps = { ...action, className: 'cs-custom-select-dropdown-action custom-class' };
		expect(JSON.stringify(buttonProps)).toEqual(JSON.stringify(buttonExpectedProps));
		expect(uut.find('.cs-custom-select-dropdown-action')).toHaveLength(1);
	});

	it('should invoke focusInput function when escape key is pressed', () => {
		const focusInputMock = jest.fn();
		const uut = shallow(<CSCustomSelectDropdownAction action={action} focusInput={focusInputMock} closeDropdown={() => { }} />);
		uut.simulate('keydown', { key: 'Escape' });
		expect(focusInputMock).toHaveBeenCalledTimes(1);
	});

	it('should invoke closeDropdown function when escape key is pressed', () => {
		const closeDropdownMock = jest.fn();
		const uut = shallow(<CSCustomSelectDropdownAction action={action} focusInput={() => { }} closeDropdown={closeDropdownMock} />);
		uut.simulate('keydown', { key: 'Escape' });
		expect(closeDropdownMock).toHaveBeenCalledTimes(1);
	});
});

describe('<CSCustomSelectOption />', () => {
	const option = {
		key: 5,
		label: 'Test',
	};

	it('should invoke focusInput method when input is clicked', () => {
		const focusInputMock = jest.fn();
		const uut = shallow(<CSCustomSelectOption selected={false} option={option} onSelectChange={() => { }} focusInput={focusInputMock} closeDropdown={() => { }} />);
		uut.simulate('click');
		expect(focusInputMock).toHaveBeenCalledTimes(1);
	});

	it('should return option passed down from CSCustomSelect', () => {
		const uut = shallow(<CSCustomSelectOption option={option} selected={false} onSelectChange={() => { }} focusInput={() => { }} closeDropdown={() => { }} />);
		expect(uut.find('.cs-custom-select-option-value').text()).toBe(option.label);
	});

	it('should invoke onSelectChange method when option is clicked', () => {
		const onSelectChangeMock = jest.fn();
		const uut = shallow(<CSCustomSelectOption selected={false} option={option} onSelectChange={onSelectChangeMock} focusInput={() => { }} closeDropdown={() => { }} />);
		uut.simulate('click');
		expect(onSelectChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should apply selected', () => {
		const uut = shallow(<CSCustomSelectOption selected option={option} onSelectChange={() => { }} focusInput={() => { }} closeDropdown={() => { }} />);
		expect(uut.find('.cs-custom-select-option-selected')).toHaveLength(1);
	});

	it('should invoke closeDropdown method when option is clicked', () => {
		const closeDropdownMock = jest.fn();
		const uut = shallow(<CSCustomSelectOption selected={false} option={option} onSelectChange={() => { }} focusInput={() => { }} closeDropdown={closeDropdownMock} />);
		uut.simulate('click');
		expect(closeDropdownMock).toHaveBeenCalledTimes(1);
	});

	it('should apply multiselect', () => {
		const uut = shallow(<CSCustomSelectOption multiselect selected={false} option={option} onSelectChange={() => { }} focusInput={() => { }} closeDropdown={() => { }} />);
		expect(uut.find('.cs-custom-select-option-selected')).toHaveLength(0);
		expect(uut.find('.cs-custom-select-option-check-icon')).toHaveLength(1);
	});
});
