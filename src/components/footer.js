import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ siteTitle }) => (
  <footer className="min-h-full bg-green-800 text-white py-10 mt-5">
    <div className="custom-container mx-auto flex flex-col md:flex-row justify-between px-4 lg:px-0">
        <div className="mb-2">
            <Link className="hover:opacity-75" to="/">{siteTitle}</Link> © {new Date().getFullYear()}
        </div>
        <div>
          <ul className="list-none m-0">
            <li className="inline-block pr-2"><a className="text-2xl hover:opacity-75" href="mailto:leroyrosales@gmail.com"><FontAwesomeIcon icon="envelope" /></a></li>
            <li className="inline-block pr-2"><a className="text-2xl hover:opacity-75" href="https://github.com/leroyrosales/"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
            <li className="inline-block"><a className="text-2xl hover:opacity-75" href="https://www.linkedin.com/in/leroyrosales/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
          </ul>
        </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
