const path = require('path')

const pathToInlineSvg = path.resolve(__dirname, '../thylakoid-icons')

module.exports = async ({ config, mode }) => {


  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = pathToInlineSvg;

  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          query: {
            modules: true,
            importLoaders: 1,
          },
        },
        {
          loader: 'sass-loader',
        }
      ],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      }],
    }
  )
  // Return the altered config
  return config
};