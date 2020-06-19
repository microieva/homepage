const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ieva/portfolio/homepage/.cache/dev-404-page.js"))),
  "component---src-pages-404-index-js": hot(preferDefault(require("/home/ieva/portfolio/homepage/src/pages/404/index.js"))),
  "component---src-pages-about-index-js": hot(preferDefault(require("/home/ieva/portfolio/homepage/src/pages/about/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ieva/portfolio/homepage/src/pages/index.js"))),
  "component---src-pages-portfolio-index-js": hot(preferDefault(require("/home/ieva/portfolio/homepage/src/pages/portfolio/index.js")))
}

