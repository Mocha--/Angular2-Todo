const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const PORT = 7800;
const HOST = '0.0.0.0';

module.exports = webpackMerge(baseConfig, {
    entry: path.resolve(__dirname, '../src/index.ts'),
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        host: HOST,
        port: PORT,
        hot: true,
        overlay: {
            errors: true
        },
        historyApiFallback: true,
        headers: {
            "X-powered-by": 'webpack-dev-server'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ]
});
