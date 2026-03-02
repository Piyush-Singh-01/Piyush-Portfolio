import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

export default function Services() {
    const Services_Data = [
  {
    s_no: "01",
    s_name: "Frontend Development",
    s_desc: "Building responsive and interactive UI using HTML, CSS, JavaScript and React."
  },
  {
    s_no: "02",
    s_name: "Responsive Web Design",
    s_desc: "Creating mobile-friendly and fully responsive websites for all screen sizes."
  },
  {
    s_no: "03",
    s_name: "MERN Stack Development",
    s_desc: "Developing full-stack web applications using MongoDB, Express, React and Node.js."
  },
  {
    s_no: "04",
    s_name: "API Integration",
    s_desc: "Integrating REST APIs and handling dynamic data with asynchronous JavaScript."
  },
  {
    s_no: "05",
    s_name: "UI Implementation",
    s_desc: "Converting Figma/Design files into pixel-perfect, functional web interfaces."
  },
  {
    s_no: "06",
    s_name: "Performance Optimization",
    s_desc: "Improving application speed, code splitting and optimizing React components."
  }
];

  return (
    <div id='services' className='services'>
        
        <div className="services-title">
            <h1>My Skills & Expertise</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="services-container">
           {Services_Data.map((service,index)=>(
            <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                {/* <div className="services-readmore">
                    <p>Learn More</p>
                    <img src={arrow_icon} alt="" />
                </div> */}
            </div>
           ))}
        </div>

    </div>
  )
}