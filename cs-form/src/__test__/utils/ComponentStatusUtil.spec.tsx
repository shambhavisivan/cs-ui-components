import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormSettings } from '../..';
import { calculateComponentStatus, checkComponentStatus, isMandatoryFieldPresent } from '../../utils/ComponentStatusUtil';

Enzyme.configure({ adapter: new Adapter() });

const formSettings: FormSettings = {
	locale: 'test locale',
	profile: ''
};

const basket: Record<string, any> = {};

describe('calculateComponentStatus()', () => {
	it('defaults to hidden', () => {
		const result = calculateComponentStatus({}, formSettings, basket);
		expect(result).toBe('hidden');
	});

	it('falls through to visible', () => {
		const result = calculateComponentStatus({ visible: 'true' }, formSettings, basket);
		expect(result).toBe('visible');
	});

	it('falls through to enabled', () => {
		const result = calculateComponentStatus({ enabled: 'true' }, formSettings, basket);
		expect(result).toBe('enabled');
	});

	it('ranks mandatory as top priority', () => {
		const result = calculateComponentStatus({ mandatory: 'true' }, formSettings, basket);
		expect(result).toBe('mandatory');
	});

	it('returns visible when visible is true', () => {
		const result = calculateComponentStatus({ mandatory: undefined, enabled: 'false', visible: 'true' }, formSettings, basket);
		expect(result).toBe('visible');
	});

	it('returns visible when visible is expression which evaluates to truthy value', () => {
		const result = calculateComponentStatus({ mandatory: undefined, visible: '1+2' }, formSettings, basket);
		expect(result).toBe('visible');
	});

	it('returns hidden when visible is expression which evaluates to falsy value', () => {
		const result = calculateComponentStatus({ mandatory: undefined, visible: '0' }, formSettings, basket);
		expect(result).toBe('hidden');
	});
});

describe('checkComponentStatus()', () => {
	it('returns false when expression is undefined', () => {
		const result = checkComponentStatus(formSettings, basket, undefined);
		expect(result).toBe(false);
	});

	it('returns false when expression is false', () => {
		const result = checkComponentStatus(formSettings, basket, 'false');
		expect(result).toBe(false);
	});

	it('returns true when expression is true', () => {
		const result = checkComponentStatus(formSettings, basket, 'true');
		expect(result).toBe(true);
	});

	it('returns true when expression evaluates to truthy value', () => {
		const result = checkComponentStatus(formSettings, basket, '1+2');
		expect(result).toBe(true);
	});

	it('returns false when expression evaluates to falsy value', () => {
		const result = checkComponentStatus(formSettings, basket, '5*0');
		expect(result).toBe(false);
	});
});

describe('isMandatoryFieldPresent()', () => {
	it('returns true if status isn\'t \'mandatory\'', () => {
		expect(isMandatoryFieldPresent('enabled', null)).toBe(true);
		expect(isMandatoryFieldPresent('hidden', null)).toBe(true);
		expect(isMandatoryFieldPresent('visible', null)).toBe(true);

		expect(isMandatoryFieldPresent('enabled', 1)).toBe(true);
		expect(isMandatoryFieldPresent('hidden', 1)).toBe(true);
		expect(isMandatoryFieldPresent('visible', 1)).toBe(true);
	});

	it('returns false if status is \'mandatory\' and value is null-ish', () => {
		expect(isMandatoryFieldPresent('mandatory', null)).toBe(false);
		expect(isMandatoryFieldPresent('mandatory', '')).toBe(false);
		expect(isMandatoryFieldPresent('mandatory', undefined)).toBe(false);
	});

	it('returns true if status is \'mandatory\' and value is not null-ish', () => {
		expect(isMandatoryFieldPresent('mandatory', 3.14)).toBe(true);
		expect(isMandatoryFieldPresent('mandatory', 'pi')).toBe(true);
		expect(isMandatoryFieldPresent('mandatory', 0)).toBe(true);
	});
});
