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
      <div
        className={footerStyles.footerDiv}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <p className={footerStyles.title}>contact me:</p>
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
      <div className={footerStyles.footerDiv}>
        <p className={footerStyles.title}>inspired by:</p>
        <div>
          <a href="https://en.wikipedia.org/wiki/Piet_Mondrian" target="blank">
            {' '}
            Mondrian
          </a>{' '}
          &{' '}
          <a href="https://en.wikipedia.org/wiki/Bauhaus" target="blank">
            Bauhaus
          </a>
        </div>
      </div>

      <div className={footerStyles.footerDiv}>
        <p className={footerStyles.title}>built with:</p>
        <div>
          <a href="https://www.gatsbyjs.org/" target="blank">
            {' '}
            Gatbsy
          </a>{' '}
          &{' '}
          <a href="https://www.contentful.com/" target="blank">
            Contentful
          </a>
        </div>
      </div>
      <div className={footerStyles.footerDiv}>
        <p className={footerStyles.title}>created by:</p>
        <div>
          <a href="https://www.linkedin.com/in/ievavyliaudaite/" target="blank">
            {' '}
            Ieva Vyliaudaite
          </a>
          <spam className={footerStyles.spam}>, © 2020</spam>
        </div>
      </div>
    </footer>
  )
}

export default Footer
