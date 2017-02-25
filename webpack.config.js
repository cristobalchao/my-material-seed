const path = require('path');
const webpack = require('webpack');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const OUT_PATH = path.resolve('./build');
// Used with webpack-dev-server
const PUBLIC_PATH = '/assets/';
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, './src'),

  entry: {
    app: './app.module.js',
    vendor: './vendor.module.js',
  },

  output: {
    path: OUT_PATH,
    filename: '[name].bundle.js',
    publicPath: PUBLIC_PATH,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory=true',
        options: {
          presets: ['es2015'],
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader', // creates style nodes from JS strings
        }, {
            loader: 'css-loader', // translates CSS into CommonJS
        }, {
            loader: 'sass-loader', // compiles SASS to CSS
        }],
      },
    ],
  },

  plugins:
    IS_PROD ? [
      new NgAnnotatePlugin({
        add: true,
        // other ng-annotate options here
      }),
    ] : [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js',
      }),

    ],

  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
};
