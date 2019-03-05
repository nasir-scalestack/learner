module.exports = function(api) {
  api.cache(true);
  const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@fonts': './src/fonts',
          '@styles': './src/styles',
        },
      },
    ],
  ];

  return {
    plugins,
    presets: ['babel-preset-expo'],
  };
};
