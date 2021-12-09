import * as React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import CSSelect from '../../components/CSSelect';

const labelValue = 'select label';
const iconsValue = [{ iconName: 'cart' }];
const errorMessageValue = 'there is an error';
const actionsValue = [
	{
		action: () => jest.fn(),
		icon: { iconName: 'delete' },
		name: 'Delete',
	},
	{
		action: () => jest.fn(),
		icon: { iconName: 'add' },
		name: 'Add',
	},
];

describe('<CSSelect />', () => {
	it('should pass correct label value to CSLabel', () => {
		const uut = shallow(<CSSelect label={labelValue} />);
		const select = uut.find('.cs-select');
		const selectLabel = uut.find('.cs-select-wrapper > CSLabel');
		expect(select.props()['aria-label']).toBe(labelValue);
		expect(selectLabel.prop('label')).toBe(labelValue);
	});

	it('should render custom actions', () => {
		const uut = shallow(<CSSelect label={labelValue} actions={actionsValue} />);
		const selectCustomActions = uut.find('.cs-select-wrapper CSCustomDataActions');
		expect(selectCustomActions).toHaveLength(1);
		// Make sure CSCustomDataActions received correct actions object
		expect(selectCustomActions.prop('actions')).toMatchObject(actionsValue);
	});

	it('should set custom border radius', () => {
		const uut = shallow(<CSSelect label={labelValue} borderRadius="1rem" />);
		// style attribute is on .cs-select-wrapper although css property is utilized in .cs-select
		const selectField = uut.find('.cs-select-wrapper').get(0).props.style;
		expect(selectField).toHaveProperty('--cs-select-border-radius', '1rem');
	});

	it('should set disabled attribute to true', () => {
		const uut = shallow(<CSSelect label={labelValue} disabled />);
		const select = uut.find('.cs-select');
		expect(select.props().disabled).toEqual(true);
	});

	it('should render select in error state', () => {
		const uut = shallow(<CSSelect label={labelValue} error />);
		const select = uut.find('.cs-select.cs-select-error');
		expect(select.props()['aria-invalid']).toBeTruthy();
		expect(select).toHaveLength(1);
	});

	it('should pass correct errorMessage value to CSFieldErrorMsg', () => {
		const uut = shallow(<CSSelect label={labelValue} error errorMessage={errorMessageValue} />);
		const selectErrorMsg = uut.find('.cs-select-wrapper > CSFieldErrorMsg');
		expect(selectErrorMsg.prop('message')).toBe(errorMessageValue);
	});

	it('should render select in error state with an error tooltip', () => {
		const uut = shallow(<CSSelect label={labelValue} error errorMessage={errorMessageValue} errorTooltip />);
		const selectErrorMsg = uut.find('.cs-select-wrapper CSFieldErrorMsg');
		// Make sure belonging class exists
		expect(uut.find('.cs-select.cs-select-error-tooltip')).toHaveLength(1);
		// Make sure CSFieldErrorMsg prop tooltipMessage received correct value and casted into true
		expect(selectErrorMsg.prop('tooltipMessage')).toBe(true);
	});

	it('should pass correct helpText value to CSLabel', () => {
		const helpTextMsg = 'help text in tooltip';
		const uut = shallow(<CSSelect label={labelValue} helpText={helpTextMsg} />);
		const selectLabel = uut.find('CSLabel');
		// Make sure CSLabel received correct value for helpText prop
		expect(selectLabel.prop('helpText')).toBe(helpTextMsg);
	});

	it('should hide select field', () => {
		const uut = shallow(<CSSelect label={labelValue} hidden />);
		const select = uut.find('.cs-select-wrapper.cs-element-hidden');
		expect(select).toHaveLength(1);
	});

	it('should render custom icons', () => {
		const uut = shallow(<CSSelect label={labelValue} icons={iconsValue} />);
		const selectCustomIcons = uut.find('.cs-select-wrapper CSCustomDataIcons');
		expect(selectCustomIcons).toHaveLength(1);
		// Make sure CSCustomDataIcons received correct icons object
		expect(selectCustomIcons.prop('icons')).toMatchObject(iconsValue);
	});

	it('should hide label', () => {
		const uut = shallow(<CSSelect label={labelValue} labelHidden />);
		const selectLabel = uut.find('.cs-select-wrapper > CSLabel');
		expect(selectLabel).toHaveLength(0);
	});

	it('should set label title', () => {
		const uut = shallow(<CSSelect label={labelValue} labelTitle />);
		const selectLabel = uut.find('.cs-select-wrapper > CSLabel');
		expect(selectLabel.prop('title')).toBe(labelValue);
	});

	it('should set name attribute', () => {
		const nameValue = 'name';
		const uut = shallow(<CSSelect label={labelValue} name={nameValue} />);
		const select = uut.find('.cs-select');
		expect(select.props().name).toBe(nameValue);
	});

	it('should trigger onBlur event', () => {
		const handleOnBlur = jest.fn();
		const uut = mount(<CSSelect label={labelValue} onBlur={handleOnBlur} />);
		const select = uut.find('.cs-select');
		select.simulate('blur');
		expect(handleOnBlur).toHaveBeenCalled();
	});

	it('should trigger onChange event', () => {
		const handleChange = jest.fn();
		const uut = mount(<CSSelect label={labelValue} onChange={handleChange} />);
		const select = uut.find('.cs-select');
		select.simulate('change');
		expect(handleChange).toHaveBeenCalled();
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(<CSSelect label={labelValue} readOnly />);
		const select = uut.find('.cs-select.cs-select-read-only');
		expect(select.props()['aria-readonly']).toBeTruthy();
		expect(select).toHaveLength(1);
	});

	it('should set required attribute', () => {
		const uut = shallow(<CSSelect label={labelValue} required />);
		const select = uut.find('.cs-select');
		const selectLabel = uut.find('.cs-select-wrapper > CSLabel');
		// Make sure select attribute required is set
		expect(select.props().required).toEqual(true);
		expect(select.props()['aria-required']).toBeTruthy();
		// Make sure CSLabel prop required received correct value
		expect(selectLabel.prop('required')).toEqual(true);
	});

	it('should set title on field', () => {
		const titleValue = 'title';
		const uut = shallow(<CSSelect label={labelValue} title={titleValue} />);
		const select = uut.find('.cs-select');
		expect(select.props().title).toBe(titleValue);
	});

	it('should pass correct tooltipPosition value to CSLabel', () => {
		const tooltipPositionValue = 'top-left';
		const uut = shallow(<CSSelect label={labelValue} helpText="test" tooltipPosition={tooltipPositionValue} />);
		const selectLabel = uut.find('CSLabel');
		// Make sure CSLabel prop tooltipPosition has received correct value
		expect(selectLabel.prop('tooltipPosition')).toBe(tooltipPositionValue);
	});

	it('should set custom class', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSSelect label={labelValue} className={customClass} />);
		const selectWrapper = uut.find(`.cs-select-wrapper.${customClass}`);
		expect(selectWrapper).toHaveLength(1);
	});

	it('should set custom id', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSSelect label={labelValue} id={customId} />);
		const selectField = uut.find(`.cs-select#${customId}`);
		const selectLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(selectField).toHaveLength(1);
		expect(selectLabelHtmlFor).toBe(customId);
	});

	it('should render select options', () => {
		const optionValueOne = 'one';
		const optionValueTwo = 'two';
		const uut = shallow(
			<CSSelect label={labelValue}>
				<option>{optionValueOne}</option>
				<option>{optionValueTwo}</option>
			</CSSelect>,
		);
		// Make sure all options are rendered
		expect(uut.find('.cs-select > option')).toHaveLength(2);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSSelect label={labelValue} data-testid="rest" />);
		const select = uut.find({ 'data-testid': 'rest' });
		expect(select).toHaveLength(1);
	});
});
