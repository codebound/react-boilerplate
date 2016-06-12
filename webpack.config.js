var debug = process.env.NODE_ENV !== 'production';
var webpack = require("webpack");


module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: [
    './src/init.jsx'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins: debug ? [] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
  resolve: {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['', 'js', 'jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot'
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['typecheck']
      }
    }]
  }
};

