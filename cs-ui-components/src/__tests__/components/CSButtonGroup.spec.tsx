import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSButtonGroup from '../../components/CSButtonGroup';

describe('<CSButtonGroup />', () => {
	it('should render button group ', () => {
		const uut = shallow(<CSButtonGroup />);
		expect(uut.find('.cs-button-group.cs-button-group-true')).toHaveLength(1);
	});

	it('should render button group with aria description', () => {
		const ariaDescription = 'Description for button group';
		const uut = shallow(<CSButtonGroup ariaDescription={ariaDescription} />);
		expect(uut.find('.cs-button-group')).toHaveLength(1);
		expect(uut.find('.cs-button-group > .cs-aria-description').text()).toBe(ariaDescription);
	});

	it('should render button group with combined group true', () => {
		const uut = shallow(<CSButtonGroup combined />);
		expect(uut.find('.cs-button-group-true')).toHaveLength(1);
	});

	it('should render button group with combined group false', () => {
		const uut = shallow(<CSButtonGroup combined={false} />);
		expect(uut.find('.cs-button-group-false')).toHaveLength(1);
	});

	it('should render button group with margin position left', () => {
		const uut = shallow(<CSButtonGroup marginPosition="left" />);
		expect(uut.find('.cs-button-group-margin-left')).toHaveLength(1);
	});

	it('should render button group with margin position right', () => {
		const uut = shallow(<CSButtonGroup marginPosition="right" />);
		expect(uut.find('.cs-button-group-margin-right')).toHaveLength(1);
	});

	it('should render button group with margin position both', () => {
		const uut = shallow(<CSButtonGroup marginPosition="both" />);
		expect(uut.find('.cs-button-group-margin-both')).toHaveLength(1);
	});

	it('should render button group with custom class', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSButtonGroup className={customClass} />);
		expect(uut.find(`.cs-button-group.${customClass}`)).toHaveLength(1);
	});

	it('should render button group with custom id', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSButtonGroup id={customId} />);
		expect(uut.find(`.cs-button-group#${customId}`)).toHaveLength(1);
	});
});
