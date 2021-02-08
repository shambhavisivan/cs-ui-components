import { CSGridFeatureFlagHelper, CSGridFlagDefinition } from '../../src/utils/cs-grid-feature-flag-helper';

const TEST_DEFINITIONS: Record<string, CSGridFlagDefinition> = {
	default_on: {
		name: 'default_on',
		description: 'default on description',
		default: true
	},
	default_off: {
		name: 'default_off',
		description: 'default off description',
		default: false
	},

}

describe('CSGridFeatureFlagHelper', () => {
	describe('constructor', () => {
		it('returns default flags if called with empty input', () => {
			const uut = new CSGridFeatureFlagHelper(TEST_DEFINITIONS);

			expect(uut.flags).toEqual({ default_on: true, default_off: false });
		});

		it('overrides default flags with provided ones', () => {
			const uut = new CSGridFeatureFlagHelper(TEST_DEFINITIONS, { default_on: false, default_off: true });

			expect(uut.flags).toEqual({ default_on: false, default_off: true });
		});
	});

	describe('active()', () => {
		const uut = new CSGridFeatureFlagHelper(TEST_DEFINITIONS);
		
		expect(uut.active()).toEqual({
			default_on: {
				name: 'default_on',
				description: 'default on description',
				default: true
			}
		});
	});

	describe('all()', () => {
		const uut = new CSGridFeatureFlagHelper(TEST_DEFINITIONS);
		expect(uut.all()).toEqual(TEST_DEFINITIONS);
	});

});