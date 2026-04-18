import React from 'react'
import './Footer.css'
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-top-left">
          <h1>Piyush Singh</h1>
          <p>
            Full Stack Developer passionate about building modern web applications 
            using MERN stack and AI integrations. Currently looking for internship opportunities.
          </p>
        </div>

        {/* RIGHT - Social Links */}
        <div className="footer-top-right">
          <div className="footer-socials">
            <a href="https://wa.me/919939606075" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://linkedin.com/in/piyush-singh-b94203319" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Piyush-Singh-01" target="_blank" rel= "noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © 2025 Piyush Singh. All rights reserved.
        </div>

        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Footer