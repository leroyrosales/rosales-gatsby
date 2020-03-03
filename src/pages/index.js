import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Portfolio from "../components/portfolio"
import Skills from "../components/skills"
import People from "../components/people"
import Resume from "../components/resume"
import Intro from "../components/intro"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faEnvelope, faGithub, faLinkedin, faArrowLeft )

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
    <Portfolio/>
    <Skills />
    <People />
    <Resume />
  </Layout>
)

export default IndexPage
