const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'app.js',
    path: DIST_DIR,
  },
  plugins: [
    new CopyPlugin([
      {from: 'src/index.html', to: DIST_DIR},
      {from: 'assets', to: DIST_DIR + '/assets'},
    ]),
  ],
};
