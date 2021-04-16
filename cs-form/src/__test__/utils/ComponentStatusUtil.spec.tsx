import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { calculateComponentStatus, isMandatoryFieldPresent } from '../../utils/ComponentStatusUtil';
import { FormSettings } from '../..';

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
