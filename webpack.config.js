var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/theme/main.scss',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    },{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      use:{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }]
  },
  devServer: {
    contentBase: "./src"
  }
};
