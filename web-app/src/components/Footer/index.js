import React, { Component } from 'react'
import './style.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <a className='footer__link' href="https://github.com/JacobHsu">
            About
        </a>
        <br/>
        <p className="footer__copyright">copyright ©2019</p>
      </footer>
    )
  }
}

export default Footer