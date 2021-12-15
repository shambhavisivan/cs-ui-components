import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSButtonGroup from '../../components/CSButtonGroup';

describe('<CSButtonGroup />', () => {
	it('should render the default CSButtonGroup', () => {
		const uut = shallow(<CSButtonGroup />);
		// Should render a button group
		const buttonGroup = uut.find('.cs-btn-group');
		expect(buttonGroup).toHaveLength(1);
		// combined
		expect(buttonGroup.find('.cs-btn-group-combined')).toHaveLength(1);
	});

	it('should set aria description attribute', () => {
		const ariaDescription = 'Description for button group';
		const uut = shallow(<CSButtonGroup ariaDescription={ariaDescription} />);
		expect(uut.find('.cs-btn-group')).toHaveLength(1);
		expect(uut.find('.cs-btn-group > .cs-aria-description').text()).toBe(ariaDescription);
	});

	it('should render a button group that is combined', () => {
		const uut = shallow(<CSButtonGroup combined />);
		expect(uut.find('.cs-btn-group-combined')).toHaveLength(1);
	});

	it('should render button group that is not combined', () => {
		const uut = shallow(<CSButtonGroup combined={false} />);
		expect(uut.find('.cs-btn-group:not(.cs-btn-group-combined)')).toHaveLength(1);
	});

	it('should render button group with margin position left', () => {
		const uut = shallow(<CSButtonGroup marginPosition="left" />);
		expect(uut.find('.cs-btn-group-margin-left')).toHaveLength(1);
	});

	it('should render button group with margin position right', () => {
		const uut = shallow(<CSButtonGroup marginPosition="right" />);
		expect(uut.find('.cs-btn-group-margin-right')).toHaveLength(1);
	});

	it('should render button group with margin position both', () => {
		const uut = shallow(<CSButtonGroup marginPosition="both" />);
		expect(uut.find('.cs-btn-group-margin-both')).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSButtonGroup className={customClass} />);
		expect(uut.find(`.cs-btn-group.${customClass}`)).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSButtonGroup id={customId} />);
		expect(uut.find(`.cs-btn-group#${customId}`)).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSButtonGroup data-testid="rest" />);
		const buttonGroup = uut.find({ 'data-testid': 'rest' });
		expect(buttonGroup).toHaveLength(1);
	});
});
