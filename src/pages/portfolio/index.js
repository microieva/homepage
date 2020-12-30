import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import styles from './portfoliopage.module.scss'

const classnames = require('classnames')

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={classnames(styles.square, styles.red)}>
            <h5 className={styles.title}>Javascript</h5>
            <div className={styles.links}>
              <p>
                <a
                  href="https://microieva.github.io/color-generator/"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/microieva/color-generator"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  code
                </a>
              </p>
            </div>
          </div>
          <div className={classnames(styles.square, styles.blue)}>
            <h5 className={styles.title}>React</h5>
            <div className={styles.links}>
              <p>
                <a
                  href="https://corona-covid19-world.herokuapp.com/"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/microieva/hello-world"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  code
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={classnames(styles.square, styles.yellow)}>
            <h5 className={styles.title}>React with Redux</h5>
            <div className={styles.links}>
              <p>
                <a
                  href="https://members-database.herokuapp.com/"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/microieva/farmers-database"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  code
                </a>
              </p>
            </div>
          </div>
          <div className={classnames(styles.square, styles.white)}>
            <h5 className={styles.title}>Java</h5>
            <div className={styles.links}>
              <p className={styles.tooltip}>
                <span className={styles.tooltiptext}>Demo localy</span>
                <a
                  href="https://github.com/microieva/worm-game"
                  target="_blank"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'not-allowed',
                  }}
                >
                  demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/microieva/worm-game"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  code
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
