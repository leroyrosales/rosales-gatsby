import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <Layout>
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <section className="custom-container">
            <h1>{post.frontmatter.title}</h1>
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
      }
    }
  }
`
