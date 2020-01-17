module.exports = {
  siteMetadata: {
    title: `Leroy Rosales`,
    description: `Leroy Rosales is a front-end web developer in Austin, Texas. He focuses mainly on providing web development, website maintenance, and WordPress development.`,
    author: `Leroy Rosales`,
    email: `leroyrosales@gmail.com`,
    github: `https://github.com/leroyrosales/`,
    linkedin: `https://www.linkedin.com/in/leroyrosales/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("autoprefixer")
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
