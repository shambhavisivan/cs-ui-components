import { FieldDescriptor, FormDescriptor } from '../types/FormDescriptor';

/**
 * Shim for when Array.flat() is missing.
 * @param input Array to flatten
 */
function flatten<T>(input: Array<Array<T>>): Array<T> {
	if (Array.prototype.flat) {
		return input.flat(1);
	}
	return input.reduce((x, y) => x.concat(y), []);
}

/**
 * Constructs a single array of all the fields in a form descriptor.
 * @param descriptor
 */
export function fieldNamesInFormDescriptor(descriptor: FormDescriptor): Array<string> {
	return flatten(descriptor.panels.map(panel => panel.fields)).map(field => field.name);
}

/**
 * Fills in the optional settings in a `FormDescriptor` with their default value (if one exists).
 * @param descriptor
 */
export function applyDefaults(descriptor: FormDescriptor): FormDescriptor {
	const ret: FormDescriptor = JSON.parse(JSON.stringify(descriptor));
	flatten(ret.panels.map(panel => panel.fields)).forEach(field => {
		field.label = field.label || field.name;
		field.fieldType = field.fieldType || 'STRING';
	});
	return ret;
}

export function findFieldInFormDescriptor(
	descriptor: FormDescriptor,
	fieldName: string
): FieldDescriptor | undefined {
	return flatten(descriptor.panels.map(panel => panel.fields)).find(field => field.name === fieldName
	);
}
