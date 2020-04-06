const path = require('path');

module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: {
                importLoaders: 1,
                modules: {
                    mode: 'local',
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    // localIdentName: '[sha1:hash:hex:4]',
                    context: path.resolve(__dirname, '../'),
                },
            },
        },
        require.resolve('sass-loader')
    ],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};