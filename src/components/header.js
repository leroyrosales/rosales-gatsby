import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typewriter from '../components/typewriter'

const Header = ({ siteTitle }) => (
  <header className="mb-2">
    <hr class="h-2 bg-green-800"/>
    <div className="custom-container pt-2 pb-1 px-4 lg:px-0">
      <h1 className="m-0">
        <Link className="text-green-800 hover:opacity-75" to="/">👨🏾‍💻 {siteTitle}</Link>
      </h1>
      <Typewriter />
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
