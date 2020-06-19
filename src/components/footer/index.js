import React from 'react'
import footerStyles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div>
        <p>contact me:</p>
        <p>+35840 5899 590</p>
        <p>ieva.vyliaudaite@me.com</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p>
          inspired by:
          <a href="https://en.wikipedia.org/wiki/Piet_Mondrian" target="blank">
            {' '}
            Modrian
          </a>{' '}
          &{' '}
          <a href="https://en.wikipedia.org/wiki/Bauhaus" target="blank">
            Bauhaus
          </a>
        </p>
        <p>
          built with:
          <a href="https://www.gatsbyjs.org/" target="blank">
            {' '}
            Gatbsy
          </a>{' '}
          &{' '}
          <a href="https://www.contentful.com/" target="blank">
            Contentful
          </a>
        </p>
        <p>
          created by:
          <a href="https://www.linkedin.com/in/ievavyliaudaite/" target="blank">
            {' '}
            Ieva Vyliaudaite
          </a>
          , © 2020
        </p>
      </div>
    </footer>
  )
}

export default Footer
