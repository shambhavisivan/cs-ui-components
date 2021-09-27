import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSSlider from '../../components/CSSlider';

const labelContent = 'Slider';

describe('<CSSlider />', () => {
	it('should pass label value to CSLabel', () => {
		const uut = shallow(<CSSlider label={labelContent} />);
		const label = uut.find('.cs-slider-wrapper > CSLabel');
		expect(label.prop('label')).toBe(labelContent);
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSSlider label={labelContent} disabled />);
		const sliderInput = uut.find('.cs-slider');
		expect(sliderInput.props().disabled).toBeTruthy();
	});

	it('should render slider with error styles', () => {
		const uut = shallow(<CSSlider label={labelContent} error />);
		const sliderInput = uut.find('.cs-slider-error');
		expect(sliderInput.props()['aria-invalid']).toBeTruthy();
	});

	it('should pass errorMessage value to CSFieldErrorMessage', () => {
		const errorMessageContent = 'Error message.';
		const uut = shallow(<CSSlider label={labelContent} error errorMessage={errorMessageContent} />);
		const errorMessage = uut.find('.cs-slider-wrapper > CSFieldErrorMsg');
		expect(errorMessage.prop('message')).toBe(errorMessageContent);
	});

	it('should pass helpText value to CSLabel', () => {
		const helpText = 'Help text example';
		const uut = shallow(<CSSlider label="Select value" helpText={helpText} />);
		const sliderLabel = uut.find('.cs-slider-wrapper > CSLabel');
		expect(sliderLabel.prop('helpText')).toBe(helpText);
	});

	it('should not have a label', () => {
		const uut = shallow(<CSSlider label={labelContent} labelHidden />);
		expect(uut.find('.cs-slider-wrapper > CSLabel')).toHaveLength(0);
	});

	it('should have a label with a title', () => {
		const labelTitle = labelContent;
		const uut = shallow(<CSSlider label={labelContent} labelTitle />);
		const sliderLabel = uut.find('.cs-slider-wrapper > CSLabel');
		expect(sliderLabel.prop('title')).toBe(labelTitle);
	});

	it('should display max and set max attribute value', () => {
		const max = '50';
		const uut = shallow(<CSSlider label={labelContent} max={max} />);
		expect(uut.find('.cs-slider-wrapper > .cs-slider-range')).toHaveLength(1);
		const sliderInput = uut.find('.cs-slider');
		expect(sliderInput.prop('max')).toBe(max);
		expect(sliderInput.props()['aria-valuemax']).toBe(Number(max));
	});

	it('should display min and set min attribute value', () => {
		const min = '50';
		const uut = shallow(<CSSlider label={labelContent} min={min} />);
		expect(uut.find('.cs-slider-wrapper > .cs-slider-range')).toHaveLength(1);
		const sliderInput = uut.find('.cs-slider');
		expect(sliderInput.find('.cs-slider').prop('min')).toBe(min);
		expect(sliderInput.props()['aria-valuemin']).toBe(Number(min));
	});

	it('should trigger onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(<CSSlider label={labelContent} onChange={handleOnChangeMock} />);
		const sliderInput = uut.find('.cs-slider');
		sliderInput.simulate('change', { preventDefault: jest.fn(), target: { value: 50 } });
		expect(handleOnChangeMock).toHaveBeenCalled();
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(<CSSlider label={labelContent} readOnly />);
		const sliderGroup = uut.find('.cs-slider-wrapper > .cs-slider-group');
		expect(sliderGroup.find('.cs-slider').prop('aria-readonly')).toBeTruthy();
	});

	it('should render slider with a required attribute', () => {
		const uut = shallow(<CSSlider label={labelContent} required />);
		const label = uut.find('.cs-slider-wrapper > CSLabel');
		expect(label.prop('required')).toBeTruthy();
		const sliderInput = uut.find('.cs-slider');
		expect(sliderInput.prop('required')).toBeTruthy();
	});

	it('should render slider with steps', () => {
		const uut = shallow(<CSSlider
			label={labelContent}
			min="0"
			max="100"
			step="20"
		/>);
		const step = uut.find('.cs-slider-steps-wrapper > .cs-slider-step');
		expect(step).toHaveLength(6);
		expect(step.at(3).find('.cs-slider-step-number').text()).toBe('60');
	});

	it('should render slider with step values', () => {
		const uut = shallow(<CSSlider label={labelContent} stepValues={['max', '0', '1', '2', '3']} />);
		const step = uut.find('.cs-slider-steps-wrapper > .cs-slider-step');
		expect(step).toHaveLength(5);
		expect(step.at(3).find('.cs-slider-step-number').text()).toBe('2');
	});

	it('should render slider with a title', () => {
		const title = 'This is a title';
		const uut = shallow(<CSSlider label={labelContent} title={title} />);
		const slider = uut.find('.cs-slider-group > .cs-slider');
		expect(slider.props().title).toBe(title);
	});

	it('should pass tooltipPosition value to CSLabel', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(<CSSlider label={labelContent} helpText="Help text example" tooltipPosition={tooltipPosition} />);
		const sliderLabel = uut.find('.cs-slider-wrapper > CSLabel');
		expect(sliderLabel.prop('tooltipPosition')).toBe(tooltipPosition);
	});

	it('should set value attribute', () => {
		const value = '20';
		const uut = shallow(<CSSlider
			label={labelContent}
			min="0"
			max="100"
			value={value}
		/>);
		const sliderInput = uut.find('.cs-slider');
		expect(sliderInput.props().value).toBe(value);
		const sliderMaxValue = uut.find('.cs-slider-max-value-wrapper > .cs-slider-max-value');
		expect(sliderMaxValue.find('.cs-slider-max-value').get(0).props.style).toHaveProperty('--cs-slider-value-position', '20%');
	});

	it('should render slider with a custom width', () => {
		const uut = shallow(<CSSlider label="Select value" width="50%" />);
		expect(uut.find('.cs-slider-wrapper').get(0).props.style).toHaveProperty('--cs-slider-width', '50%');
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSSlider label="Select value" className={customClass} />);
		const sliderWrapper = uut.find(`.cs-slider-wrapper.${customClass}`);
		expect(sliderWrapper).toHaveLength(1);
	});

	it('should have a custom id', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSSlider label="Select value" id={customId} />);
		const sliderGroup = uut.find('.cs-slider-wrapper > .cs-slider-group');
		expect(sliderGroup.find(`.cs-slider#${customId}`)).toHaveLength(1);
	});
});
