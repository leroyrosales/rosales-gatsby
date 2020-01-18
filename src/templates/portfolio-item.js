import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout";


export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
        <Helmet title={`${post.frontmatter.title} | Leroy Rosales`} />
        <section className="custom-container mx-auto px-4 md:px-0">
            <Link to="/" className="text-green-600 hover:text-green-800 hover:underline"><FontAwesomeIcon icon="arrow-left" /> Back</Link>
            <h1 className="mt-8">{post.frontmatter.title}</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between mb-16">
              <div className="w-full md:w-1/2">
                <Img 
                  className="max-w-xs border mb-8" 
                  fluid={ post.frontmatter.featuredImage.childImageSharp.fluid } 
                  objectFit="cover"
                  alt={ `${post.frontmatter.title} site screenshot` }
                />
              </div>
              <div className="w-full md:w-1/2">
                <div
                className="blog-post-content mb-10"
                dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <a href={ post.frontmatter.siteURL } target="_blank" without rel="noopener noreferrer" className="bg-green-500 text-white hover:bg-white hover:text-green-500 p-3 mt-10 mb-3 border rounded">See mock site</a>
              </div>
            </div>
            <Link to="/" className="text-green-600 hover:text-green-800 hover:underline leading-loose"><FontAwesomeIcon icon="arrow-left" /> Back</Link>
        </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        siteURL
      }
    }
  }
`
