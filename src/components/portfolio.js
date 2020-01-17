import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query PortfolioQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}

    render={data => (
      <section className="bg-gray-100 py-8">
        <div className="custom-container mx-auto flex flex-col md:flex-row justify-between">
          {data.allMarkdownRemark.edges.map(portfolio => (
            <div>
              <h3>{ portfolio.node.frontmatter.title }</h3>
              <Link to={ portfolio.node.frontmatter.path }>See Project</Link>
            </div>
          ))}
        </div>
      </section>
    )}
  />

)

export default Portfolio
