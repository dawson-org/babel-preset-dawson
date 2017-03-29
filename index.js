const presetEnv = require('babel-preset-env');
const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');

module.exports = {
  plugins: [
    transformObjectRestSpread
  ],
  presets: [
    [presetEnv, { targets: { node: 6.10 } }]
  ]
};
