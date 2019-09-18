const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = '8090';

module.exports = {
    mode: 'development',
    context: resolve(__dirname, '../src'),
    devtool: 'inline-source-map',
    entry: '../src/index.tsx',
    output: {
        path: resolve('lib'),
        publicPath: 'http://localhost:' + PORT + '/',
        filename: 'cs-grid-example.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            "ag-grid-community": resolve('./node_modules/ag-grid-community'),
            react: resolve('./node_modules/react')
        }
    },
    devServer: {
        port: PORT,
        // enable HMR on the server
        hot: false,
        noInfo: true,
        // minimize the output to terminal.
        quiet: false,
        // match the output path
        contentBase: [
            resolve(__dirname, 'src'),
            resolve(__dirname, 'node_modules/react/umd'),
            resolve(__dirname, 'node_modules/react-dom/umd'),
            resolve(__dirname, 'node_modules/ag-grid-community/dist/styles')
            ],
        // match the output `publicPath`
        publicPath: '/'
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/react', '@babel/preset-env'],
                }
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader", // compiles Sass to CSS
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(svg)$/i,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'react-svg-loader',
                        query: {
                            svgo: {
                                plugins: [{
                                    removeTitle: false
                                }],
                                floatPrecision: 2
                            }
                        }
                    }
                ]
            },
            {
              test: /\.(png|woff|eot|ttf|woff2)(\?.*$|$)/,
              loader: 'url-loader?limit=100000&mimetype=application/font-woff'
            },
            {
              test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'file-loader?name=images/[hash].[ext]',
            },
        ]
    },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
        //Generates an index.html file.
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};