import { interpolateString, cloneAndReplaceField } from '../../utils/Util';

describe('interpolateString()', () => {
	it('leaves normal strings alone', () => {
		const result = interpolateString('string without placeholders', {});
		expect(result).toBe('string without placeholders');
	});

	it('replaces template placeholders', () => {
		const result = interpolateString('string ${x} placeholders', { x: 'with' });
		expect(result).toBe('string with placeholders');
	});

	it('fails on missing placeholder value', () => {
		expect(() => interpolateString('string ${x} placeholders', {})).toThrowError('Missing value for key ${x}');

	});
});

describe('cloneAndReplaceField()', () => {
	it('doesn\'t modify original object', () => {
		const original = {
			name1: 'value1',
			name2: 'value2'
		};
		const input = JSON.parse(JSON.stringify(original));
		cloneAndReplaceField(input, 'name1', 'newvalue');
		expect(input).toStrictEqual(original);
	});

	it('replaces existing field', () => {
		const input = {
			name1: 'value1',
			name2: 'value2'
		};
		const result = cloneAndReplaceField(input, 'name1', 'newvalue');
		expect(result).toStrictEqual({
			name1: 'newvalue',
			name2: 'value2'
		});
	});

	it('adds missing field', () => {
		const input = {
			name1: 'value1',
			name2: 'value2'
		};
		const result = cloneAndReplaceField(input, 'name3', 'newvalue');
		expect(result).toStrictEqual({
			name3: 'newvalue',
			...input
		});
	});

	it('removes field set to \'undefined\'', () => {
		const input = {
			name1: 'value1',
			name2: 'value2'
		};
		const result = cloneAndReplaceField(input, 'name1', undefined);
		expect(result).toStrictEqual({
			name2: 'value2'
		});
	});

});
