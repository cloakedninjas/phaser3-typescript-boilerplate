const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.config');

const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  ...baseConfig,
  mode: 'production',

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'index.html', to: DIST_DIR },
        { from: 'assets', to: DIST_DIR + '/assets' }
      ]
    })
  ]
};

delete config.devServer;
delete config.devtool;

module.exports = config;
