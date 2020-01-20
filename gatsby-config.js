module.exports = {
  siteMetadata: {
    title: 'John and Victoria are getting married',
    description: 'John and Victoria are getting married',
    keywords: 'John Fawcett, Victoria Fawcett, Wedding',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `GatsbyJS`,
        // short_name: `GatsbyJS`,
        // start_url: `/`,
        // background_color: `#f7f0eb`,
        // theme_color: `#a2466c`,
        // display: `standalone`,
        icon: 'src/img/favico.png',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /\.svg$/,
    //     },
    //   },
    // },
  ],
}
