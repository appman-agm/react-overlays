const path = require('path');

const docsConfig = require('./docs.config');

module.exports = Object.assign(
  {},
  docsConfig,
  {
    plugins: [],

    devtool: 'module-source-map',

    devServer: {
      host: '0.0.0.0',
      contentBase: path.resolve(__dirname, '../examples'),
      stats: { colors: true },
    },
  }
);
