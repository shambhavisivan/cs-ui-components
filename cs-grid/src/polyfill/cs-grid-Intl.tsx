/**
 * A polyfill check for the Internationalization API, returns either the native Intl package or the polyfill intl version.
 * @param userLocale The user locale
 */
export function getIntl(userLocale: string): typeof Intl {
	if (!global.Intl || !Intl.NumberFormat || !Intl.NumberFormat(userLocale).formatToParts) {
		console.error(
			'Intl.NumberFormat.formatToParts is not defined on this browser consider implementing a polyfill.'
		);
	}

	return global.Intl;
}
