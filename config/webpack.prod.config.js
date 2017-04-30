const path = require('path');
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const ngToolsWebpack = require('@ngtools/webpack');

const config = webpackMerge(baseConfig, {
    entry: path.resolve(__dirname, '../src/index-aot.ts'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[hash].js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: '@ngtools/webpack'
        }]
    },
    plugins: [
        new ngToolsWebpack.AotPlugin({
            tsConfigPath: path.resolve(__dirname, '../tsconfig.json'),
            entryModule: path.resolve(__dirname, '../src/App/App.module#AppModule')
            // compilerOptions: {
            //     module: 'es2015'
            // }
        })
    ]
});

module.exports = config;
