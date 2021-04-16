import {
	fieldNamesInFormDescriptor,
	applyDefaults,
	findFieldInFormDescriptor
} from '../../utils/FormDescriptorUtils';

describe('fieldNamesInFormDescriptor()', () => {
	it('returns empty array if input is empty', () => {
		const result = fieldNamesInFormDescriptor({ type: 'FORM', panels: [] });
		expect(result).toStrictEqual([]);
	});
	it('returns fields from single panel', () => {
		const result = fieldNamesInFormDescriptor({
			type: 'FORM',
			panels: [
				{
					title: '',
					isOpenByDefault: false,
					fields: [{ name: 'field1' }, { name: 'field2' }]
				}
			]
		});
		expect(result).toStrictEqual(['field1', 'field2']);
	});
	it('concatenates fields from multiple panels', () => {
		const result = fieldNamesInFormDescriptor({
			type: 'FORM',
			panels: [
				{
					title: '',
					isOpenByDefault: false,
					fields: [{ name: 'field1' }, { name: 'field2' }]
				},
				{
					title: '',
					isOpenByDefault: false,
					fields: [{ name: 'field3' }, { name: 'field4' }]
				}
			]
		});
		expect(result).toStrictEqual(['field1', 'field2', 'field3', 'field4']);
	});
});

describe('applyDefaults()', () => {
	it('returns unchanged output input is empty', () => {
		const result = applyDefaults({ type: 'FORM', panels: [] });
		expect(result).toStrictEqual({ type: 'FORM', panels: [] });
	});
	it('adds missing label and type to single panel', () => {
		const result = applyDefaults({
			type: 'FORM',
			panels: [
				{
					title: '',
					isOpenByDefault: false,
					fields: [{ name: 'field1' }]
				}
			]
		});
		expect(result).toStrictEqual({
			type: 'FORM',
			panels: [
				{
					title: '',
					isOpenByDefault: false,
					fields: [
						{
							name: 'field1',
							label: 'field1',
							fieldType: 'STRING'
						}
					]
				}
			]
		});
	});
	it('adds missing label and type to multiple panels', () => {
		const result = applyDefaults({
			type: 'FORM',
			panels: [
				{
					title: '',
					isOpenByDefault: false,
					fields: [{ name: 'field1' }]
				},
				{
					title: '',
					isOpenByDefault: false,
					fields: [{ name: 'field2' }]
				}
			]
		});
		expect(result).toStrictEqual({
			type: 'FORM',
			panels: [
				{
					title: '',
					isOpenByDefault: false,
					fields: [
						{
							name: 'field1',
							label: 'field1',
							fieldType: 'STRING'
						}
					]
				},
				{
					title: '',
					isOpenByDefault: false,
					fields: [
						{
							name: 'field2',
							label: 'field2',
							fieldType: 'STRING'
						}
					]
				}
			]
		});
	});
});

describe('findFieldInFormDescriptor()', () => {
	it('returns undefined if input is empty', () => {
		const result = findFieldInFormDescriptor({ type: 'FORM', panels: [] }, 'nonexistent');
		expect(result).toBeUndefined();
	});
	it('finds fields in single panel', () => {
		const result = findFieldInFormDescriptor(
			{
				type: 'FORM',
				panels: [
					{
						title: '',
						isOpenByDefault: false,
						fields: [{ name: 'field1' }, { name: 'field2' }]
					}
				]
			},
			'field1'
		);
		expect(result).toStrictEqual({ name: 'field1' });
	});
	it('finds fields in multiple panels', () => {
		const result = findFieldInFormDescriptor(
			{
				type: 'FORM',
				panels: [
					{
						title: '',
						isOpenByDefault: false,
						fields: [{ name: 'field1' }, { name: 'field2' }]
					},
					{
						title: '',
						isOpenByDefault: false,
						fields: [{ name: 'field3' }, { name: 'field4' }]
					}
				]
			},
			'field4'
		);
		expect(result).toStrictEqual({ name: 'field4' });
	});
});
