module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js',

	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
