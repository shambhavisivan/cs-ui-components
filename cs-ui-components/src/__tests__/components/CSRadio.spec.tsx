import * as React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CSRadio from '../../components/radio/CSRadio';
import CSRadioOption from '../../components/radio/CSRadioOption';

const label = 'label';
const options = [{
	key: 'zagreb',
	label: 'Zagreb',
}, {
	key: 'chennai',
	label: 'Chennai',
}];

describe('<CSRadio />', () => {
	it('should render the default CSRadio', () => {
		const uut = shallow(<CSRadio label={label} options={options} />).dive();
		// Should render a radio
		const radio = uut.find('.cs-radio-wrapper > .cs-radio-neutral');
		expect(radio).toHaveLength(1);
		// Should render a label
		const radioLabel = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioLabel).toHaveLength(1);
		// disabled
		expect(uut.find('.cs-radio-group.cs-radio-disabled')).toHaveLength(0);
		// error
		expect(uut.find('.cs-radio-wrapper > .cs-radio-error')).toHaveLength(0);
		expect(uut.find('.cs-radio-wrapper > .cs-radio-neutral').prop('aria-invalid')).toBeFalsy();
		// Should render radio options
		const radioOptions = uut.find('CSRadioOption');
		expect(radioOptions).toHaveLength(options.length);
		// required
		expect(uut.find('.cs-radio-wrapper > CSLabel').prop('required')).toBeFalsy();
		expect(uut.find('.cs-radio-wrapper > .cs-radio-neutral').prop('aria-required')).toBeFalsy();
		// variant
		expect(uut.find('.cs-radio-group.cs-radio-neutral')).toHaveLength(1);
	});

	it('should pass label to CSLabel', () => {
		const uut = shallow(<CSRadio label={label} />).dive();
		expect(uut.find('.cs-radio-wrapper')).toHaveLength(1);
		const radioLabel = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioLabel).toHaveLength(1);
		expect(radioLabel.prop('label')).toBe(label);
	});

	it('should pass disabled to CSRadioOption', () => {
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				disabled
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');
		expect(uut.find('.cs-radio-group.cs-radio-disabled')).toHaveLength(1);

		radioOptions.forEach((radioOption) => expect(radioOption.props().disabled).toBeTruthy());
	});

	it('should pass disabledKeys to CSRadioOption', () => {
		const disabledKeys = ['zagreb'];
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				disabledKeys={disabledKeys}
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');

		radioOptions.forEach((radioOption) => {
			expect(radioOption.prop('disabled')).toBe(disabledKeys.includes(String(radioOption.prop('value'))));
		});
	});

	it('should pass error to CSRadioOption', () => {
		const uut = shallow(<CSRadio label={label} options={options} error />).dive();
		const radioOptions = uut.find('CSRadioOption');
		expect(uut.find('.cs-radio-group.cs-radio-error')).toHaveLength(1);

		radioOptions.forEach((radioOption) => expect(radioOption.prop('ariaInvalid')).toBeTruthy());
	});

	it('should pass errorMessage to CSFieldErrorMsg', () => {
		const errorMessage = 'Error message';
		const uut = shallow(
			<CSRadio
				label={label}
				error
				errorMessage={errorMessage}
			/>,
		).dive();
		expect(uut.find('CSFieldErrorMsg')).toHaveLength(1);
		expect(uut.find('CSFieldErrorMsg').prop('message')).toBe(errorMessage);
	});

	it('should pass helpText to CSLabel', () => {
		const helpText = 'Help text example';
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				helpText={helpText}
				tooltipPosition="bottom-right"
			/>,
		).dive();
		const radioWrapper = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioWrapper.prop('helpText')).toBe(helpText);
	});

	it('should be hidden', () => {
		const uut = shallow(<CSRadio label={label} hidden />).dive();
		expect(uut.find('.cs-element-hidden')).toHaveLength(1);
	});

	it('should have a hidden label', () => {
		const uut = shallow(<CSRadio label={label} labelHidden />).dive();
		expect(uut.find('.cs-radio-wrapper > CSLabel')).toHaveLength(0);
	});

	it('should pass label to CSLabel as title', () => {
		const uut = shallow(<CSRadio label={label} labelTitle />).dive();
		const radioLabel = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioLabel.prop('title')).toBe(label);
	});

	it('should pass onBlur to CSRadioOption', () => {
		const handleBlurMock = jest.fn();
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				onBlur={handleBlurMock}
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');

		radioOptions.forEach((radioOption) => expect(radioOption.prop('onBlur')).toBe(handleBlurMock));
	});

	it('should pass onChange to CSRadioOption', () => {
		const handleChangeMock = jest.fn();
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				onChange={handleChangeMock}
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');

		radioOptions.forEach((radioOption) => expect(radioOption.prop('onChange')).toBe(handleChangeMock));
	});

	it('should pass onClick to CSRadioOption', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				onClick={handleClickMock}
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');

		radioOptions.forEach((radioOption) => expect(radioOption.prop('onClick')).toBe(handleClickMock));
	});

	it('should pass onFocus to CSRadioOption', () => {
		const handleFocusMock = jest.fn();
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				onFocus={handleFocusMock}
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');

		radioOptions.forEach((radioOption) => expect(radioOption.prop('onFocus')).toBe(handleFocusMock));
	});

	it('should pass onKeyDown to CSRadioOption', () => {
		const handleKeyDownMock = jest.fn();
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				onKeyDown={handleKeyDownMock}
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');

		radioOptions.forEach((radioOption) => expect(radioOption.prop('onKeyDown')).toBe(handleKeyDownMock));
	});

	it('should pass readOnly to CSRadioOption', () => {
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				readOnly
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');

		radioOptions.forEach((radioOption) => expect(radioOption.prop('readOnly')).toBeTruthy());
	});

	it('should pass required to CSRadioOption', () => {
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				required
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');

		radioOptions.forEach((radioOption) => expect(radioOption.prop('ariaRequired')).toBeTruthy());
	});

	it('should pass selectedKey to CSRadioOption', () => {
		const selectedKey = 'zagreb';
		const uut = shallow(
			<CSRadio
				label={label}
				options={options}
				selectedKey={selectedKey}
			/>,
		).dive();
		const radioOptions = uut.find('CSRadioOption');

		radioOptions.forEach((radioOption) => {
			expect(radioOption.prop('checked')).toBe(selectedKey === radioOption.prop('value'));
		});
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(
			<CSRadio
				label="This is a label"
				helpText="Help text example"
				tooltipPosition={tooltipPosition}
			/>,
		).dive();
		const radioWrapperLabel = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioWrapperLabel.prop('tooltipPosition')).toBe(tooltipPosition);
	});

	it('should render neutral radio buttons', () => {
		const uut = shallow(<CSRadio label={label} variant="neutral" />).dive();
		const radioOption = uut.find('.cs-radio-group.cs-radio-neutral');
		expect(radioOption).toHaveLength(1);
	});

	it('should render brand radio buttons', () => {
		const uut = shallow(<CSRadio label={label} variant="brand" />).dive();
		const radioOption = uut.find('.cs-radio-group.cs-radio-brand');
		expect(radioOption).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSRadio label={label} className={customClass} />).dive();
		expect(uut.find(`.cs-radio-wrapper.${customClass}`)).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSRadio label={label} id={customId} />).dive();
		expect(uut.find(`.cs-radio-wrapper > .cs-radio-group#${customId}`)).toHaveLength(1);
		expect(uut.find('.cs-radio-wrapper > CSLabel').props().htmlFor).toBe(customId);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSRadio label={label} data-testid="rest" />);
		const radio = uut.find({ 'data-testid': 'rest' });
		expect(radio).toHaveLength(1);
	});
});

describe('<CSRadioOption />', () => {
	const name = 'name';
	const value = 'value';

	it('should render the default CSRadioOption', () => {
		const uut = shallow(
			<CSRadioOption
				label={label}
				checked={false}
				name={name}
				value={value}
			/>,
		);
		// Should render a radio option
		const radioOption = uut.find('.cs-radio');
		expect(radioOption).toHaveLength(1);
		// checked
		expect(radioOption.props().checked).toBeFalsy();
		// label
		const optionLabel = (uut.find('.cs-radio-option-wrapper > .cs-radio-option-label'));
		expect(optionLabel.text()).toBe(label);
		// name
		expect(radioOption.prop('name')).toBe(name);
		// value
		expect(radioOption.prop('value')).toBe(value);
		// disabled
		expect(radioOption.prop('disabled')).toBeFalsy();
		// readOnly
		expect(uut.find('.cs-radio-read-only')).toHaveLength(0);
		// aria-readolny
		expect(radioOption.prop('aria-readonly')).toBeFalsy();
	});

	it('should be checked', () => {
		const uut = shallow(
			<CSRadioOption
				name={name}
				label={label}
				value={value}
				checked
			/>,
		);
		expect(uut.find('.cs-radio').props().checked).toBeTruthy();
	});

	it('should not be checked', () => {
		const uut = shallow(
			<CSRadioOption
				name={name}
				label={label}
				value={value}
				checked={false}
			/>,
		);
		expect(uut.find('.cs-radio').props().checked).toBeFalsy();
	});

	it('should have a label', () => {
		const uut = shallow(
			<CSRadioOption
				label={label}
				checked={false}
				name={name}
				value={value}
			/>,
		);
		const optionLabel = (uut.find('.cs-radio-option-wrapper > .cs-radio-option-label'));
		expect(optionLabel.text()).toBe(label);
	});

	it('should have a name', () => {
		const uut = shallow(
			<CSRadioOption
				label={label}
				checked={false}
				name={name}
				value={value}
			/>,
		);
		const radioOption = uut.find('.cs-radio');
		expect(radioOption.prop('name')).toBe(name);
	});

	it('should have a value', () => {
		const uut = shallow(
			<CSRadioOption
				label={label}
				checked={false}
				name={name}
				value={value}
			/>,
		);
		const radioOption = uut.find('.cs-radio');
		expect(radioOption.prop('value')).toBe(value);
	});

	it('should be disabled', () => {
		const uut = shallow(
			<CSRadioOption
				name={name}
				checked={false}
				label={label}
				value={value}
				disabled
			/>,
		);
		expect(uut.find('.cs-radio').props().disabled).toBeTruthy();
	});

	it('should be readOnly', () => {
		const uut = shallow(
			<CSRadioOption
				name={name}
				checked={false}
				label={label}
				value={value}
				readOnly
			/>,
		);
		expect(uut.find('.cs-radio-read-only')).toHaveLength(1);
		expect(uut.find('.cs-radio-read-only').prop('aria-readonly')).toBeTruthy();
	});

	it('should be required', () => {
		const uut = shallow(
			<CSRadioOption
				name={name}
				checked={false}
				label={label}
				value={value}
				ariaRequired
			/>,
		);
		expect(uut.find('.cs-radio').prop('aria-required')).toBeTruthy();
	});

	it('should have an error', () => {
		const uut = shallow(
			<CSRadioOption
				name={name}
				checked={false}
				label={label}
				value={value}
				ariaInvalid
			/>,
		);
		expect(uut.find('.cs-radio').prop('aria-invalid')).toBeTruthy();
	});

	it('should have a title', () => {
		const title = 'title';
		const uut = shallow(
			<CSRadioOption
				name={name}
				checked={false}
				label={label}
				value={value}
				title={title}
			/>,
		);
		expect(uut.find('.cs-radio-option-wrapper').prop('title')).toBe(title);
	});

	it('should have a label', () => {
		const uut = shallow(
			<CSRadioOption
				label={label}
				checked={false}
				name={name}
				value={value}
			/>,
		);
		const optionLabel = (uut.find('.cs-radio-option-wrapper > .cs-radio-option-label'));
		expect(optionLabel.text()).toBe(label);
	});

	it('should use a working onBlur callback', () => {
		const handleBlurMock = jest.fn();
		const uut = shallow(
			<CSRadioOption
				label={label}
				checked={false}
				name={name}
				value={value}
				onBlur={handleBlurMock}
			/>,
		);
		const radioOption = uut.find('.cs-radio-option-wrapper > .cs-radio');
		radioOption.simulate('blur');
		expect(handleBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onChange callback', () => {
		const handleChangeMock = jest.fn();
		const uut = shallow(
			<CSRadioOption
				label={label}
				checked={false}
				name={name}
				value={value}
				onChange={handleChangeMock}
			/>,
		);
		const radioOption = uut.find('.cs-radio-option-wrapper > .cs-radio');
		radioOption.simulate('change');
		expect(handleChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(
			<CSRadioOption
				label={label}
				checked={false}
				name={name}
				value={value}
				onClick={handleClickMock}
			/>,
		);
		const radioOption = uut.find('.cs-radio-option-wrapper > .cs-radio');
		radioOption.simulate('click');
		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleKeyDownMock = jest.fn();
		const uut = shallow(
			<CSRadioOption
				label={label}
				checked={false}
				name={name}
				value={value}
				onKeyDown={handleKeyDownMock}
			/>,
		);
		const radioOption = uut.find('.cs-radio-option-wrapper > .cs-radio');
		radioOption.simulate('keydown');
		expect(handleKeyDownMock).toHaveBeenCalledTimes(1);
	});
});
