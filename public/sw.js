if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/GcKzaEnWzOdOIwu_rKcuZ/_buildManifest.js",revision:"9262961651e0d7fa108aef74f09893fc"},{url:"/_next/static/GcKzaEnWzOdOIwu_rKcuZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2443530c-9716c3dcbc287977.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/560-248d7a37c214cf72.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/695-6fd4dd3cd63a4186.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/852-2c662c5e684e6626.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/981-05ce9cc4081e6845.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/app/branch/page-7866ce44a4f236fb.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/app/layout-a05de81db7c47e8d.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/app/page-1027dce9ff24d1d1.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/main-a12db9afc9ebba7b.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/main-app-0b51c0e2d45c3c7e.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/pages/_app-b555d5e1eab47959.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/pages/_error-d79168f986538ac0.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-abe0ba58bcdff8f4.js",revision:"GcKzaEnWzOdOIwu_rKcuZ"},{url:"/_next/static/css/6d65a6551fb91231.css",revision:"6d65a6551fb91231"},{url:"/_next/static/media/Estedad-FD-Regular.d763daef.ttf",revision:"d763daef"},{url:"/_next/static/media/Estedad-Light.a0a52452.ttf",revision:"a0a52452"},{url:"/_next/static/media/Estedad-Medium.8b8aa244.ttf",revision:"8b8aa244"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-chrome-192x192.png",revision:"d20c878a0d3655e6103d8d165b39a906"},{url:"/icons/android-chrome-384x384.png",revision:"cd14b46b5728b5b084044d80a936287d"},{url:"/icons/icon-512x512.png",revision:"36be36a49f4e763ed7fb35d33187d7d5"},{url:"/images/Footer.png",revision:"70a22a119c49d1576b0cc0f84c7969b5"},{url:"/images/FooterMobile.png",revision:"17efe7038441640bd1d9c9abade2dcef"},{url:"/images/about.png",revision:"0c3530d854a748be73e54f1fbc690e81"},{url:"/images/aboutMobile.png",revision:"4db6f9634bc736b69eef376e37d4009a"},{url:"/images/aghdasieImg.png",revision:"7b28f18f27300e289922c235dce072fa"},{url:"/images/chaloosImg.png",revision:"c27b694bdbde1d01e9f88edd75757cd5"},{url:"/images/dissert.png",revision:"22929936dd2cbbf18c3c0761a9eb3c85"},{url:"/images/drink.png",revision:"6b7bb396aca4183cce726a58eb59baf0"},{url:"/images/ekbatanImg.png",revision:"9ab7c905e9d492f31b3742214eb46523"},{url:"/images/food1.png",revision:"2246d5af56384e0ed7c338ac844eca43"},{url:"/images/food10.png",revision:"432c7d2ef0e081f792ad40ee82ed8ac7"},{url:"/images/food2.png",revision:"ab5ae34ef512d18f3b6adbd90f850e85"},{url:"/images/food3.png",revision:"33ca5c83a236f9f9add68d3c4427cebd"},{url:"/images/food4.png",revision:"ac845ce2e99b213b0349fb73e949dc54"},{url:"/images/food5.png",revision:"96b1805496d32da91395858e06a57495"},{url:"/images/food6.png",revision:"19f82fff56a6c29493789572de994c90"},{url:"/images/food7.png",revision:"9b8143fbaa168585b1f1ceb4a3af1b68"},{url:"/images/food8.png",revision:"3194afb63f65f6900c40c6edae4e57e2"},{url:"/images/food9.png",revision:"240dd245203f5862272b4dff14df48db"},{url:"/images/mainFood.png",revision:"30aca0d2e7fee1d086ebaa693630e759"},{url:"/images/preFood.png",revision:"1a978dea738ec9e3d7bdf354bf2b7c8e"},{url:"/images/userAvatar.png",revision:"5433f44ccafade9de0740d7bddb0af7f"},{url:"/images/vanakImg.png",revision:"6e3105669e400acc678c62e46dbea677"},{url:"/manifest.json",revision:"4356b250dc9c4a7942316f051be2b1e8"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
