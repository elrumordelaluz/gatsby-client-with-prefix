// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-app-js": () => import("./../src/pages/app.js" /* webpackChunkName: "component---src-pages-app-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

