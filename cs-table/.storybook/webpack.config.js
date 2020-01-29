const path = require("path");

module.exports = async ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve("babel-loader"),
		options: {
			presets: [["react-app", { flow: false, typescript: true }]]
		}
	});
	config.module.rules.push({
		test: /\.(css|sass|scss)$/,
		use: [
			"style-loader", // creates style nodes from JS strings
			"css-loader", // translates CSS into CommonJS
			"sass-loader" // compiles Sass to CSS
		]
	});
	config.module.rules.push({
		test: /\.stories\.tsx?$/,
		loaders: [
			{
				loader: require.resolve("@storybook/addon-storysource/loader"),
				options: { parser: "typescript" }
			}
		],
		enforce: "pre"
	});
	config.resolve.extensions.push(".ts", ".tsx");

	return config;
};
