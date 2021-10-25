import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSFormCustomField from '../../form-fields/CSFormCustomField';

const customElement = <input type="email" value="johndoe@cloudsense.com" />;
const fieldType = 'CUSTOM';

describe('<CSFormCustomField', () => {
	it('should render custom element', () => {
		const uut = shallow(<CSFormCustomField fieldType={fieldType} render={customElement} />);
		const input = uut.find('input');
		expect(input).toHaveLength(1);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormCustomField
				fieldType={fieldType}
				render={customElement}
				onBlur={handleOnBlurMock}
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
				fieldType={fieldType}
				render={customElement}
				onChange={handleOnChangeMock}
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
				fieldType={fieldType}
				render={customElement}
				onFocus={handleOnFocusMock}
			/>,
		);
		const input = uut.find('input');
		input.simulate('focus');
		expect(handleOnFocusMock).toHaveBeenCalled();
	});

	it('should pass any arbitrary prop to custom field', () => {
		const id = 'id';
		const uut = shallow(
			<CSFormCustomField
				fieldType={fieldType}
				render={customElement}
				id={id}
			/>,
		);
		const input = uut.find('input');
		expect(input.props().id).toBe(id);
	});
});
