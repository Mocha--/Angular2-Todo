const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PORT = 7800;

module.exports = {
    entry: [
        `webpack-dev-server/client?http://localhost:${PORT}`,
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, './src/index.ts')
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-loader', 'stylus-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        port: PORT,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            inject: 'body',
            hash: false
        })
    ]
}
