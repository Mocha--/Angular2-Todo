const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WEB = 'web';

module.exports = {
    target: WEB,
    entry: path.resolve(__dirname, '../src/index.ts'),
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: ['node_modules', path.resolve(__dirname, '../src')]
    },
    module: {
        rules: [{
            test: /\.styl$/,
            // TODO: incorporate postcss-loader
            loaders: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'stylus-loader'
            }]
        }, {
            test: /.html$/,
            loader: 'html-loader'
        }, {
            test: /\.(wtff|eot)$/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body',
            hash: false
        })
    ]
}
