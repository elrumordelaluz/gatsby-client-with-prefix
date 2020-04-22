const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-app-js": hot(preferDefault(require("/Users/lio/gatsby-client-with-prefix/src/pages/app.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lio/gatsby-client-with-prefix/src/pages/index.js")))
}

