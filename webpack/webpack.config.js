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

  // ��������� �������� �������
  resolve: {
    extensions: ["", ".js", ".jsx"], // � ������ ������������ ������ ������
    alias: {
      "app": path.resolve("src")
    }
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true } // ����������� HTML (������� ������ �������)
    })
  ]
};

module.exports = config;