import React from 'react';

import { shallow, default as Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '../Button';

Enzyme.configure({ adapter: new Adapter() });

const additionalProps: Record<string, any> = { className: 'horizontal-form-save-button' };

it('renders a button', () => {
	const uut = shallow(<Button enabled label="TestButton" clicked={jest.fn()} additionalProps={additionalProps} />);

	expect(uut.find('button')).toHaveLength(1);
	expect(uut.find('button').prop('disabled')).toBeFalsy();
	expect(uut.find('button').text()).toBe('TestButton');
});

it('sets disabled', () => {
	const uut = shallow(<Button enabled={false} label="TestButton" clicked={jest.fn()} additionalProps={additionalProps} />);
	expect(uut.find('button').prop('disabled')).toBe(true);
});

it('sets injected properties from wrapper', () => {
	const uut = shallow(<Button enabled label="TestButton" clicked={jest.fn()} additionalProps={additionalProps} />);
	expect(uut.find('button').prop('className')).toBe('horizontal-form-save-button');
});

it('calls clicked on click', () => {
	const onClickMock = jest.fn();
	const uut = shallow(<Button enabled label="testButton" clicked={onClickMock} additionalProps={additionalProps} />);
	uut.find('button').simulate('click');

	expect(onClickMock.mock.calls.length).toBe(1);
});
