import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import { useState, useEffect } from "react";


export default function App() {

  return (
    <>
      <div className='dark:bg-white dark:text-black'>
        <Navbar />
        <section id='home' > <Home /> </section>
        <section id='projects'> <Projects  /> </section>
        <section id='skills'> <Skills /> </section>
      </div>
      
    </>
  )
}

