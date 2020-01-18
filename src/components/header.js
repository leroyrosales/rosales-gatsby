import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typewriter from '../components/typewriter'

const Header = ({ siteTitle }) => (
  <header className="bg-green-800 mb-8">
    <div className="custom-container pt-6 pb-1 px-4 md:px-0">
      <h1 className="m-0">
        <Link className="text-white hover:opacity-75" to="/">👨🏾‍💻 {siteTitle}</Link>
        <Typewriter />
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
