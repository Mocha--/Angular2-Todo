const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');
const autoprefixer = require('autoprefixer');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const DEV_SERVER_PORT = 7800;
const ANALYZER_PORT = DEV_SERVER_PORT + 1;
const HOST = 'localhost';

module.exports = webpackMerge(baseConfig, {
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [{
                loader: 'awesome-typescript-loader'
            }, {
                loader: 'angular2-template-loader'
            }]
        }, {
            test: /\.styl$/,
            loaders: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins() {
                        return [autoprefixer];
                    }
                }
            }, {
                loader: 'stylus-loader'
            }]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: false,
        host: HOST,
        port: DEV_SERVER_PORT,
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
        // new webpackBundleAnalyzer.BundleAnalyzerPlugin({
        //     analyzerPort: ANALYZER_PORT
        // })
    ]
});
