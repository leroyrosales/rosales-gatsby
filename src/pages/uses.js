import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faEnvelope, faGithub, faLinkedin, faArrowLeft )

const UsesPage = () => (
  <Layout>
    <SEO title="Uses" />
    <div className="custom-container">
      <p><a href="#" className="text-green-600 hover:underline hover:text-green-800">Branding for STAs presentation (Spring 2019) 🎁</a></p>
      <script src="https://gist.github.com/leroyrosales/feab6d7eea038dff38959dc90dcbc87f.js"></script>
    </div>
  </Layout>
)

export default UsesPage
