const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: {
    cli: path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'bin'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {
                  'targets': {
                    'node': 'current',
                  },
                }],
              ],
              plugins: [
                'transform-react-pug',
                [
                  'transform-react-jsx',
                  {'pragma': 'h'},
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
      entryOnly: true,
    }),
  ],
  externals: [nodeExternals()],
};
