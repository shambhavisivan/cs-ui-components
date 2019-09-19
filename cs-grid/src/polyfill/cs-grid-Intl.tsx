/**
 * A polyfill check for the Internationalization API, returns either the native Intl package or the polyfill intl version.
 * @param userLocale The user locale
 */
export async function getIntl(userLocale: string): Promise<any> {
	if (!global.Intl || !Intl.NumberFormat(userLocale).formatToParts) {
		const IntlPolyfill = await import('intl');
		await import(`intl/locale-data/jsonp/` + userLocale);

		global.Intl = IntlPolyfill.default;
	}

	return global.Intl;
}
