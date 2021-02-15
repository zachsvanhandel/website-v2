module.exports = {
  siteMetadata: {
    title: `Zach Van Handel`,
    description: `Passionate. Innovative. Meticulous. And always improving. Looking for a software engineer in the Denver area? You've found the one.`,
    author: `@zachsvanhandel`,
    email: `zach@zachsvanhandel.me`,
    socialLinks: [
      { text: `GitHub`, url: `https://github.com/zachsvanhandel` },
      { text: `LinkedIn`, url: `https://linkedin.com/in/zachsvanhandel` },
      { text: `Twitter`, url: `https://twitter.com/zachsvanhandel` },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zach Van Handel`,
        short_name: `Zach Van Handel`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#4567ff`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.svg`,
        cache_busting_mode: `none`, // needed for gatsby-plugin-offline: https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/#using-with-gatsby-plugin-offline
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/*icon*`], // needed for gatsby-plugin-manifest: https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/#using-with-gatsby-plugin-offline
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets\/images/,
        },
      },
    },
  ],
}
