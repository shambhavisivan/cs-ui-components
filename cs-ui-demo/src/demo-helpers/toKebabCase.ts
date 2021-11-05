const toKebabCase = (inputString: string) => (
	inputString.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/\s+/g, '-')
		.toLowerCase()
);

export default toKebabCase;
