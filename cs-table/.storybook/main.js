const path = require("path");

module.exports = {
	stories: ["../stories/**/*.stories.tsx"],
	addons: [
		"@storybook/addon-knobs",
		{
			name: "@storybook/addon-storysource",
			options: {
				rule: {
					test: [/\.stories\.tsx?$/],
					include: [path.resolve(__dirname, "../src")]
				},
				loaderOptions: {
					prettierConfig: { printWidth: 200, singleQuote: true }
				},
				parser: "typescript"
			}
		}
	]
};
