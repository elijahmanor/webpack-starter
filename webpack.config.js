var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var sassLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'sass-loader?sourceMap&includePaths[]=' + path.resolve(__dirname, '.')
];
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});
var isProduction = process.env.NODE_ENV === 'production';

var config = {
  entry: {
    main: ['webpack/hot/only-dev-server', './js/app.jsx'],
    vendors: ['react', 'react-router']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js' + (isProduction ? '?[chunkhash]' : ''),
    publicPath: 'http://mycdn.com/'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  eslint: {
    configFile: path.resolve(__dirname, './.eslintrc')
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'eslint-loader'
    }, {
      test: /\.(scss)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'scss-lint-loader'
    }],
    postLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /(test|node_modules)\//,
      loader: 'istanbul-instrumenter'
    }],
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', minChunks: Infinity}),
    new ExtractTextPlugin('[name].css')
  ]
};

module.exports = config;
