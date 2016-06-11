var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');





config = {

  entry: [
    path.resolve("src/index.js")],

  output: {
    path: path.resolve("build"),
    filename: "app.js"
  },

  // Настройка загрузки модулей
  resolve: {
    extensions: ["", ".js", ".jsx"], // с какими расширениями искать модуль
    alias: {
      "app": path.resolve("src")
    }
  },

  module: {
    loaders: [

      // Такая комбинация позволяет собирать из всех модулей подключенные css (тоже как модули) в один текст
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },




  plugins: [
    // Добавляет index.html в билд.
    // Причем сам подключает build.css (который готовися в ExtractTextPlugin) и build.js
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true } // минификация HTML (убирает лишние пробелы)
    }),
    // Собирает весь текст CSS в билд
    new ExtractTextPlugin('build.css')
  ]


};

module.exports = config;