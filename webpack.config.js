// entry --> output
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'), // path where we put the bundle.js file
    filename: 'bundle.js'
  },
  // to set up loaders via module.rules
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/, // inside is the regular expression
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]  // use to handle multiple loaders
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}
