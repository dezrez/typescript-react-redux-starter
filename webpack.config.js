'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

const nodeEnv = process.env.NODE_ENV;
const isProd = nodeEnv === 'production';

module.exports = {
  devtool: isProd ? 'source-map' : 'source-map',
  entry: {
    vendor: [
      './src/vendor.ts'
    ],
    main: [
      './src/index.tsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: "[name].[hash].js"
  },
  module: {
    rules: [
      loaders.tsx,
      loaders.html,
      loaders.css,
      loaders.scss,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
      loaders.json,
      loaders.png
    ],
  },
  resolve: {
    extensions: [
      '.webpack.js',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
      '.json',
    ],
    modules: [
      './src',
      'node_modules'
    ]
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: { index: '/' },
  },
  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': 'true',
    'react/addons': 'true',
  },
};