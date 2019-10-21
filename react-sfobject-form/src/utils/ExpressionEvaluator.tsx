import { FormSettings } from '..';

/**
 * Dynamically evaluates an expression, in the context of the provided form settings and the form object.
 *
 * (Used for determining visibility/readonly/required status for fields.)
 *
 * @param sfObject Form object fields, mapped into the global context of the expression (i.e. field "Name" can be accessed simply as `Name`)
 * @param formSettings External information, accessible from the expression through the namespace `$formSettings`
 * @param expression The expression to be evaluated. Should ideally evaluate to a boolean, but truthy/falsy values are accepted too.
 */
export function evaluateCustomExpression(formSettings: FormSettings, sfObject: Record<string, any>, expression: string): boolean {
	return !!Function.apply(
		null,
		[
			'$formSettings', ...Object.keys(sfObject).map(x => x.replace(/\s/g, '')),
			'return ' + expression + ';'
		]
	).apply(
		null,
		[formSettings, ...Object.keys(sfObject).map(k => sfObject[k])]
	);
}
