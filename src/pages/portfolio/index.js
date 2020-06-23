import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import portfoliopageStyles from './portfoliopage.module.scss'

const classnames = require('classnames')

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className={portfoliopageStyles.container}>
        <div className={portfoliopageStyles.row}>
          <div
            className={classnames(
              portfoliopageStyles.square,
              portfoliopageStyles.red,
            )}
          >
            <h5>Javascript</h5>
            <div className={portfoliopageStyles.links}>
              <p>
                <a
                  href="https://microieva.github.io/color-generator/"
                  target="blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/microieva/color-generator"
                  target="blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  code
                </a>
              </p>
            </div>
          </div>
          <div
            className={classnames(
              portfoliopageStyles.square,
              portfoliopageStyles.blue,
            )}
          >
            <h5>React</h5>
            <div className={portfoliopageStyles.links}>
              <p>
                <a
                  href="https://sheltered-eyrie-21915.herokuapp.com/"
                  target="blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/microieva/countries-and-weather"
                  target="blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  code
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={portfoliopageStyles.row}>
          <div
            className={classnames(
              portfoliopageStyles.square,
              portfoliopageStyles.yellow,
            )}
          >
            <h5>React with Redux</h5>
            <div className={portfoliopageStyles.links}>
              <p>
                <a
                  href="https://microieva.github.io/bank-account/"
                  target="blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/microieva/bank-account"
                  target="blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  code
                </a>
              </p>
            </div>
          </div>
          <div
            className={classnames(
              portfoliopageStyles.square,
              portfoliopageStyles.white,
            )}
          >
            <h5>Java</h5>
            <div className={portfoliopageStyles.links}>
              <p>
                <a
                  href="https://github.com/microieva/worm-game"
                  target="blank"
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
                  target="blank"
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
