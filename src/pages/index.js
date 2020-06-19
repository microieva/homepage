import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import homepageStyles from './homepage.module.scss'

const classnames = require('classnames')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={homepageStyles.wrapper}>
      <div className={homepageStyles.top}>
        <div
          className={classnames(homepageStyles.square, homepageStyles.yellow)}
        >
          <Link
            to="/about"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            about
          </Link>
        </div>
        <div
          className={classnames(homepageStyles.square, homepageStyles.two)}
        ></div>
        <div
          className={classnames(homepageStyles.square, homepageStyles.three)}
        ></div>
      </div>

      <div className={homepageStyles.bottom}>
        <div
          className={classnames(homepageStyles.square, homepageStyles.four)}
        ></div>
        <div className={classnames(homepageStyles.square, homepageStyles.blue)}>
          <Link
            to="/portfolio"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            portfolio
          </Link>
        </div>
        <div
          className={classnames(homepageStyles.square, homepageStyles.six)}
        ></div>
        <div className={classnames(homepageStyles.square, homepageStyles.red)}>
          .
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
