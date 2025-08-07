import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import About from './Pages/AboutMe'
import Contact from './Pages/ContactMe'
import { useLangueContext } from './Context/translation'
import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // animation happens only once
  });
}, []);
  const { t } = useLangueContext();
  return (
    <>
      <div className='dark:bg-white dark:text-black transition-colors duration-500 ease-in-out'>
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

