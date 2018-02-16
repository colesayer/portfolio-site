// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/colesayer/Development/portfolio_site/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/colesayer/Development/portfolio_site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/colesayer/Development/portfolio_site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/colesayer/Development/portfolio_site/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/colesayer/Development/portfolio_site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/colesayer/Development/portfolio_site/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/colesayer/Development/portfolio_site/.cache/json/layout-index.json"),
  "404.json": require("/Users/colesayer/Development/portfolio_site/.cache/json/404.json"),
  "layout-index.json": require("/Users/colesayer/Development/portfolio_site/.cache/json/layout-index.json"),
  "index.json": require("/Users/colesayer/Development/portfolio_site/.cache/json/index.json"),
  "layout-index.json": require("/Users/colesayer/Development/portfolio_site/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/colesayer/Development/portfolio_site/.cache/json/404-html.json")
}