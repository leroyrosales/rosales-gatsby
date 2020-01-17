import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-green-800 mb-8">
    <div className="custom-container">
      <h1 className="m-0">
        <Link className="text-white hover:opacity-75" to="/">{siteTitle}</Link>
      </h1>
      <p></p>
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
