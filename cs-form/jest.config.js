module.exports = {
	preset: "ts-jest",
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
		"^.+\\.css$": "<rootDir>/jest/cssTransform.js",
		"^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/jest/fileTransform.js"
	},
	testEnvironment: "jest-environment-jsdom-fourteen",
	globals: {
		"ts-jest": {
			types: ["jest"]
		}
	},
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts", "!src/stories/*"],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "html", "clover"],
	transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$", "^.+\\.module\\.(css|sass|scss)$"]
};

/*

		"collectCoverage": true,
		"collectCoverageFrom": [
			"src/** /*.{js,jsx,ts,tsx}",
			"!src/** /*.d.ts"
		],
		"coverageDirectory": "coverage",
		"coverageReporters": [
			"text",
			"clover"
		],
		"setupFiles": [
			"react-app-polyfill/jsdom"
		],
		"setupFilesAfterEnv": [],
		"testEnvironment": "jest-environment-jsdom-fourteen",
		"transform": {
			"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
			"^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
			"^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
		},
		"transformIgnorePatterns": [
			"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
			"^.+\\.module\\.(css|sass|scss)$"
		],
		"modulePaths": [],
		"moduleNameMapper": {
			"^react-native$": "react-native-web",
			"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
		},
		"moduleFileExtensions": [
			"web.js",
			"js",
			"web.ts",
			"ts",
			"web.tsx",
			"tsx",
			"json",
			"web.jsx",
			"jsx",
			"node"
		],
		"watchPlugins": [
			"jest-watch-typeahead/filename",
			"jest-watch-typeahead/testname"
		]


*/
