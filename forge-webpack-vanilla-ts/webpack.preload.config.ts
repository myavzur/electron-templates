import type { Configuration } from 'webpack';

import { plugins } from './webpack.shared.plugins';
import { rules } from './webpack.shared.rules';

const preloadConfig: Configuration = {
  entry: {
    preload: './src/preload/preload.ts',
  },
  module: {
    rules,
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    filename: '[name].js',
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  target: 'electron-preload',
};

export {
  preloadConfig
};

