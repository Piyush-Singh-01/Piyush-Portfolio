import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App