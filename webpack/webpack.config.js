var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require("html-webpack-plugin");

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

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true } // минификация HTML (убирает лишние пробелы)
    })
  ]
};

module.exports = config;