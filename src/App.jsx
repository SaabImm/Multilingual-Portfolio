import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import { useState, useEffect } from "react";
import { useLangueContext } from './Context/translation'


export default function App() {
  const { language, toggleLang, t } = useLangueContext();
  return (
    <>
      <div className='dark:bg-white dark:text-black border-[5px] border-[#ff0000]'>
        <Navbar  lang={t}/>
        <section id='home' > <Home lang={t} /> </section>
        <section id='projects'> <Projects lang={t} /> </section>
        <section id='skills'> <Skills lang={t} /> </section>
      </div>
      
    </>
  )
}

