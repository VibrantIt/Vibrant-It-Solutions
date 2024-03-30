import type { GatsbyConfig } from "gatsby"

const myCustomQueries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 768px)",
  md: "(max-width: 1024px)",
  l: "(max-width: 1536px)",
  portrait: "(orientation: portrait)",
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Vibrant_IT_Solutions",
    siteUrl: "https://www.yourdomain.tld",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,

  plugins: [
    // "gatsby-plugin-postcss",

    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bruno Ace SC`,
          `Cormorant Garamond`,
          `Balsamiq Sans`,
          `Delicious Handrawn`,
          `Golos Text:400,500,600,700`,
          `Lato:300`,
          `Lora`,
          `Open Sans`,
          `Poppins:300,400,500,600,700,800,900`,
          `Prompt:200,300,400`,
          `Sacramento`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },

    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",

    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       "gatsby-remark-relative-images",
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 1440,
    //         },
    //       },
    //       {
    //         resolve: "gatsby-remark-copy-linked-files",
    //         options: {
    //           destinationDir: "static",
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
    },
    // {
    //   resolve: "gatsby-remark-images",
    //   options: {
    //     maxWidth: 1440,
    //   },
    // },

    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // defaults to false
        jsxPragma: "jsx", // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
}

export default config
