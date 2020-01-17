import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faEnvelope, faGithub, faLinkedin)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="text-2xl leading-tight">Leroy Rosales is a front-end web developer in Austin, Texas. He focuses on providing web development, website maintenance, and WordPress development.</p>
  </Layout>
)

export default IndexPage
