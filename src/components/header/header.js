import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./header.css"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <nav>
      <div className="logo">
        <li>
          <Link to="/">c4ro</Link>
        </li>
      </div>
      <ul className={isOpen ? "nav-links nav-active" : "nav-links"}>
        <li>
          <Link to="#">Architecture</Link>
        </li>
        <li>
          <Link to="#">Interior Design</Link>
        </li>
        <li>
          <Link to="#">Graphic Illustrations</Link>
        </li>
        <li>
          <Link to="#">Funiture</Link>
        </li>
        <li>
          <Link to="#">publications</Link>
        </li>
        <li>
          <Link to="#">resume + cv</Link>
        </li>
        <li>
          <Link to="#">Contact + learn</Link>
        </li>
      </ul>
      <div className={isOpen ? "burger open" : "burger"} onClick={toggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `c4ro`,
}

export default Header
