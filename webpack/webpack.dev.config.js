var webpack = require('webpack');
var config  = require("./webpack.config.js");
var path = require('path');

module.exports = {

  entry: [
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/only-dev-server"
  ].concat(config.entry),

  output: config.output,

  resolve: config.resolve,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ].concat(config.plugins),

  // Подключаем лоадеры
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.resolve("src")
    }]
  },

  // Подключаю source-map для дебага
  // "inline-source-map" - вкомпиливается в билд (использовать на dev);
  // "source-map" - создаётся отдельным файлом в папке билда (использовать на prod)
  devtool: 'eval'

};
