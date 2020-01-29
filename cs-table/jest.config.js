module.exports = {
	preset: "ts-jest",
	transform: {
		//		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
		"^.+\\.css$": "<rootDir>/jest/cssTransform.js",
		"^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/jest/fileTransform.js"
	},
	testEnvironment: "jest-environment-jsdom-fourteen",
	globals: {
		"ts-jest": {
			types: ["jest"]
		}
	},
	setupFilesAfterEnv: ["<rootDir>/jest/setupTests.js"],
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts", "!src/local/**/*", "!src/App.tsx", "!src/index.tsx", "!src/SampleButton.tsx"],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "html", "clover"],
	transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$", "^.+\\.module\\.(css|sass|scss)$"]
};
