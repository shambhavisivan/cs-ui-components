/**
 * Simple interpolation utility for when the template string isn't known up front.
 * If the template string is static, please use ES template literals instead.
 *
 * They're much cooler.
 *
 * @param template "Hello, ${foo}!"
 * @param vars  {foo: "world"}
 * @returns "Hello, world!"
 */
export function interpolateString(template: string, vars: Record<string, any>): string {
	return template.replace(/\$\{([^}]+)}/g, key => {
		const ret = vars[key.slice(2, -1)];
		if (typeof ret === 'undefined') {
			throw new Error('Missing value for key ' + key);
		}
		return ret;
	});
}

/**
 * Clone an immutable object and set a single field on it
 * @param input
 * @param name
 * @param value
 */
export function cloneAndReplaceField<T extends Record<string, any>>(input: T, name: string, value: any): T {
	const ret: Record<string, any> = { ...input };
	if (value === undefined) {
		delete ret[name];
	} else {
		ret[name] = value;
	}
	return ret as T;
}
