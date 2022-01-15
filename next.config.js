const withPlugins = require('next-compose-plugins');

const nextConfiguration = {
  /**
   * Target must be serverless.
   */
  target: 'serverless'
};

module.exports = withPlugins(
  nextConfiguration
);
