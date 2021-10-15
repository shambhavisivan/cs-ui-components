const toKebabCase = (inputString: string) => {
	return inputString.split('').map((substring: string, substringIndex: number) => {
		if (substring.match(/\w/i) === null) {
			return '';
		}

		if (substringIndex && substring === substring.toUpperCase()) {
			return `-${substring.toLowerCase()}`;
		}

		return substring.toLowerCase();
	}).join('');
};

export default toKebabCase;
