const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser$: path.resolve(__dirname, 'node_modules/phaser/src/phaser-core.js')
    }

  },
  output: {
    filename: 'app.js',
    path: DIST_DIR
  },
  devServer: {
    host: '0.0.0.0'
  },
  devtool: 'sourcemap'
};
