
var webpack = require('webpack')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var autoprefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var postcssCustomProperties = require('postcss-custom-properties')
var postcssCustomMedia = require('postcss-custom-media')
var postcssCalc = require('postcss-calc')
var data = require('./src/data')

var config = {
  entry: {
    main: './src/index.js'
  },

  output: {
    filename: 'index.js',
    path: 'dist',
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
    new StaticSiteGeneratorPlugin('main', data.paths, data)
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

