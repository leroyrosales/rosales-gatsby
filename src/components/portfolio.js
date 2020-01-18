import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

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
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}

    render={data => (
      <section className="bg-gray-100 py-10">
        <div className="custom-container mx-auto px-4 md:px-0">
          <h2>Projects for work</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-between">
            {data.allMarkdownRemark.edges.map(portfolio => (
              <div className="w-full md:w-1/3 min-h-full px-2 text-center mb-3">
                <div className="bg-white border h-full pb-6">
                  <Img 
                    fluid={ portfolio.node.frontmatter.featuredImage.childImageSharp.fluid }
                    className="mb-6"  
                  />
                  <h3 className="leading-none h-16 m-0">{ portfolio.node.frontmatter.title }</h3>
                  <Link to={ portfolio.node.frontmatter.path } className="bg-green-500 text-white hover:bg-white hover:text-green-500 p-3 mt-10 mb-3 border rounded">Checkout project</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  />

)

export default Portfolio
