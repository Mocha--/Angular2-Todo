const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const WEB = 'web';
const VENDOR_STYLE_FILENAME = 'vendor.[contenthash].css';
const extractVendorStlye = new ExtractTextPlugin({filename: VENDOR_STYLE_FILENAME});

module.exports = {
    target: WEB,
    entry: path.resolve(__dirname, '../src/index.ts'),
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: ['node_modules', path.resolve(__dirname, '../src')]
    },
    module: {
        rules: [{
            test: /.html$/,
            loader: 'html-loader'
        }, {
            test: /\.(woff2|woff|eot|ttf)/,
            loader: 'url-loader'
        }, {
            test: /\.css$/,
            loader: extractVendorStlye.extract({
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
                }]
            })
        }]
    },
    plugins: [
        extractVendorStlye,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body',
            hash: false
        })
    ]
}
