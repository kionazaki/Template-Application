var path = require('path');
var webpack = require('webpack');
var config  = require("./webpack.config.js");
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  plugins: [
    // Не создавать сборку, если есть ошибки (именно при сборке а не в синтаксисе модулей)
    new webpack.NoErrorsPlugin(),

    // минификация
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ].concat(config.plugins),

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.resolve("src")
    }]
  }

};
