module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@app': './app',
          '@common': './app/common',
          '@components': './app/components',
          '@constants': './app/constants',
          '@utils': './app/utils',
        },
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    ],
  ],
  overrides: [
    {
      plugins: [['@babel/plugin-transform-private-methods', {loose: true}]],
    },
  ],
};
