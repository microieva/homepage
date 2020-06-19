import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import headerStyles from './styles.module.scss'

const classnames = require('classnames')

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerContainer}>
      <h1>
        <Link
          className={headerStyles.title}
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle.toLowerCase()}
        </Link>
      </h1>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={classnames(headerStyles.navItem, headerStyles.red)}
              activeClassName={headerStyles.activeRed}
              to="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className={classnames(headerStyles.navItem, headerStyles.yellow)}
              activeClassName={headerStyles.activeYellow}
              to="/about"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              className={classnames(headerStyles.navItem, headerStyles.blue)}
              activeClassName={headerStyles.activeBlue}
              to="/portfolio"
            >
              portfolio
            </Link>
          </li>
        </ul>
      </nav>
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
