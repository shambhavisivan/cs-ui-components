var path = require("path");
var mode = 'production';

module.exports = {
	mode: mode,
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		libraryTarget: "commonjs2"
	},
	devtool: (mode === 'development') ? 'inline-source-map' : false,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]'
							}
						}
					},
					'sass-loader'
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-url-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				// loader: 'file-loader', webpack recommend file-loader to load fonts, but warning message appears when loading them in demo part!
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
					publicPath: '../fonts/'
				}
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	externals: {
		"react": "react",
		"react-dom": "ReactDOM"
	}
};
