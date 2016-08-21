/*eslint-env node */
var path = require('path');
var webpack = require('webpack');

var loaders = [
  {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
  {test: /\.scss$/, loader: 'style!css!sass'}
];

var PORT = process.env.PORT || 8080;

module.exports = [{
  entry:  [
    `webpack-dev-server/client?http://127.0.0.1:${PORT}/`,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {loaders: loaders},
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: PORT,
    host: '127.0.0.1'
  }
}];
