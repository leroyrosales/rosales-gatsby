const path = require("path")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const portfolioItemTemplate = path.resolve(`src/templates/portfolio-item.js`)
  const result = await graphql(`
    {
        allMarkdownRemark {
        edges {
            node {
            frontmatter {
                path
            }
            }
        }
        }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: portfolioItemTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
