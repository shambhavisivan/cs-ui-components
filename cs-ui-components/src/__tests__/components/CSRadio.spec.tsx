import * as React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CSRadio from '../../components/radio/CSRadio';
import CSRadioOption from '../../components/radio/CSRadioOption';

const label = 'This is a label';
const name = 'Radio option name';

describe('<CSRadio />', () => {
	it('should render the default CSRadio', () => {
		const uut = shallow(<CSRadio label={label} />).dive();
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

	it('should set disabled attribute', () => {
		const uut = shallow(
			<CSRadio label={label} disabled>
				<CSRadioOption label={label} name={name} />
			</CSRadio>,
		).dive();
		expect(uut.find('.cs-radio-group.cs-radio-disabled')).toHaveLength(1);
		const radioOption = uut.find('CSRadioOption');
		expect(radioOption.shallow().find('.cs-radio').props().disabled).toBeTruthy();
	});

	it('should have error styling', () => {
		const uut = shallow(
			<CSRadio label={label} error>
				<CSRadioOption label={label} name={name} />
			</CSRadio>,
		).dive();
		const radioOption = uut.find('CSRadioOption');
		expect(uut.find('.cs-radio-wrapper > .cs-radio-error')).toHaveLength(1);
		expect(radioOption.shallow().find('.cs-radio').prop('aria-invalid')).toBeTruthy();
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

	it('should pass helpText to CSTooltip', () => {
		const helpText = 'Help text example';
		const uut = shallow(
			<CSRadio
				label={label}
				helpText={helpText}
				tooltipPosition="bottom-right"
			>
				<CSRadioOption label="red" name={name} />
				<CSRadioOption label="blue" name={name} />
			</CSRadio>,
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

	it('should pass to CSLabel title prop', () => {
		const labelTitle = 'This is a label';
		const uut = shallow(<CSRadio label={labelTitle} labelTitle />).dive();
		const radioLabel = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioLabel.props().title).toBe(labelTitle);
	});

	it('should set required attribute', () => {
		const uut = shallow(
			<CSRadio label={label} required>
				<CSRadioOption label={label} name={name} />
			</CSRadio>,
		).dive();
		const requiredLabel = uut.find('.cs-radio-wrapper > CSLabel');
		expect(requiredLabel.prop('required')).toBeTruthy();
		const radioOption = uut.find('CSRadioOption');
		expect(radioOption.shallow().find('.cs-radio').prop('aria-required')).toBeTruthy();
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
	it('should render the default CSRadioOption', () => {
		const uut = shallow(<CSRadioOption name={name} />).shallow();
		// Should render a radio option
		const radioOption = uut.find('.cs-radio');
		expect(radioOption).toHaveLength(1);
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
				label={label}
				name={name}
				checked
			/>,
		);
		expect(uut.shallow().find('.cs-radio').prop('defaultChecked')).toBeTruthy();
	});

	it('should set disabled attribute', () => {
		const uut = shallow(
			<CSRadioOption
				label={label}
				name={name}
				disabled
			/>,
		);
		expect(uut.shallow().find('.cs-radio').prop('disabled')).toBeTruthy();
	});

	it('should have a label', () => {
		const uut = shallow(<CSRadioOption label={label} name={name} />);
		const optionLabel = (uut.find('.cs-radio-option-wrapper > .cs-radio-option-label'));
		expect(optionLabel.text()).toBe(label);
	});

	it('should use a working onChange callback', () => {
		const handleChangeMock = jest.fn();
		const uut = shallow(
			<CSRadioOption
				label={label}
				name={name}
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
				name={name}
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
				name={name}
				onKeyDown={handleKeyDownMock}
			/>,
		);
		const radioOption = uut.find('.cs-radio-option-wrapper > .cs-radio');
		radioOption.simulate('keydown');
		expect(handleKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(
			<CSRadioOption
				label={label}
				name={name}
				readOnly
			/>,
		);
		expect(uut.shallow().find('.cs-radio-read-only').prop('aria-readonly')).toBeTruthy();
	});

	it('should set title attribute', () => {
		const labelTitle = 'This is a label';
		const uut = shallow(
			<CSRadioOption
				label={label}
				name={name}
				title={labelTitle}
			/>,
		);
		expect(uut.find('.cs-radio-option-wrapper').prop('title')).toBe(labelTitle);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSRadioOption
				label={label}
				name={name}
				className={customClass}
			/>,
		);
		expect(uut.find(`.cs-radio-option-wrapper.${customClass}`)).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(
			<CSRadioOption
				label={label}
				name={name}
				id={customId}
			/>,
		);
		expect(uut.find(`.cs-radio-option-wrapper > .cs-radio#${customId}`)).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(
			<CSRadioOption
				label={label}
				name={name}
				data-testid="rest"
			/>,
		);
		const radioOption = uut.find({ 'data-testid': 'rest' });
		expect(radioOption).toHaveLength(1);
	});
});
