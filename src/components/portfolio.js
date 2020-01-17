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
                image
              }
            }
          }
        }
      }
    `}

    render={data => (
      <section className="bg-gray-100 py-8">
        <div className="custom-container mx-auto">
          <h2>Projects for work</h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-between">
            {data.allMarkdownRemark.edges.map(portfolio => (
              <div className="md:w-1/3 p-8 bg-white text-center border mb-3">
                <h3>{ portfolio.node.frontmatter.title }</h3>
                <img src={ `${__dirname}/src/images ${ portfolio.node.frontmatter.image }` } />
                <Link to={ portfolio.node.frontmatter.path } className="bg-green-500 text-white hover:bg-white hover:text-green-500 p-3 border rounded">Checkout project</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  />

)

export default Portfolio
