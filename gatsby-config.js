module.exports = {
  siteMetadata: {
    siteUrl: "https://www.seimetelperu.com/",
    title: "Seimetel Perú",
    description: "Empresa dedicada a trabajos de Telecomunicaciones"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'towers',
        path: `${__dirname}/src/towers/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'galerias',
        path: `${__dirname}/src/galerias/`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
