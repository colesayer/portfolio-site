// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/colesayer/Development/portfolio_site/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/colesayer/Development/portfolio_site/src/pages/index.js"),
  "component---src-pages-info-js": require("gatsby-module-loader?name=component---src-pages-info-js!/Users/colesayer/Development/portfolio_site/src/pages/info.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/colesayer/Development/portfolio_site/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/colesayer/Development/portfolio_site/.cache/json/404.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/colesayer/Development/portfolio_site/.cache/json/layout-index.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/colesayer/Development/portfolio_site/.cache/json/index.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/colesayer/Development/portfolio_site/.cache/json/layout-index.json"),
  "info.json": require("gatsby-module-loader?name=path---info!/Users/colesayer/Development/portfolio_site/.cache/json/info.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/colesayer/Development/portfolio_site/.cache/json/layout-index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/colesayer/Development/portfolio_site/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/colesayer/Development/portfolio_site/.cache/layouts/index.js")
}