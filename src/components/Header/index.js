import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import "./_header.scss"
import styles from "./styles.module.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav>
        {/* <div className="logo"> */}
        <div className={styles.logo}>
          <li>
            <Link to="/">c4ro</Link>
          </li>
        </div>
        {/* <ul className={isOpen ? "nav-links nav-active" : "nav-links"}> */}
        <ul className={isOpen ? [styles.navLinks, styles.navActive].join(' ') : styles.navLinks}>
          <li>
            <Link to="/interior">Interior Design</Link>
          </li>
        </ul>
        <div
          // className={isOpen ? "burger open" : "burger"}
          className={isOpen ? [styles.burger, styles.open].join(' ') : styles.burger}
          onClick={toggle}
          onKeyDown={toggle}
          role="button"
          tabIndex={0}
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
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
