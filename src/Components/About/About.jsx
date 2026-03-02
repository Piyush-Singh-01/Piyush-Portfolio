import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/singh.jpg'


function About() {
  return (
    <div id ='about' className='about'>
         <div className="about-title">
            <h1>About me</h1>
            <img src= {theme_pattern} alt="" />
         </div>
         <div className="about-sections">
             <div className="about-left">
                <img src= {profile_img} />
             </div>
             <div className="about-right">
                <div className="about-para">
                  <p>
                    I am a passionate MERN Stack Developer with hands-on experience in building 
                    full-stack web applications using MongoDB, Express, React, and Node.js.
                  </p>
                  <p>
                    I enjoy solving real-world problems through code and continuously improving 
                    my skills in DSA, and modern web technologies.
                  </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>Express JS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>DSA</p><hr style={{width: "50%"}}/></div>
                </div>
             </div>
         </div>
         <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>Months of Focused Learning</p>
            </div><hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>MERN Stack Projects</p>
            </div><hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Live Project Deployed</p>
            </div>
         </div>
    </div>
  )
}

export default About