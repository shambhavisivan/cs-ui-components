import { evaluateCustomExpression } from '../../utils/ExpressionEvaluator';
import { FormSettings } from '../../SFObjectForm';

const formSettings: FormSettings = {
	locale: 'test locale',
	profile: ''
};

const EMPTY_OBJECT: Record<string, any> = {};

it('evaluates constant expressions', () => {
	const resultTrue = evaluateCustomExpression(formSettings, EMPTY_OBJECT, '3 + 5 === 8');
	const resultFalse = evaluateCustomExpression(formSettings, EMPTY_OBJECT, '\'fortytwo\' === 42');
	expect(resultTrue).toBe(true);
	expect(resultFalse).toBe(false);
});

it('coerces result to boolean', () => {
	const resultTrue = evaluateCustomExpression(formSettings, EMPTY_OBJECT, '3');
	const resultFalse = evaluateCustomExpression(formSettings, EMPTY_OBJECT, 'null');
	expect(resultTrue).toBe(true);
	expect(resultFalse).toBe(false);
});

it('maps UserInfo', () => {
	const result = evaluateCustomExpression(formSettings, EMPTY_OBJECT, '$formSettings.locale === \'' + formSettings.locale + '\'');
	expect(result).toBe(true);
});

it('maps basket fields', () => {
	const result = evaluateCustomExpression(formSettings, { name: 'Mr. Basket' }, 'name === \'Mr. Basket\'');
	expect(result).toBe(true);
});
