
var webpack = require('webpack')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var config = require('./webpack.config')
var data = require('./src/data')

config.devtool = 'eval'

config.entry = {
    bundle: [
        './src/index.js'
    ],
    dev: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './src/dev.js'
    ]
}

config.plugins = [
    new StaticSiteGeneratorPlugin('bundle', data.paths, data),
    new CopyWebpackPlugin([ { from: 'static' } ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    })
]

module.exports = config

