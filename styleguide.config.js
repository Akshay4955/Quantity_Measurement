module.exports = {
  components: 'src/**/*.js',
  ignore: ['src/utilities/*', 'src/services/*', '**/*.test.js', '**/node_modules/**', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
  template: {
    head: {
      links: [],
    },
  },
  webpackConfig: require('./webpack.config.js'),
};