import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSFieldErrorMsg from '../../components/CSFieldErrorMsg';

const message = 'Error message.';

describe('<CSFieldErrorMsg />', () => {
	it('should render message', () => {
		const uut = shallow(<CSFieldErrorMsg message={message} />);
		expect(uut.find('.cs-field-error-msg')).toHaveLength(1);
		expect(uut.find('.cs-field-error-msg').text()).toBe(message);
	});
	it('should render message from array', () => {
		const array: Array<string> = [
			'Error message.',
			'Error message.',
			'Error message.',
		];
		const arrayOutput = array.join(' ');
		const uut = shallow(<CSFieldErrorMsg message={array} />);
		expect(uut.find('.cs-field-error-msg')).toHaveLength(1);
		expect(uut.find('.cs-field-error-msg').text()).toBe(arrayOutput);
	});
	it('should render error tooltip', () => {
		const uut = shallow(<CSFieldErrorMsg tooltipMessage message={message} />);
		expect(uut.find('CSTooltip')).toHaveLength(1);
	});
	it('should have a custom class name', () => {
		const customClass = 'custom-br-mint';
		const uut = shallow(<CSFieldErrorMsg message={message} className={customClass} />);
		const fieldErrorMessage = uut.find(`.cs-field-error-msg.${customClass}`);
		expect(fieldErrorMessage).toHaveLength(1);
	});
	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSFieldErrorMsg message={message} id={customId} />);
		const fieldErrorMessage = uut.find(`.cs-field-error-msg#${customId}`);
		expect(fieldErrorMessage).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSFieldErrorMsg message={message} data-testid="rest" />);
		const fieldErrorMessage = uut.find({ 'data-testid': 'rest' });
		expect(fieldErrorMessage).toHaveLength(1);
	});
});
