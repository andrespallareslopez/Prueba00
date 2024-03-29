/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Formacion',
    author: 'andres pallares lopez'
  },
  plugins: [
            'gatsby-plugin-sass',
            {
               resolve: 'gatsby-source-filesystem',
               options: {
                 name: 'src',
                 path: `${__dirname}/src/Post/`
               }
            },
            'gatsby-transformer-remark',
            'gatsby-transformer-yaml'
          ],
}
