import * as React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CSRadio from '../../components/radio/CSRadio';
import CSRadioOption from '../../components/radio/CSRadioOption';

const label = 'This is a label';
const name = 'Radio option name';

describe('<CSRadio />', () => {
	it('should pass correct value to CSLabel', () => {
		const uut = shallow(<CSRadio label={label} />);
		expect(uut.find('.cs-radio-wrapper')).toHaveLength(1);
		const radioLabel = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioLabel).toHaveLength(1);
		expect(radioLabel.prop('label')).toBe(label);
	});

	it('should be disabled', () => {
		const uut = shallow(
			<CSRadio label={label} disabled>
				<CSRadioOption label={label} name={name} />
			</CSRadio>,
		);
		expect(uut.find('.cs-radio-group.cs-radio-disabled')).toHaveLength(1);
		const radioOption = uut.find('CSRadioOption');
		expect(radioOption.shallow().find('.cs-radio').props().disabled).toBeTruthy();
	});

	it('should have error styling', () => {
		const uut = shallow(
			<CSRadio label={label} error>
				<CSRadioOption label={label} name={name} />
			</CSRadio>,
		);
		const radioOption = uut.find('CSRadioOption');
		expect(uut.find('.cs-radio-wrapper > .cs-radio-error')).toHaveLength(1);
		expect(radioOption.shallow().find('.cs-radio').prop('aria-invalid')).toBeTruthy();
	});

	it('should pass correct value to CSFieldErrorMsg', () => {
		const errorMessage = 'Error message';
		const uut = shallow(
			<CSRadio
				label={label}
				error
				errorMessage={errorMessage}
			/>,
		);
		expect(uut.find('CSFieldErrorMsg')).toHaveLength(1);
		expect(uut.find('CSFieldErrorMsg').prop('message')).toBe(errorMessage);
	});

	it('should pass correct value to CSTooltip', () => {
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
		);
		const radioWrapper = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioWrapper.prop('helpText')).toBe(helpText);
	});

	it('should be hidden', () => {
		const uut = shallow(<CSRadio label={label} hidden />);
		expect(uut.find('.cs-element-hidden')).toHaveLength(1);
	});

	it('should have a hidden label', () => {
		const uut = shallow(<CSRadio label={label} labelHidden />);
		expect(uut.find('.cs-radio-wrapper > CSLabel')).toHaveLength(0);
	});

	it('should pass correct value to CSLabel title prop', () => {
		const labelTitle = 'This is a label';
		const uut = shallow(<CSRadio label={labelTitle} labelTitle />);
		const radioLabel = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioLabel.props().title).toBe(labelTitle);
	});

	it('should be required', () => {
		const uut = shallow(
			<CSRadio label={label} required>
				<CSRadioOption label={label} name={name} />
			</CSRadio>,
		);
		const requiredLabel = uut.find('.cs-radio-wrapper > CSLabel');
		expect(requiredLabel.prop('required')).toBeTruthy();
		const radioOption = uut.find('CSRadioOption');
		expect(radioOption.shallow().find('.cs-radio').prop('aria-required')).toBeTruthy();
	});

	it('should pass correct value to CSTooltip position prop', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(
			<CSRadio
				label="This is a label"
				helpText="Help text example"
				tooltipPosition={tooltipPosition}
			/>,
		);
		const radioWrapper = uut.find('.cs-radio-wrapper > CSLabel');
		expect(radioWrapper.prop('tooltipPosition')).toBe(tooltipPosition);
	});

	it('should have neutral buttons', () => {
		const uut = shallow(<CSRadio label={label} variant="neutral" />);
		const radioOption = uut.find('.cs-radio-group.cs-radio-neutral');
		expect(radioOption).toHaveLength(1);
	});

	it('should have brand buttons', () => {
		const uut = shallow(<CSRadio label={label} variant="brand" />);
		const radioOption = uut.find('.cs-radio-group.cs-radio-brand');
		expect(radioOption).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSRadio label={label} className={customClass} />);
		expect(uut.find(`.cs-radio-wrapper.${customClass}`)).toHaveLength(1);
	});

	it('should have a custom id', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSRadio label={label} id={customId} />);
		expect(uut.find(`.cs-radio-wrapper > .cs-radio-group#${customId}`)).toHaveLength(1);
		expect(uut.find('.cs-radio-wrapper > CSLabel').props().htmlFor).toBe(customId);
	});
});

describe('<CSRadioOption />', () => {
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

	it('should be disabled', () => {
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

	it('should trigger onChange', () => {
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

	it('should be readOnly', () => {
		const uut = shallow(
			<CSRadioOption
				label={label}
				name={name}
				readOnly
			/>,
		);
		expect(uut.shallow().find('.cs-radio-read-only').prop('aria-readonly')).toBeTruthy();
	});

	it('should have a title', () => {
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

	it('should have a custom id', () => {
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
});
