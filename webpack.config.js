
var path = require('path')
var webpack = require('webpack')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var autoprefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var postcssCustomProperties = require('postcss-custom-properties')
var postcssCustomMedia = require('postcss-custom-media')
var postcssCalc = require('postcss-calc')
var data = require('./src/data')

var config = {
    devtool: 'cheap-source-map',

    entry: {
        bundle: './src/index.js'
    },

    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve('./dist'),
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel'
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'css',
                    'postcss'
                ]
            }
        ]
    },

    plugins: [
        new StaticSiteGeneratorPlugin('bundle', data.paths, data),
        new CopyWebpackPlugin([ { from: 'static' } ]),
        new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
        })
    ],

    postcss: function () {
        return [
            postcssImport({
                addDependencyTo: webpack
            }),
            postcssCustomProperties,
            postcssCustomMedia,
            postcssCalc,
            autoprefixer
        ]
    }
}

module.exports = config

