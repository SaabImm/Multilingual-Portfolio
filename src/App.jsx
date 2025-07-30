import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import About from './Pages/AboutMe'
import Contact from './Pages/ContactMe'
import { useState, useEffect } from "react";
import { useLangueContext } from './Context/translation'


export default function App() {
  const { language, toggleLang, t } = useLangueContext();
  return (
    <>
      <div className='dark:bg-white dark:text-black border-[5px] border-[#ff0000]'>
        <Navbar  lang={t}/>
        <section id='home' className='py-3'> <Home lang={t} /> </section>
        <section id='projects' className='py-3'> <Projects lang={t} /> </section>
        <section id='skills' className='py-3'> <Skills lang={t} /> </section>
        <section id='about' className='py-3'> <About lang={t} /> </section>
        <section id='contact' className='py-3'> <Contact lang={t} /> </section>
      </div>
      
    </>
  )
}

