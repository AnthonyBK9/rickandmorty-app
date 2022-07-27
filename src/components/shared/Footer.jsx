import React from 'react'
import './style/footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <p>Creado por Antonio Bermúdez &copy;</p>
          <div className="footer-icon">
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer