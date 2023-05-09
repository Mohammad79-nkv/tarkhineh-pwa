const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      handler: 'CacheFirst',
      urlPattern: /^https?.*/,
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
        },
      }
    }
  ]
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
});
