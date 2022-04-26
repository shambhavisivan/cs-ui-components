import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { NavLink } from 'react-router-dom';
import CSPicklist from '../../components/picklist/CSPicklist';
import CSPicklistDropdownAction from '../../components/picklist/CSPicklistDropdownAction';
import CSPicklistOption from '../../components/picklist/CSPicklistOption';
import { CSButtonIconPosition, CSButtonRole, CSButtonSize, CSButtonStyle, CSButtonType, CSButtonWidth } from '../../components/CSButton';
import { CSIconOrigin } from '../../components/CSIcon';
import { actions, icons } from '../common/custom-data';

const options = [
	{ key: 0, label: 'Product' },
	{ key: 1, label: 'Services' },
	{ key: 2, label: 'Sales' },
	{ key: 3, label: 'Marketing' },
];

const picklistTextLabel = 'Enter value';
const errorText = 'Error message';

describe('<CSPicklist />', () => {
	it('should render the default CSPicklist', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} />).dive();
		uut.find('.cs-picklist-input-wrapper').simulate('click');
		// Should render picklist
		const picklist = uut.find('.cs-picklist-input');
		expect(picklist).toHaveLength(1);
		// should have a label
		const picklistWrapper = uut.find('.cs-picklist-wrapper');
		expect(picklistWrapper.find('CSLabel')).toHaveLength(1);
		// align
		const autoposition = uut.find('CSAutoposition');
		expect(autoposition.prop('initialPosition')).toContain('right');
		// position
		expect(autoposition.prop('initialPosition')).toContain('bottom');
		// disabled
		const picklistInputWrapper = uut.find('.cs-picklist-input-wrapper');
		expect(picklistInputWrapper.find('.cs-input-wrapper-disabled')).toHaveLength(0);
		// errorMessage
		const fieldErrorMessage = uut.find('CSFieldErrorMsg');
		expect(fieldErrorMessage).toHaveLength(0);
		// gridCustomPopup
		const picklistDropdownWrapper = uut.find('.cs-picklist-dropdown-wrapper');
		expect(picklistDropdownWrapper.find('.ag-custom-component-popup')).toHaveLength(0);
		// readOnly
		const readonlyPicklist = uut.find('.cs-picklist-input-wrapper.cs-picklist-read-only');
		expect(readonlyPicklist).toHaveLength(0);
		expect(picklist.find('.cs-picklist-input').prop('aria-readonly')).toBeFalsy();
		expect(uut.find('.cs-picklist-input').props().readOnly).toBeFalsy();
		// hidden
		expect(picklistWrapper.find('.cs-element-hidden')).toHaveLength(0);
		// selection
		expect(picklist.find('.cs-picklist-input-multiselect')).toHaveLength(0);
		// clearable
		expect(uut.find('CSButton.cs-picklist-clear')).toHaveLength(0);
	});

	it('should pass label to CSLabel', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} />).dive();
		expect(uut.find('CSLabel').prop('label')).toBe(picklistTextLabel);
	});

	it('should pass actions to CSCustomData', () => {
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				actions={actions}
			/>,
		).dive();
		const picklistCustomData = uut.find('CSCustomData');
		expect(picklistCustomData).toHaveLength(1);
		expect(picklistCustomData.prop('actions')).toMatchObject(actions);
	});

	it('should pass an array of option objects to CSPicklistOption', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} />).dive();
		const picklistInput = uut.find('.cs-picklist-input');
		picklistInput.simulate('click');
		uut.find('CSPicklistOption').forEach((picklistOption, optionIndex) => {
			expect(picklistOption.prop('option')).toMatchObject(options[optionIndex]);
		});
	});

	it('should pass initialPosition right to CSAutoposition', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} align="left" />).dive();
		uut.find('.cs-picklist-input-wrapper').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain('right');
	});

	it('should pass initialPosition left to CSAutoposition', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} align="right" />).dive();
		uut.find('.cs-picklist-input-wrapper').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain('left');
	});

	it('should set custom border radius', () => {
		const borderRadiusSize = '1rem';
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} borderRadius={borderRadiusSize} />).dive();
		const picklistStyle = uut.find('.cs-picklist-input-wrapper').props().style;
		expect(picklistStyle).toHaveProperty('--cs-input-border-radius', borderRadiusSize);
	});

	it('should not show a clear options button', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} selectedKeys={0} clearable={false} />).dive();
		expect(uut.find('CSButton.cs-picklist-clear')).toHaveLength(0);
	});

	it('should show a clear options button', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} selectedKeys={0} clearable />).dive();
		expect(uut.find('.cs-picklist-clear-btn')).toHaveLength(1);
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} disabled />).dive();
		expect(uut.find('.cs-input-wrapper-disabled')).toHaveLength(1);
		expect(uut.find('.cs-picklist-input').props().disabled).toEqual(true);
	});

	it('should pass action objects to CSPicklistDropdownAction', () => {
		const dropdownActions = [{
			label: 'Add department',
			iconName: 'add',
			onClick: () => { },
		}, {
			label: 'Add department 2',
			iconName: 'add',
			onClick: () => { },
		}, {
			label: 'Add department 3',
			iconName: 'add',
			onClick: () => { },
		}];
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				dropdownActions={dropdownActions}
			/>,
		).dive();
		const picklistInput = uut.find('.cs-picklist-input-wrapper');
		picklistInput.simulate('click');
		uut.find('.cs-autoposition CSPicklistDropdownAction').forEach((picklistAction, actionIndex) => {
			expect(picklistAction.prop('action')).toMatchObject(dropdownActions[actionIndex]);
		});
		expect(uut.find('CSAutoposition CSPicklistDropdownAction')).toHaveLength(3);
	});

	it('should render an error picklist', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} error />).dive();
		const input = uut.find('.cs-picklist-input');
		const inputAriaInvalid = input.prop('aria-invalid');
		expect(inputAriaInvalid).toBeTruthy();
		expect(uut.find('.cs-input-wrapper-error')).toHaveLength(1);
	});

	it('should pass errorMessage to CSFieldErrorMsg message', () => {
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				error
				errorMessage={errorText}
			/>,
		).dive();
		expect(uut.find('CSFieldErrorMsg').prop('message')).toBe(errorText);
	});

	it('should pass errorMessage to CSTooltip content', () => {
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				error
				errorMessage={errorText}
				errorTooltip
			/>,
		).dive();
		expect(uut.find('CSTooltip').prop('content')).toBe(errorText);
	});

	it('should render gridCustomPopup class', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} gridCustomPopup />).dive();
		const picklistInput = uut.find('.cs-picklist-input-wrapper');
		picklistInput.simulate('click');
		expect(uut.find('.cs-picklist-dropdown-wrapper.ag-custom-component-popup')).toHaveLength(1);
	});

	it('should render tooltip along label with a help message and pass to CSLabel which renders tooltip', () => {
		const helpTextMsg = 'help text in tooltip';
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				helpText={helpTextMsg}
			/>,
		).dive();
		const toggleLabel = uut.find('CSLabel');
		expect(toggleLabel.prop('helpText')).toBe(helpTextMsg);
	});

	it('should hide picklist', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} hidden />).dive();
		expect(uut.find('.cs-picklist-wrapper.cs-element-hidden')).toHaveLength(1);
	});

	it('should pass icons to CSCustomData', () => {
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				icons={icons}
			/>,
		).dive();
		const picklistCustomData = uut.find('CSCustomData');
		expect(picklistCustomData).toHaveLength(1);
		expect(picklistCustomData.prop('icons')).toMatchObject(icons);
	});

	it('should not display label', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} labelHidden />).dive();
		expect(uut.find('.cs-picklist-wrapper > CSLabel')).toHaveLength(0);
	});

	it('should display title on label', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} labelTitle />).dive();
		const picklistLabel = uut.find('.cs-picklist-wrapper > CSLabel');
		expect(picklistLabel.prop('title')).toBe(picklistTextLabel);
	});

	it('should return multiple elements from selected keys with correct values', () => {
		const keys = [0, 2, 3];
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} multiselect selectedKeys={keys} />).dive();
		expect(uut.find('.cs-picklist-multiselect')).toHaveLength(1);
		const picklistMultiselectInput = uut.find('.cs-picklist-input');
		expect(picklistMultiselectInput.prop('aria-multiselectable')).toBeTruthy();
	});

	it('should use a working onClear callback', () => {
		const handleClearMock = jest.fn();
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				selectedKeys={0}
				onClear={handleClearMock}
				clearable
			/>,
		).dive();
		const closeButton = uut.find('CSButton');
		closeButton.simulate('click', { stopPropagation: () => { } });
		expect(handleClearMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onBlur callback', () => {
		const handleBlurMock = jest.fn();
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				onBlur={handleBlurMock}
			/>,
		).dive();
		const input = uut.find('.cs-picklist-input');
		input.simulate('blur');
		expect(handleBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				onClick={handleClickMock}
			/>,
		).dive();
		const input = uut.find('.cs-picklist-input-wrapper');
		input.simulate('click');
		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onDeselect callback when multiselect item deselected onClick', () => {
		const handleDeselect = jest.fn();
		const keys = [0, 2, 3];
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				multiselect
				onDeselect={handleDeselect}
				selectedKeys={keys}
			/>,
		).dive();
		const button = uut.find('.cs-picklist-items > .cs-picklist-multiselect-item CSButton').at(0);
		button.simulate('click', { preventDefault: () => { } });
		expect(handleDeselect).toHaveBeenCalledTimes(1);
	});

	it('should use a working onDeselect callback when multiselect item deselected with enter key', () => {
		const handleDeselect = jest.fn();
		const keys = [0, 2, 3];
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				multiselect
				onDeselect={handleDeselect}
				selectedKeys={keys}
			/>,
		).dive();
		const button = uut.find('.cs-picklist-items > .cs-picklist-multiselect-item CSButton').at(0);
		button.simulate('keydown', { key: 'Enter', preventDefault: () => { } });
		expect(handleDeselect).toHaveBeenCalledTimes(1);
	});

	it('should use a working onDropdownClose callback', () => {
		const handleDropdownCloseMock = jest.fn();
		const uut = shallow(<CSPicklist
			label={picklistTextLabel}
			options={options}
			onDropdownClose={handleDropdownCloseMock}
		/>).dive();
		const input = uut.find('.cs-picklist-input');
		input.simulate('click');
		input.simulate('keydown', { key: 'Tab' });
		expect(handleDropdownCloseMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onFocus callback', () => {
		const handleFocus = jest.fn();
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				onFocus={handleFocus}
			/>,
		).dive();
		const input = uut.find('.cs-picklist-input');
		input.simulate('focus');
		expect(handleFocus).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleKeyDownMock = jest.fn();
		const uut = shallow(
			<CSPicklist
				label={picklistTextLabel}
				options={options}
				onKeyDown={handleKeyDownMock}
			/>,
		).dive();
		const input = uut.find('.cs-picklist-input');
		input.simulate('keydown', {} as any);
		expect(handleKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onSearch callback', () => {
		const handleSearchMock = jest.fn();
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} onSearch={handleSearchMock} />).dive();
		uut.find('.cs-picklist-input').simulate('change', { target: { value: 'test' } });
		expect(handleSearchMock).toHaveBeenCalledTimes(1);
	});

	it('should set placeholder', () => {
		const placeholderText = 'Enter text';
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} placeholder={placeholderText} />).dive();
		expect(uut.find('.cs-picklist-input').prop('placeholder')).toBe(placeholderText);
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} readOnly />).dive();
		const picklistInput = uut.find('.cs-picklist-input-wrapper.cs-input-wrapper-read-only');
		expect(picklistInput.find('.cs-picklist-input').prop('aria-readonly')).toBeTruthy();
		expect(picklistInput.find('.cs-picklist-input').props().readOnly).toBeTruthy();
		expect(picklistInput).toHaveLength(1);
	});

	it('should apply position bottom', () => {
		const bottom = 'bottom';
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} position={bottom} />).dive();
		uut.find('.cs-picklist-input-wrapper').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain(bottom);
	});

	it('should apply position top', () => {
		const top = 'top';
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} position={top} />).dive();
		uut.find('.cs-picklist-input-wrapper').simulate('click');
		expect(uut.find('CSAutoposition').prop('initialPosition')).toContain(top);
	});

	it('should set required attribute', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} required />).dive();
		expect(uut.find('.cs-picklist-input').props().required).toEqual(true);
	});

	it('should return one element from selected keys with correct value', () => {
		const key = 3;
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} selectedKeys={key} />).dive();
		expect(uut.find('.cs-picklist-value-wrapper > .cs-picklist-value')).toHaveLength(1);
		expect(uut.find('.cs-picklist-value').text()).toBe(options[key].label);
	});

	it('should apply showCompactMultiselect', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} multiselect showCompactMultiselect selectedKeys={[1, 2]} />).dive();
		expect(uut.find('.cs-picklist-value-wrapper > .cs-picklist-value')).toHaveLength(2);
		expect(uut.find('.cs-picklist-value').at(1).text()).toContain(',');
	});

	it('should set title attribute', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} title="title" />).dive();
		const picklistInput = uut.find('.cs-picklist-input');
		expect(picklistInput.props().title).toBe('title');
	});

	it('should pass tooltip position to CSLabel', () => {
		const tooltipPositionValue = 'top-left';
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} helpText="test" tooltipPosition={tooltipPositionValue} />).dive();
		const picklistLabel = uut.find('CSLabel');
		// Make sure CSLabel prop tooltipPosition has received correct value
		expect(picklistLabel.prop('tooltipPosition')).toBe(tooltipPositionValue);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} className={customClass} />).dive();
		const picklistWrapper = uut.find(`.cs-picklist-wrapper.${customClass}`);
		expect(picklistWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} id={customId} />).dive();
		const element = uut.find(`.cs-picklist-wrapper#${customId}`);
		const picklistLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(element).toHaveLength(1);
		expect(picklistLabelHtmlFor).toBe(customId);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSPicklist label={picklistTextLabel} options={options} data-testid="rest" />);
		const picklist = uut.find({ 'data-testid': 'rest' });
		expect(picklist).toHaveLength(1);
	});
});

describe('<CSPicklistDropdownAction />', () => {
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
		onClick: () => { },
		onKeyDown: () => { },
		onMouseDown: () => { },
		onMouseEnter: () => { },
		onMouseLeave: () => { },
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
		const uut = shallow(<CSPicklistDropdownAction action={action} />).dive();
		const button = uut.find('CSButton');
		const buttonProps = button.props();
		const buttonExpectedProps = { ...action, className: 'cs-picklist-dropdown-action custom-class' };
		expect(JSON.stringify(buttonProps)).toEqual(JSON.stringify(buttonExpectedProps));
		expect(uut.find('.cs-picklist-dropdown-action')).toHaveLength(1);
	});

	it('should use a working focusInput callback', () => {
		const focusInputMock = jest.fn();
		const uut = shallow(<CSPicklistDropdownAction action={action} focusInput={focusInputMock} />);
		uut.simulate('keydown', { key: 'Escape' });
		expect(focusInputMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working closeDropdown callback', () => {
		const closeDropdownMock = jest.fn();
		const uut = shallow(<CSPicklistDropdownAction action={action} closeDropdown={closeDropdownMock} />);
		uut.simulate('keydown', { key: 'Escape' });
		expect(closeDropdownMock).toHaveBeenCalledTimes(1);
	});

	// TODO: remove or fix rest prop from CSPicklistDropdownAction
	// it('should accept arbitrary props', () => {
	// 	const uut = shallow(
	// 		<CSPicklistDropdownAction
	// 			action={action}
	// 			focusInput={() => {}}
	// 			setDropdownVisible={() => {}}
	// 			data-testid="rest"
	// 		/>,
	// 	);
	// 	const picklistDropdownAction = uut.find({ 'data-testid': 'rest' });
	// 	expect(picklistDropdownAction).toHaveLength(1);
	// });
});

describe('<CSPicklistOption />', () => {
	const option = {
		key: 5,
		label: 'Test',
	};

	it('should use a working focusInput callback', async () => {
		const focusInputMock = jest.fn();
		const uut = shallow(<CSPicklistOption selected={false} option={option} focusInput={focusInputMock} onSelectChange={() => {}} />);
		uut.simulate('click');
		await new Promise((r) => setTimeout(r, 0));
		expect(focusInputMock).toHaveBeenCalledTimes(1);
	});

	it('should return option passed down from CSPicklist', () => {
		const uut = shallow(<CSPicklistOption option={option} selected={false} onSelectChange={() => {}} />);
		expect(uut.find('.cs-picklist-option-value').text()).toBe(option.label);
	});

	it('should use a working onSelectChange callback', () => {
		const onSelectChangeMock = jest.fn();
		const uut = shallow(<CSPicklistOption selected={false} option={option} onSelectChange={onSelectChangeMock} />);
		uut.simulate('click');
		expect(onSelectChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should apply selected', () => {
		const uut = shallow(<CSPicklistOption selected option={option} onSelectChange={() => {}} />);
		expect(uut.find('.cs-picklist-option-selected')).toHaveLength(1);
	});

	it('should use a working closeDropdown callback', async () => {
		const closeDropdownMock = jest.fn();
		const uut = shallow(<CSPicklistOption selected={false} option={option} closeDropdown={closeDropdownMock} onSelectChange={() => {}} />);
		uut.simulate('click');
		await new Promise((r) => setTimeout(r, 0));
		expect(closeDropdownMock).toHaveBeenCalledTimes(1);
	});

	it('should apply multiselect', () => {
		const uut = shallow(<CSPicklistOption multiselect selected={false} option={option} onSelectChange={() => {}} />);
		expect(uut.find('.cs-picklist-option-selected')).toHaveLength(0);
		expect(uut.find('.cs-picklist-option-check-icon')).toHaveLength(1);
	});
});
