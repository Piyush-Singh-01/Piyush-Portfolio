import React from 'react'
import './Hero.css'
import profile_img from '../../assets/singh.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from '../../../public/Resume.pdf'

export default function Hero() {
   const handleResume = ()=>{
      window.open(resume, "_blank");
   }
  return (
    <div id='home' className="hero">
      <img src= {profile_img} alt="" />
      <h1><span>I'm Piyush Singh,</span> Fullstack Developer</h1>
      <p>I am a Fullstack Developer from INDIA</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact' offset={50}>Connect with me</AnchorLink></div>
        <button onClick={handleResume} className="hero-resume">My resume</button>
      </div>
      
    </div>
  )
}

