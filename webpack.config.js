var path = require('path');

module.exports = {
  module: {
    preLoaders: [{
      loader: 'eslint-loader',
      test: /\.jsx?$/,
      exclude: /node_modules|bower_components/,
    }],
    loaders: [{
      loader: 'babel',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  eslint: {configFile: '.eslintrc'},
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
    devTool: 'source-map'
  },
};
