const path = require('path');
const webpack = require('webpack');

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');

module.exports = {
  cache: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: true, warnings: VERBOSE } }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],

  entry: {
    index: "./src/index.js",
  },

  output: {
    publicPath: '/',
    sourcePrefix: '',
    path: __dirname + '/dest',
    filename: '[name].js',
  },

  target: "web",

  resolve: {
    extensions: ['.js'],
  },
  
  devtool : 'inline-source-map',

  module : {
    noParse : /jquery/,
    loaders: [
      {
        test: /\.js?$/,
        loader : 'babel-loader',
        exclude : /node_modules/
      },
    ]
  }
};