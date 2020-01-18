import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout";


export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
        <Helmet title={`${post.frontmatter.title} | Leroy Rosales`} />
        <section className="custom-container">
            <h1>{post.frontmatter.title}</h1>
            <Img 
              className="max-w-xs" 
              fluid={ post.frontmatter.featuredImage.childImageSharp.fluid } 
              objectFit="cover"
              alt={ `${post.frontmatter.title} site screenshot` }
            />
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
            />
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
      }
    }
  }
`
