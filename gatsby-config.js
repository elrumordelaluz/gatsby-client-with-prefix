const { join } = require("path");

module.exports = {
  pathPrefix: `/gatsby-client-with-prefix`,
  siteMetadata: {
    title: "My Site",
    titleTemplate: "%s · Site",
    description: "My Site.",
    url: "https://my-site.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ],
};
