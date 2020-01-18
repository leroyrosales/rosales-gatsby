import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

export class Header extends Component {
  render() {
    return (
      <header className="bg-green-800 mb-8">
      <div className="custom-container">
        <h1 className="m-0">
          <Link className="text-white hover:opacity-75" to="/">{this.props.siteTitle}</Link>
        </h1>
        <p></p>
      </div>
    </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


// const Header = ({ siteTitle }) => (
//   onClick() {

//   }


// )


// export default Header
