import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSFieldErrorMsg, CSLabel } from '@cloudsense/cs-ui-components';
import CSFormCustomField from '../../form-fields/CSFormCustomField';

const customElement = <input type="email" value="johndoe@cloudsense.com" />;
const type = 'CUSTOM';
const label = 'label';

describe('<CSFormCustomField', () => {
	it('should render custom element with label', () => {
		const uut = shallow(
			<CSFormCustomField
				type={type}
				render={customElement}
				label={label}
			/>,
		);
		const input = uut.find('input');
		const customlabel = uut.find(CSLabel);
		expect(input).toHaveLength(1);
		expect(customlabel).toHaveLength(1);
		expect(customlabel.prop('label')).toBe(label);
	});

	it('should set required property', () => {
		const uut = shallow(
			<CSFormCustomField
				type={type}
				render={customElement}
				label={label}
				required
			/>,
		);
		const customlabel = uut.find(CSLabel);
		expect(customlabel.prop('required')).toBeTruthy();
	});

	it('should render custom error message', () => {
		const errorMsg = 'error message';
		const uut = shallow(
			<CSFormCustomField
				type={type}
				render={customElement}
				label={label}
				error
				errorMessage={errorMsg}
			/>,
		);
		const customErrMsg = uut.find(CSFieldErrorMsg);
		expect(customErrMsg).toHaveLength(1);
		expect(customErrMsg.prop('message')).toBe(errorMsg);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormCustomField
				type={type}
				render={customElement}
				onBlur={handleOnBlurMock}
				label={label}
			/>,
		);
		const input = uut.find('input');
		input.simulate('blur');
		expect(handleOnBlurMock).toHaveBeenCalled();
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormCustomField
				type={type}
				render={customElement}
				onChange={handleOnChangeMock}
				label={label}
			/>,
		);
		const input = uut.find('input');
		input.simulate('change');
		expect(handleOnChangeMock).toHaveBeenCalled();
	});

	it('should call onFocus', () => {
		const handleOnFocusMock = jest.fn();
		const uut = shallow(
			<CSFormCustomField
				type={type}
				render={customElement}
				onFocus={handleOnFocusMock}
				label={label}
			/>,
		);
		const input = uut.find('input');
		input.simulate('focus');
		expect(handleOnFocusMock).toHaveBeenCalled();
	});
});
