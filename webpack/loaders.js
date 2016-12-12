'use strict';

exports.tslint = {
  test: /\.tsx?$/,
  enforce: 'pre',
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.tsx = {
  test: /\.ts(x?)$/,
  loader: 'awesome-typescript-loader',//'babel-loader!ts-loader', // replaced awesome-typescript-loader due to TS 2.1.4 bug
  exclude: /node_modules/,
};

exports.istanbulInstrumenter = {
  test: /^(.(?!\.test))*\.tsx?$/,
  loader: 'istanbul-instrumenter-loader',
  enforce: "post",
  query: {
    embedSource: true,
  },
};

exports.html = {
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css?-minimize!postcss',
  exclude: /node_modules/,
};

exports.scss = {
  test: /\.scss$/,
  loaders: ["style-loader", "css-loader", "sass-loader"],
  exclude: /node_modules/,
};

exports.json = {
  test: /\.json$/,
  loader: 'json-loader',
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.png = makeUrlLoader(/\.png$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url-loader',
    exclude: /node_modules/,
  };
}
