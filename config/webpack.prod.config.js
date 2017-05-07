const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ngToolsWebpack = require('@ngtools/webpack');
const BUNDLE_STYLE_FILENAME = 'bundle.[contenthash].css';
const extractBundleStyle = new ExtractTextPlugin({filename: BUNDLE_STYLE_FILENAME});

module.exports = webpackMerge(baseConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: '@ngtools/webpack'
        }, {
            test: /\.styl$/,
            loader: extractBundleStyle.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins() {
                            return [cssnano, autoprefixer];
                        }
                    }
                }, {
                    loader: 'stylus-loader'
                }]
            })
        }]
    },
    plugins: [
        extractBundleStyle,
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new ngToolsWebpack.AotPlugin({
            tsConfigPath: path.resolve(__dirname, '../tsconfig.json'),
            entryModule: path.resolve(__dirname, '../src/App/App.module#AppModule'),
            compilerOptions: {
                module: 'es2015'
            }
        })
    ]
});
