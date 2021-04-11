/* eslint-disable @typescript-eslint/no-var-requires */
const withNx = require('@nrwl/next/plugins/with-nx');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = withNx({
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env.local'),
      defaults: path.resolve(__dirname, '.env'),
    }),
  ],
});
