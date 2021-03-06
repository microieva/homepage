import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './homepage.module.scss'

const classnames = require('classnames')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={classnames(styles.square, styles.yellow)}>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <p className={styles.link}>about</p>
          </Link>
        </div>
        <div className={classnames(styles.square, styles.two)}></div>
        <div className={classnames(styles.square, styles.three)}></div>
      </div>

      <div className={styles.bottom}>
        <div className={classnames(styles.square, styles.four)}></div>
        <div className={classnames(styles.square, styles.blue)}>
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
            <p className={styles.link}>portfolio</p>
          </Link>
        </div>
        <div className={classnames(styles.square, styles.six)}></div>
        <div className={classnames(styles.square, styles.red)}>
          <p className={styles.link}>home</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
