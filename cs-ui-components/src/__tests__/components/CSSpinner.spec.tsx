import * as React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CSSpinner from '../../components/CSSpinner';

describe('<CSSpinner />', () => {
	it('should have a wrapper and default prop values', () => {
		const uut = shallow(<CSSpinner />);
		expect(uut.find('.cs-spinner-wrapper')).toHaveLength(1);
		expect(uut.find('.cs-spinner-brand')).toHaveLength(1);
		expect(uut.find('.cs-spinner-overlay-light')).toHaveLength(1);
		expect(uut.find('.cs-spinner-large')).toHaveLength(1);
	});

	it('should have brand color', () => {
		const uut = shallow(<CSSpinner color="brand" />);
		expect(uut.find('.cs-spinner-brand')).toHaveLength(1);
	});

	it('should have neutral color', () => {
		const uut = shallow(<CSSpinner color="neutral" />);
		expect(uut.find('.cs-spinner-neutral')).toHaveLength(1);
	});

	it('should have inverse color', () => {
		const uut = shallow(<CSSpinner color="inverse" />);
		expect(uut.find('.cs-spinner-inverse')).toHaveLength(1);
	});

	it('should render inline display spinner', () => {
		const uut = shallow(<CSSpinner inline />);
		expect(uut.find('.cs-spinner-inline')).toHaveLength(1);
	});

	it('should have a label', () => {
		const label = 'This is a label';
		const uut = shallow(<CSSpinner label={label} />);
		const spinnerLabel = uut.find('.cs-spinner-wrapper-label > .cs-spinner-label');
		expect(spinnerLabel).toHaveLength(1);
		expect(spinnerLabel.find('span').text()).toBe(label);
	});

	it('should have a light overlay', () => {
		const uut = shallow(<CSSpinner overlay="light" />);
		expect(uut.find('.cs-spinner-overlay-light')).toHaveLength(1);
	});

	it('should have a dark overlay', () => {
		const uut = shallow(<CSSpinner overlay="dark" />);
		expect(uut.find('.cs-spinner-overlay-dark')).toHaveLength(1);
	});

	it('should have a transparent overlay', () => {
		const uut = shallow(<CSSpinner overlay="transparent" />);
		expect(uut.find('.cs-spinner-overlay-transparent')).toHaveLength(1);
	});

	it('should have a xsmall size', () => {
		const uut = shallow(<CSSpinner size="xsmall" />);
		expect(uut.find('.cs-spinner-xsmall')).toHaveLength(1);
	});

	it('should have a small size', () => {
		const uut = shallow(<CSSpinner size="small" />);
		expect(uut.find('.cs-spinner-small')).toHaveLength(1);
	});

	it('should have a medium size', () => {
		const uut = shallow(<CSSpinner size="medium" />);
		expect(uut.find('.cs-spinner-medium')).toHaveLength(1);
	});

	it('should have a large size', () => {
		const uut = shallow(<CSSpinner />);
		expect(uut.find('.cs-spinner-large')).toHaveLength(1);
	});

	it('should have a xlarge size', () => {
		const uut = shallow(<CSSpinner size="xlarge" />);
		expect(uut.find('.cs-spinner-xlarge')).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSSpinner className={customClass} />);
		const spinnerWrapper = uut.find(`.cs-spinner-wrapper.${customClass}`);
		expect(spinnerWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSSpinner id={customId} />);
		const spinnerWrapper = uut.find(`.cs-spinner-wrapper#${customId}`);
		expect(spinnerWrapper).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSSpinner data-testid="rest" />);
		const spinner = uut.find({ 'data-testid': 'rest' });
		expect(spinner).toHaveLength(1);
	});
});
