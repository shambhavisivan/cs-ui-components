import * as React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import CSSelect from '../../components/CSSelect';
import { actions, icons } from '../common/custom-data';

const labelValue = 'select label';
const errorMessageValue = 'there is an error';

describe('<CSSelect />', () => {
	it('should render the default CSSelect', () => {
		const uut = shallow(<CSSelect label={labelValue} />);
		// Should render a select
		const select = uut.find('.cs-select');
		expect(select).toHaveLength(1);
		// Should render a label
		const selectLabel = uut.find('.cs-select-wrapper > CSLabel');
		expect(selectLabel).toHaveLength(1);
		// disabled
		expect(select.props().disabled).toBeFalsy();
		// error
		const errorSelect = uut.find('.cs-select.cs-select-error');
		expect(errorSelect).toHaveLength(0);
		expect(select.prop('aria-invalid')).toBeFalsy();
		// readOnly
		const readonlySelect = uut.find('.cs-select.cs-select-read-only');
		expect(readonlySelect).toHaveLength(0);
		expect(select.prop('aria-readonly')).toBeFalsy();
		// required
		expect(select.props().required).toBeFalsy();
		expect(select.prop('aria-required')).toBeFalsy();
		expect(selectLabel.prop('required')).toBeFalsy();
	});

	it('should pass label to CSLabel', () => {
		const uut = shallow(<CSSelect label={labelValue} />);
		const select = uut.find('.cs-select');
		const selectLabel = uut.find('.cs-select-wrapper > CSLabel');
		expect(select.prop('aria-label')).toBe(labelValue);
		expect(selectLabel.prop('label')).toBe(labelValue);
	});

	it('should pass actions to CSCustomData', () => {
		const uut = shallow(<CSSelect label={labelValue} actions={actions} />);
		const selectCustomData = uut.find('.cs-select-wrapper CSCustomData');
		expect(selectCustomData).toHaveLength(1);
		expect(selectCustomData.prop('actions')).toMatchObject(actions);
	});

	it('should set custom border radius', () => {
		const uut = shallow(<CSSelect label={labelValue} borderRadius="1rem" />);
		// style attribute is on .cs-select-wrapper although css property is utilized in .cs-select
		const selectField = uut.find('.cs-select-wrapper').get(0).props.style;
		expect(selectField).toHaveProperty('--cs-select-border-radius', '1rem');
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSSelect label={labelValue} disabled />);
		const select = uut.find('.cs-select');
		expect(select.props().disabled).toEqual(true);
	});

	it('should render select in error state', () => {
		const uut = shallow(<CSSelect label={labelValue} error />);
		const select = uut.find('.cs-select.cs-select-error');
		expect(select.prop('aria-invalid')).toBeTruthy();
		expect(select).toHaveLength(1);
	});

	it('should pass errorMessage to CSFieldErrorMsg', () => {
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

	it('should pass helpText to CSLabel', () => {
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

	it('should pass icons to CSCustomData', () => {
		const uut = shallow(<CSSelect label={labelValue} icons={icons} />);
		const selectCustomData = uut.find('.cs-select-wrapper CSCustomData');
		expect(selectCustomData).toHaveLength(1);
		expect(selectCustomData.prop('icons')).toMatchObject(icons);
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

	it('should use a working onBlur callback', () => {
		const handleOnBlur = jest.fn();
		const uut = mount(<CSSelect label={labelValue} onBlur={handleOnBlur} />);
		const select = uut.find('.cs-select');
		select.simulate('blur');
		expect(handleOnBlur).toHaveBeenCalled();
	});

	it('should use a working onChange callback', () => {
		const handleChange = jest.fn();
		const uut = mount(<CSSelect label={labelValue} onChange={handleChange} />);
		const select = uut.find('.cs-select');
		select.simulate('change');
		expect(handleChange).toHaveBeenCalled();
	});

	it('should use a working onClick callback', () => {
		const handleClick = jest.fn();
		const uut = mount(<CSSelect label={labelValue} onClick={handleClick} />);
		const select = uut.find('.cs-select');
		select.simulate('click');
		expect(handleClick).toHaveBeenCalled();
	});

	it('should use a working onKeyDown callback', () => {
		const handleKeyDown = jest.fn();
		const uut = mount(<CSSelect label={labelValue} onKeyDown={handleKeyDown} />);
		const select = uut.find('.cs-select');
		select.simulate('keydown');
		expect(handleKeyDown).toHaveBeenCalled();
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(<CSSelect label={labelValue} readOnly />);
		const select = uut.find('.cs-select.cs-select-read-only');
		expect(select.prop('aria-readonly')).toBeTruthy();
		expect(select).toHaveLength(1);
	});

	it('should set required attribute', () => {
		const uut = shallow(<CSSelect label={labelValue} required />);
		const select = uut.find('.cs-select');
		const selectLabel = uut.find('.cs-select-wrapper > CSLabel');
		// Make sure select attribute required is set
		expect(select.props().required).toEqual(true);
		expect(select.prop('aria-required')).toBeTruthy();
		// Make sure CSLabel prop required received correct value
		expect(selectLabel.prop('required')).toEqual(true);
	});

	it('should set title', () => {
		const titleValue = 'title';
		const uut = shallow(<CSSelect label={labelValue} title={titleValue} />);
		const select = uut.find('.cs-select');
		expect(select.props().title).toBe(titleValue);
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPositionValue = 'top-left';
		const uut = shallow(<CSSelect label={labelValue} helpText="test" tooltipPosition={tooltipPositionValue} />);
		const selectLabel = uut.find('CSLabel');
		// Make sure CSLabel prop tooltipPosition has received correct value
		expect(selectLabel.prop('tooltipPosition')).toBe(tooltipPositionValue);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSSelect label={labelValue} className={customClass} />);
		const selectWrapper = uut.find(`.cs-select-wrapper.${customClass}`);
		expect(selectWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
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
