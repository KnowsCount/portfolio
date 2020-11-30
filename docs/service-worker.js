/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2e57ad080fed9ea5ac727035b5722a80"
  },
  {
    "url": "assets/css/0.styles.d0645eaf.css",
    "revision": "bc66fc8838ce889899b9f168fa00c550"
  },
  {
    "url": "assets/js/2.0a8f19ca.js",
    "revision": "d0db20be46e0f6833a7467d3bca33cb8"
  },
  {
    "url": "assets/js/3.0405d7dd.js",
    "revision": "ac38f9536976949dc6d40fe214c88d31"
  },
  {
    "url": "assets/js/4.04fa854f.js",
    "revision": "5ed666958f39d86fd59c7285b014418b"
  },
  {
    "url": "assets/js/5.e15b3887.js",
    "revision": "e9a072c85a8b577e636fded8e4fb48db"
  },
  {
    "url": "assets/js/app.ed5f53c9.js",
    "revision": "a648c6a99207f0322241f0aa68f5c8bb"
  },
  {
    "url": "index.html",
    "revision": "0f244e3ee6c3e8d701d5a73a3d1bcfdd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
