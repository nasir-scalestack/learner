module.exports = function(api) {
  api.cache(true);
  const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@assets': './assets',
          '@components': './components',
          '@fonts': './fonts',
        },
      },
    ],
  ];

  return {
    plugins,
    presets: ['babel-preset-expo'],
  };
};
