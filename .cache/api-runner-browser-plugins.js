module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Poiret One","Unica One","Righteous","Julius Sans One"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://portfolio-page-app.herokuapp.com"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
