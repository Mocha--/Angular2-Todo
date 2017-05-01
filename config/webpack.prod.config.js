const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const ngToolsWebpack = require('@ngtools/webpack');

module.exports = webpackMerge(baseConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: '@ngtools/webpack'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: true,
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
