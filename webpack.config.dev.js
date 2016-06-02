
var webpack = require('webpack')
var config = require('./webpack.config')

config.devtool = 'eval'
config.entry = {
    bundle: [
        './src/index.js'
    ],
    dev: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/dev.js'
    ]
}

config.plugins = config.plugins || []

config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
)

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    })
)

module.exports = config

