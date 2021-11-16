import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSTextarea from '../../components/CSTextarea';

const labelValue = 'textarea label';
const iconsValue = [{ iconName: 'cart' }];
const errorText = 'error message';
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

describe('<CSTextarea />', () => {
	it('should pass correct label value to CSLabel', () => {
		const uut = shallow(<CSTextarea label={labelValue} />);
		const textareaLabel = uut.find('.cs-textarea-wrapper > CSLabel');
		const textarea = uut.find('.cs-textarea');
		// Make sure textarea aria-label is set
		expect(textarea.props()['aria-label']).toBe(labelValue);
		// Make sure CSLabel label prop received correct value
		expect(textareaLabel.prop('label')).toBe(labelValue);
	});

	it('should render custom actions', () => {
		const uut = shallow(<CSTextarea label={labelValue} actions={actionsValue} />);
		const textareaCustomActions = uut.find('.cs-textarea-wrapper.cs-textarea-wrapper-options CSCustomDataActions');
		// Make sure belonging class exists and CSCustomDataActions is rendered
		expect(textareaCustomActions).toHaveLength(1);
		// Make sure CSCustomDataActions received correct actions object
		expect(JSON.stringify(textareaCustomActions.prop('actions'))).toBe(JSON.stringify(actionsValue));
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

	it('should render textarea in error state', () => {
		const uut = shallow(<CSTextarea label={labelValue} error />);
		const textarea = uut.find('.cs-textarea.cs-textarea-error');
		// Make sure aria-invalid is set
		expect(textarea.props()['aria-invalid']).toBeTruthy();
		// Make sure belonging class exists
		expect(textarea).toHaveLength(1);
	});

	it('should pass correct errorMessage value to CSFieldErrorMsg', () => {
		const uut = shallow(<CSTextarea label={labelValue} error errorMessage={errorText} />);
		const textareaErrorMsg = uut.find('.cs-textarea-wrapper CSFieldErrorMsg');
		// Make sure CSFieldErrorMsg is rendered
		expect(textareaErrorMsg).toHaveLength(1);
		// Make sure CSFieldErrorMsg received correct value
		expect(textareaErrorMsg.prop('message')).toBe(errorText);
	});

	it('should render textarea in error state with an error tooltip', () => {
		const uut = shallow(<CSTextarea label={labelValue} error errorMessage={errorText} errorTooltip />);
		const textareaErrorTooltip = uut.find('.cs-textarea-wrapper CSFieldErrorMsg');
		// Make sure belonging class exists
		expect(uut.find('.cs-textarea.cs-textarea-error-tooltip')).toHaveLength(1);
		// Make sure CSFieldErrorMsg prop tooltipMessage received correct value and casted in true
		expect(textareaErrorTooltip.prop('tooltipMessage')).toBe(true);
	});

	it('should pass correct helpText value to CSLabel', () => {
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

	it('should render custom icons', () => {
		const uut = shallow(<CSTextarea label={labelValue} icons={iconsValue} />);
		const textareaCustomIcons = uut.find('.cs-textarea-wrapper.cs-textarea-wrapper-options CSCustomDataIcons');
		// Make sure belonging class exists and CSCustomDataIcons is rendered
		expect(textareaCustomIcons).toHaveLength(1);
		// Make sure CSCustomDataIcons received correct icons object
		expect(JSON.stringify(textareaCustomIcons.prop('icons'))).toBe(JSON.stringify(iconsValue));
	});

	it('should hide label', () => {
		const uut = shallow(<CSTextarea label={labelValue} labelHidden />);
		const textareaLabel = uut.find('.cs-textarea-wrapper > CSLabel');
		expect(textareaLabel).toHaveLength(0);
	});

	it('should pass correct label value to CSLabel title prop', () => {
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
		expect(textareaStyle).toHaveProperty('--max-height', maxHeightValue);
	});

	it('should trigger onChange event ', () => {
		const handleOnChange = jest.fn();
		const uut = shallow(<CSTextarea label={labelValue} onChange={handleOnChange} />);
		const textarea = uut.find('.cs-textarea');
		textarea.simulate('change');
		// Make sure onChange has been called
		expect(handleOnChange).toHaveBeenCalledTimes(1);
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

	it('should set required attribute and pass correct value to CSLabel', () => {
		const uut = shallow(<CSTextarea label={labelValue} required />);
		const textarea = uut.find('.cs-textarea');
		const textareaLabel = uut.find('.cs-textarea-wrapper CSLabel');
		// Make sure aria-required is set
		expect(textarea.props()['aria-required']).toBeTruthy();
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

	it('should set row number to 1 if its readonly', () => {
		const uut = shallow(<CSTextarea label={labelValue} rows={10} readOnly />);
		// Make sure rows attribute value is 1 regardless of different rows prop value
		expect(uut.find('.cs-textarea').props().rows).toBe(1);
	});

	it('should set title attribute', () => {
		const titleValue = 'title';
		const uut = shallow(<CSTextarea label={labelValue} title={titleValue} />);
		const textarea = uut.find('.cs-textarea');
		// Make sure title value is set on textarea
		expect(textarea.props().title).toBe(titleValue);
	});

	it('should pass correct tooltipPosition value to CSLabel', () => {
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

	it('should set custom class', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSTextarea label={labelValue} className={customClass} />);
		const textarea = uut.find(`.cs-textarea-wrapper.${customClass}`);
		expect(textarea).toHaveLength(1);
	});

	it('should set custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSTextarea label={labelValue} id={customId} />);
		const textarea = uut.find(`.cs-textarea#${customId}`);
		expect(textarea).toHaveLength(1);
	});
});
