const CracoAlias = require('craco-alias'); // https://github.com/risenforces/craco-alias

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: '.',
        aliases: {
          '@': './src',
        },
      },
    },
  ],
};
