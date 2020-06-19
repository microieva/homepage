import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import aboutpageStyles from './aboutpage.module.scss'

const classnames = require('classnames')

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAbout(sort: { fields: date, order: ASC }) {
        edges {
          node {
            about
            section {
              json
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulAbout

  return (
    <Layout>
      <SEO title="About" />
      <div className={aboutpageStyles.container}>
        <div className={aboutpageStyles.wrapper}>
          <div className={aboutpageStyles.row}>
            <div className={aboutpageStyles.text}>
              <p>{documentToReactComponents(edges[0].node.section.json)}</p>
            </div>
            <div
              className={classnames(
                aboutpageStyles.picture,
                aboutpageStyles.red,
              )}
            >
              <img src={edges[0].node.image.file.url} alt="Me" />
            </div>
          </div>
          <div className={aboutpageStyles.row}>
            <div
              className={classnames(
                aboutpageStyles.picture,
                aboutpageStyles.yellow,
              )}
            >
              <img src={edges[1].node.image.file.url} alt="Me" />
            </div>
            <div className={aboutpageStyles.text}>
              <p>{documentToReactComponents(edges[1].node.section.json)}</p>
            </div>
          </div>
          <div className={aboutpageStyles.row}>
            <div className={aboutpageStyles.text}>
              <p>{documentToReactComponents(edges[2].node.section.json)}</p>
            </div>
            <div
              className={classnames(
                aboutpageStyles.picture,
                aboutpageStyles.blue,
              )}
            >
              <img src={edges[2].node.image.file.url} alt="Me" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
