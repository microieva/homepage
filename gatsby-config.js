require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `IEVA VYLIAUDAITE`,
    description: `Homepage`,
    author: `ieva-vyliaudaite`,
    type: process.env.GATSBY_ACTIVE_ENV || 'staging',
    siteUrl: `https://portfolio-page-app.herokuapp.com`,
    hostname: `portfolio-page-app.herokuapp.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poiret One', 'Unica One', 'Righteous', 'Julius Sans One'],
        },
      },
    },

    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://portfolio-page-app.herokuapp.com`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
