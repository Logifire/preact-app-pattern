const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: './typescript/demo-app.tsx',
  output: {
    path: path.resolve(__dirname, 'webroot/js')
  },

  plugins: [
  ],

  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      include: [path.resolve(__dirname, 'typescript')],
      exclude: [/node_modules/]
    }]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}