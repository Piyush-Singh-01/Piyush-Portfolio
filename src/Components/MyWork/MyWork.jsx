import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

import ai_assistant from '../../assets/ai_assistant.png'
import ecommerce from '../../assets/ecommerce.png'
import code_reviewer from '../../assets/code_reviewer.png'
import movie_app from '../../assets/movie_app.png'
import chatgpt_clone from '../../assets/chatgpt_clone.png'
import netflix_clone from '../../assets/netflix_clone.png'

function MyWork() {
//
const mywork_data = [
  {
    w_no: 1,
    w_name: "AI Virtual Assistant",
    w_desc: "Voice-based AI assistant built with JavaScript and APIs to perform tasks and answer queries.",
    w_img: ai_assistant,
    w_link: "https://piyush-ai-virtual-assistance.onrender.com"
  },
  {
    w_no: 2,
    w_name: "AI-Powered E-commerce Website",
    w_desc: "Full-stack MERN e-commerce platform with smart product recommendations and admin dashboard.",
    w_img: ecommerce,
    // w_link: "https://piyush-ai-virtual-assistance.onrender.com"
  },
  {
    w_no: 3,
    w_name: "Code Reviewer",
    w_desc: "AI-based code review tool that analyzes and suggests improvements for JavaScript code.",
    w_img: code_reviewer,
    w_link: "https://code-reviewer-1cmg.onrender.com"
  },
  {
    w_no: 4,
    w_name: "Movie Guide App",
    w_desc: "React app using movie API to search films, view ratings, trailers, and details.",
    w_img: movie_app,
    w_link: "https://piyush-singh-01.github.io/Movie-Guide/"
  },
  {
    w_no: 5,
    w_name: "ChatGPT Clone",
    w_desc: "AI chat application using OpenAI API with real-time conversational interface.",
    w_img: chatgpt_clone,
    w_link: "https://piyush-singh-01.github.io/PIYUSH-GPT/"
  },
  {
    w_no: 6,
    w_name: "Netflix Clone",
    w_desc: "Responsive Netflix UI clone built with React, API integration and modern UI design.",
    w_img: netflix_clone,
    w_link: "https://netflix-clone-jove.onrender.com"
  }
]

  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="mywork-container">
           {mywork_data.map((work,index) =>(           
             <a className="work-link"
                key={index} 
                href={work.w_link} 
                target="_blank" 
                rel="noopener noreferrer">

                <div className="work-card">
                    <img src={work.w_img} alt={work.w_name} />
                    <h2>{work.w_name}</h2>
                    <p>{work.w_desc}</p>
                </div>
              </a>
           ))}
        </div>
    </div>
  )
}

export default MyWork