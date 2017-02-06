const presetEnv = require('babel-preset-env');
const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');

export default {
  plugins: [
    transformObjectRestSpread
  ],
  presets: [
    [presetEnv, { targets: { node: 4.3 } }]
  ]
};
