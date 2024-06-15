// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// next.config.js

module.exports = {
    webpackDevMiddleware: (config) => {
      // Watch options to ensure files are watched for changes
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
      };
      return config;
    },
  };
  