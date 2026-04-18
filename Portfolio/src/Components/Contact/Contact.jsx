import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

// Social Icons (add these SVG/PNG in assets folder)
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify'

function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
 
    // formData.append("access_key", "d0ada562-393c-4be6-af8b-5263ed6de99d");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");
        event.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please check your connection.");
    }finally{
       setLoading(false);
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>
            I'm currently looking for internship opportunities as a Full Stack Developer.
            If you have any opportunity or project collaboration, feel free to reach out.
            I would love to contribute and grow as a developer.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>piyushsinghrajput9939@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9939606075</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Gurugram, Haryana (India)</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials">
            <a href="https://wa.me/919939606075" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>

            <a href="https://linkedin.com/in/piyush-singh-b94203319" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://github.com/Piyush-Singh-01" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />

          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' required />

          <label>Your Message</label>
          <textarea style={{resize:"none"}} name='message' rows="7" placeholder='Enter your message' required></textarea>

          <button onClick={()=>setLoading(true)} type='submit' className='contact-submit'>
           {loading? 'Sending...': 'Send Message'}
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact