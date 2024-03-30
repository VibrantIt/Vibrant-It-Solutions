const _ = require("lodash")
const path = require("path")
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query serviceList {
      services: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "service-page" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
      works: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "work-page" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
      blogs: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "blog-page" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  if (result.errors !== undefined && result.errors !== null) {
    result.errors.forEach((e) => {
      console.error(e.toString())
    })
    await Promise.reject(result.errors)
    return
  }

  const services = result.data?.services?.edges || []

  const works = result.data?.works?.edges || []

  const blogs = result.data?.blogs?.edges || []

  services.forEach((edge) => {
    const id = edge.node.id
    createPage({
      path: `services/${_.kebabCase(edge.node.frontmatter.title)}`,
      component: path.resolve("src/templates/service.tsx"),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })

  works.forEach((edge) => {
    const id = edge.node.id
    createPage({
      path: `works/${_.kebabCase(edge.node.frontmatter.title)}`,
      component: path.resolve("src/templates/work.tsx"),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })

  blogs.forEach((edge) => {
    const id = edge.node.id
    createPage({
      path: `blogs/${_.kebabCase(edge.node.frontmatter.title)}`,
      component: path.resolve("src/templates/blog.tsx"),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

