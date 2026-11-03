import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'

/* Subtle gradient divider between sections */
const SectionDivider = () => (
  <div className="w-full flex justify-center py-2">
    <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-[#a855f7]/15 to-transparent" />
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Navbar/>
      <Home/>
      <SectionDivider />
      <About/>
      <SectionDivider />
      <Services/>
      <SectionDivider />
      <Project/>
      <SectionDivider />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App