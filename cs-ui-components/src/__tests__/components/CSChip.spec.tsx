import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSChip from '../../components/CSChip';

const chipColor = '#4a26ab';
const chipText = 'chip';

describe('<CSChip />', () => {
	it('should render chip with variant brand and variant style filled', () => {
		const uut = shallow(<CSChip text={chipText} />);
		expect(uut.find('.cs-chip-brand')).toHaveLength(1);
	});

	it('should render chip with variant brand', () => {
		const uut = shallow(<CSChip text={chipText} variant="brand" />);
		expect(uut.find('.cs-chip-brand')).toHaveLength(1);
	});

	it('should render chip with variant success', () => {
		const uut = shallow(<CSChip text={chipText} variant="success" />);
		expect(uut.find('.cs-chip-success')).toHaveLength(1);
	});

	it('should render chip with variant neutral', () => {
		const uut = shallow(<CSChip text={chipText} variant="neutral" />);
		expect(uut.find('.cs-chip-neutral')).toHaveLength(1);
	});

	it('should render chip with variant error', () => {
		const uut = shallow(<CSChip text={chipText} variant="error" />);
		expect(uut.find('.cs-chip-error')).toHaveLength(1);
	});

	it('should render chip with variant warning', () => {
		const uut = shallow(<CSChip text={chipText} variant="warning" />);
		expect(uut.find('.cs-chip-warning')).toHaveLength(1);
	});

	it('should render chip with variant transparent', () => {
		const uut = shallow(<CSChip text={chipText} variant="transparent" />);
		expect(uut.find('.cs-chip-transparent')).toHaveLength(1);
	});

	it('should render chip with variant dark', () => {
		const uut = shallow(<CSChip text={chipText} variant="dark" />);
		expect(uut.find('.cs-chip-dark')).toHaveLength(1);
	});

	// * FOR VARIANT STYLE *
	it('should render chip with variant brand and border style', () => {
		const uut = shallow(<CSChip text={chipText} variant="brand" variantStyle="border" />);
		expect(uut.find('.cs-chip-brand-border')).toHaveLength(1);
	});

	it('should render chip with variant success and border style', () => {
		const uut = shallow(<CSChip text={chipText} variant="success" variantStyle="border" />);
		expect(uut.find('.cs-chip-success-border')).toHaveLength(1);
	});

	it('should render chip with variant neutral and border style', () => {
		const uut = shallow(<CSChip text={chipText} variant="neutral" variantStyle="border" />);
		expect(uut.find('.cs-chip-neutral-border')).toHaveLength(1);
	});

	it('should render chip with variant error and border style', () => {
		const uut = shallow(<CSChip text={chipText} variant="error" variantStyle="border" />);
		expect(uut.find('.cs-chip-error-border')).toHaveLength(1);
	});

	it('should render chip with variant warning and border style', () => {
		const uut = shallow(<CSChip text={chipText} variant="warning" variantStyle="border" />);
		expect(uut.find('.cs-chip-warning-border')).toHaveLength(1);
	});

	it('should render chip with variant transparent and border style', () => {
		const uut = shallow(<CSChip text={chipText} variant="transparent" variantStyle="border" />);
		expect(uut.find('.cs-chip-transparent-border')).toHaveLength(1);
	});

	it('should render chip with variant dark and border style', () => {
		const uut = shallow(<CSChip text={chipText} variant="dark" variantStyle="border" />);
		expect(uut.find('.cs-chip-dark-border')).toHaveLength(1);
	});

	it('should render chip with color pattern fill', () => {
		const uut = shallow(<CSChip text={chipText} color={chipColor} />);
		const CSChipColor = uut.find('.cs-chip-brand.cs-chip-custom-color');
		expect(CSChipColor).toHaveLength(1);
		expect(CSChipColor.get(0).props.style).toHaveProperty('--cs-chip-custom-c', chipColor);
	});

	it('should render chip with variant style fill', () => {
		const uut = shallow(<CSChip text={chipText} variantStyle="fill" />);
		expect(uut.find('.cs-chip-brand')).toHaveLength(1);
	});

	it('should render chip with border color variant', () => {
		const uut = shallow(<CSChip text={chipText} variantStyle="border" color={chipColor} />);
		const CSChipBorder = uut.find('.cs-chip-brand-border.cs-chip-custom-color-border');
		expect(CSChipBorder).toHaveLength(1);
		expect(CSChipBorder.get(0).props.style).toHaveProperty('--cs-chip-custom-c', chipColor);
	});

	it('should render chip with custom class', () => {
		const customClass = 'custom-br-mint';
		const uut = shallow(<CSChip text={chipText} className={customClass} />);
		expect(uut.find(`.cs-chip.${customClass}`)).toHaveLength(1);
	});

	it('should render divider with custom id', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSChip text={chipText} id={customId} />);
		expect(uut.find(`.cs-chip#${customId}`)).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSChip text={chipText} data-testid="rest" />);
		const chip = uut.find({ 'data-testid': 'rest' });
		expect(chip).toHaveLength(1);
	});
});
