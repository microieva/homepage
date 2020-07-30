import React from 'react'
import footerStyles from './styles.module.scss'

const copyPhoneNumber = () => {
  const phone = document.querySelector('#phoneNumber')
  const phoneNumber = phone.textContent.slice(0, -4)
  const textArea = document.createElement('input')
  textArea.value = phoneNumber
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  console.log('copied phone number:', textArea.value)
  textArea.remove()
}

const copyEmail = () => {
  const email = document.querySelector('#email')
  const emailAddress = email.textContent.slice(0, -4)
  const textArea = document.createElement('input')
  textArea.value = emailAddress
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  console.log('copied email address:', textArea.value)
  textArea.remove()
}

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>contact me:</p>
        <div
          id="phoneNumber"
          type="text"
          className={footerStyles.tooltip}
          onClick={copyPhoneNumber}
        >
          +358405899590
          <span className={footerStyles.tooltiptext}>Copy</span>
        </div>
        <div
          id="email"
          type="text"
          className={footerStyles.tooltip}
          onClick={copyEmail}
        >
          ieva.vyliaudaite@me.com
          <span className={footerStyles.tooltiptext}>Copy</span>
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p>
          inspired by:
          <a href="https://en.wikipedia.org/wiki/Piet_Mondrian" target="blank">
            {' '}
            Mondrian
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
