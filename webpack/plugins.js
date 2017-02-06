'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const sourceMap = process.env.TEST || process.env.NODE_ENV !== 'production'
  ? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.tsx?$/ })]
  : [];

const basePlugins = [
  new CheckerPlugin(),
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __TEST__: JSON.stringify(process.env.TEST || false),
    __REZI_ENV__: JSON.stringify(process.env.REZI_ENV || null),
    __REDIRECT__: JSON.stringify(process.env.REDIRECT_URL || null),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.[hash].js'
  }),  
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  }),
  new CopyWebpackPlugin([
    { from: 'src/assets', to: 'assets' },
  ]),
  new webpack.NamedModulesPlugin()
].concat(sourceMap);

const devPlugins = [
];

const prodPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
    output: {
      comments: false
    },
  }),
  new webpack.optimize.AggressiveMergingPlugin()
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
