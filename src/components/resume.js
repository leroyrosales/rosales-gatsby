import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import resume from '../files/LRosales_resume.pdf'

const Resume = () => (

    (
      <section className="py-8">
        <div className="custom-container mx-auto">
          <p className="text-2xl leading-tight"><a href="mailto:leroyrosales@gmail.com" className="text-green-600 hover:text-green-800 hover:underline">Email me</a>, <a href={ resume } target="_blank" className="text-green-600 hover:text-green-800 hover:underline">view my resume</a>, <a href="https://github.com/leroyrosales/" target="_blank" className="text-green-600 hover:text-green-800 hover:underline">follow me on GitHub</a>, and <a href="https://www.linkedin.com/in/leroyrosales/" target="_blank" className="text-green-600 hover:text-green-800 hover:underline">connect with me on LinkedIn</a>.</p>
        </div>
      </section>
    )

)

export default Resume
