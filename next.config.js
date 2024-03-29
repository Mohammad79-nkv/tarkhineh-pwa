// const withPWA = require("next-pwa")({
//   dest: "public",
//   disable: false,
//   register: true,
//   skipWaiting: process.env.NODE_ENV === "development",
//   runtimeCaching: [
//     {
//       handler: 'CacheFirst',
//       urlPattern: /^https?.*/,
//       options: {
//         cacheName: 'offlineCache',
//         expiration: {
//           maxEntries: 200,
//           maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
//         },
//       }
//     }
//   ]
// });

// module.exports = withPWA({
//   // next.js config
//   reactStrictMode: true,
//   experimental: {
//     // appDir: true
//   }

// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const path = require("path");
const withPWAInit = require("next-pwa");

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: "public",
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
  // buildExcludes: ["app-build-manifest.json"],
  register: true,
  // disable: true,
  skipWaiting: true,
});

// const generateAppDirEntry = (entry) => {
//   const packagePath = require.resolve("next-pwa");
//   const packageDirectory = path.dirname(packagePath);
//   const registerJs = path.join(packageDirectory, "register.js");

//   return entry().then((entries) => {
//     // Register SW on App directory, solution: https://github.com/shadowwalker/next-pwa/pull/427
//     if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
//       if (Array.isArray(entries["main-app"])) {
//         entries["main-app"].unshift(registerJs);
//       } else if (typeof entries["main-app"] === "string") {
//         entries["main-app"] = [registerJs, entries["main-app"]];
//       }
//     }
//     return entries;
//   });
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "i.ibb.co", protocol: "https" }],
  },
  experimental: {
    appDir: true,
  },
  // webpack: (config) => {
  //   const entry = generateAppDirEntry(config.entry);
  //   config.entry = () => entry;

  //   return config;
  // },
};

module.exports = withPWA(nextConfig);
