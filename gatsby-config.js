require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `c4ro`,
    description: `Portfolio Site of Carolina Rivera`,
    author: `@Aereli`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // `gatsby-env-variables`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-sanity-image`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'noekh21t',
        dataset: 'production',
        apiVersion: '2022-03-29',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sanity-image',
    //   options: {
    //     projectId: 'noekh21t',
    //     apiVersion: '2022-03-29',
    //     dataset: 'production',
    //     watchMode: true,
    //     token: process.env.SANITY_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: "fonts",
          path: `${__dirname}/src/styles/fonts/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
