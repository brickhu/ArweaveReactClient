const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0000ff',
              '@text-color': '#333333',
              '@redcolor': '#ff0000',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};