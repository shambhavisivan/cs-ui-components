import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSTextarea from '../../components/CSTextarea';
import { actions, icons } from '../common/custom-data';

const labelValue = 'textarea label';
const errorText = 'error message';

describe('<CSTextarea />', () => {
	it('should render the default CSTextarea', () => {
		const uut = shallow(<CSTextarea label={labelValue} />);
		const textareaLabel = uut.find('.cs-textarea-wrapper > CSLabel');
		const textarea = uut.find('.cs-textarea');
		// Make sure textarea aria-label is set
		expect(textarea.prop('aria-label')).toBe(labelValue);
		// Make sure CSLabel label prop received correct value
		expect(textareaLabel.prop('label')).toBe(labelValue);
	});

	it('should pass actions to CSCustomData', () => {
		const uut = shallow(<CSTextarea label={labelValue} actions={actions} />);
		const textareaCustomData = uut.find('CSCustomData');
		expect(textareaCustomData).toHaveLength(1);
		expect(textareaCustomData.prop('actions')).toMatchObject(actions);
	});

	it('should set custom border radius', () => {
		const borderRadiusValue = '1rem';
		const uut = shallow(<CSTextarea label={labelValue} borderRadius={borderRadiusValue} />);
		const textareaStyle = uut.find('.cs-textarea-wrapper').get(0).props.style;
		// Make sure css var and correct value are set
		expect(textareaStyle).toHaveProperty('--cs-textarea-border-radius', borderRadiusValue);
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSTextarea label={labelValue} disabled />);
		expect(uut.find('.cs-textarea').props().disabled).toEqual(true);
	});

	it('should pass errorMessage to CSFieldErrorMsg message', () => {
		const uut = shallow(<CSTextarea label={labelValue} error errorMessage={errorText} />);
		const textareaErrorMsg = uut.find('.cs-textarea-wrapper CSFieldErrorMsg');
		// Make sure CSFieldErrorMsg received correct value
		expect(textareaErrorMsg.prop('message')).toBe(errorText);
	});

	it('should pass errorMessage to CSTooltip content', () => {
		const uut = shallow(<CSTextarea label={labelValue} error errorMessage={errorText} errorTooltip />);
		const textareaErrorTooltip = uut.find('.cs-textarea-wrapper CSTooltip');
		// Make sure CSTooltip received correct value
		expect(textareaErrorTooltip.prop('content')).toBe(errorText);
	});

	it('should pass helpText to CSLabel', () => {
		const helpTextMsg = 'help text in tooltip';
		const uut = shallow(<CSTextarea label={labelValue} helpText={helpTextMsg} />);
		const textareaLabel = uut.find('.cs-textarea-wrapper > CSLabel');
		// Make sure CSLabel received correct value for helpText prop
		expect(textareaLabel.prop('helpText')).toBe(helpTextMsg);
	});

	it('should hide textarea', () => {
		const uut = shallow(<CSTextarea label={labelValue} hidden />);
		// Make sure belonging class exists
		expect(uut.find('.cs-textarea-wrapper.cs-element-hidden')).toHaveLength(1);
	});

	it('should pass icons to CSCustomData', () => {
		const uut = shallow(<CSTextarea label={labelValue} icons={icons} />);
		const textareaCustomData = uut.find('CSCustomData');
		expect(textareaCustomData).toHaveLength(1);
		expect(textareaCustomData.prop('icons')).toMatchObject(icons);
	});

	it('should hide label', () => {
		const uut = shallow(<CSTextarea label={labelValue} labelHidden />);
		const textareaLabel = uut.find('.cs-textarea-wrapper > CSLabel');
		expect(textareaLabel).toHaveLength(0);
	});

	it('should pass label to CSLabel title prop', () => {
		const uut = shallow(<CSTextarea label={labelValue} labelTitle />);
		const textareaLabel = uut.find('.cs-textarea-wrapper > CSLabel');
		// Make sure CSLabel received correct value for title prop
		expect(textareaLabel.prop('title')).toBe(labelValue);
	});

	it('should set custom max height', () => {
		const maxHeightValue = '200px';
		const uut = shallow(<CSTextarea label={labelValue} maxHeight={maxHeightValue} />);
		const textareaStyle = uut.find('.cs-textarea-wrapper').get(0).props.style;
		// Make sure css var and correct value are set
		expect(textareaStyle).toHaveProperty('--cs-textarea-max-height', maxHeightValue);
	});

	it('should use a working onChange callback', () => {
		const handleOnChange = jest.fn();
		const uut = shallow(<CSTextarea label={labelValue} onChange={handleOnChange} />);
		const textarea = uut.find('.cs-textarea');
		textarea.simulate('change');
		// Make sure onChange has been called
		expect(handleOnChange).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleOnClick = jest.fn();
		const uut = shallow(<CSTextarea label={labelValue} onClick={handleOnClick} />);
		const textarea = uut.find('.cs-textarea');
		textarea.simulate('click');
		expect(handleOnClick).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleOnKeyDown = jest.fn();
		const uut = shallow(<CSTextarea label={labelValue} onKeyDown={handleOnKeyDown} />);
		const textarea = uut.find('.cs-textarea');
		textarea.simulate('keydown');
		expect(handleOnKeyDown).toHaveBeenCalledTimes(1);
	});

	it('should render textarea with placeholder attribute with correct value', () => {
		const placeholder = 'placeholder text';
		const uut = shallow(<CSTextarea label={labelValue} placeholder={placeholder} />);
		// Make sure placeholder attribute is set on textarea
		expect(uut.find('.cs-textarea').props().placeholder).toBe(placeholder);
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(<CSTextarea label={labelValue} readOnly />);
		// Make sure readOnly attribute is set on textarea
		expect(uut.find('.cs-textarea').props().readOnly).toEqual(true);
	});

	it('should set required attribute and pass to CSLabel', () => {
		const uut = shallow(<CSTextarea label={labelValue} required />);
		const textarea = uut.find('.cs-textarea');
		const textareaLabel = uut.find('.cs-textarea-wrapper CSLabel');
		// Make sure aria-required is set
		expect(textarea.prop('aria-required')).toBeTruthy();
		// Make sure required attribute is set
		expect(textarea.props().required).toEqual(true);
		// Make sure required value is passed to to CSLabel
		expect(textareaLabel.prop('required')).toBeTruthy();
	});

	it('should set row number', () => {
		const rowsValue = 10;
		const uut = shallow(<CSTextarea label={labelValue} rows={rowsValue} />);
		// Make sure rows attribute is set on textarea
		expect(uut.find('.cs-textarea').props().rows).toBe(rowsValue);
	});

	it('should set row number to undefined if its readonly', () => {
		const uut = shallow(<CSTextarea label={labelValue} rows={10} readOnly />);
		// Make sure rows attribute value is undefined regardless of different rows prop value
		expect(uut.find('.cs-textarea').props().rows).toBe(undefined);
	});

	it('should set title attribute', () => {
		const titleValue = 'title';
		const uut = shallow(<CSTextarea label={labelValue} title={titleValue} />);
		const textarea = uut.find('.cs-textarea');
		// Make sure title value is set on textarea
		expect(textarea.props().title).toBe(titleValue);
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPositionValue = 'top-left';
		const uut = shallow(<CSTextarea label={labelValue} tooltipPosition={tooltipPositionValue} />);
		const textareaLabel = uut.find('CSLabel');
		// Make sure CSLabel prop tooltipPosition has received correct value
		expect(textareaLabel.prop('tooltipPosition')).toBe(tooltipPositionValue);
	});

	it('should set value attribute', () => {
		const value = 'test';
		const uut = shallow(<CSTextarea label={labelValue} value={value} />);
		// Make sure value attribute is set
		expect(uut.find('.cs-textarea').props().value).toBe(value);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSTextarea label={labelValue} className={customClass} />);
		const textarea = uut.find(`.cs-textarea-wrapper.${customClass}`);
		expect(textarea).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSTextarea label={labelValue} id={customId} />);
		const textarea = uut.find(`.cs-textarea#${customId}`);
		const textareaLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(textarea).toHaveLength(1);
		expect(textareaLabelHtmlFor).toBe(customId);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSTextarea label={labelValue} data-testid="rest" />);
		const textarea = uut.find({ 'data-testid': 'rest' });
		expect(textarea).toHaveLength(1);
	});
});
