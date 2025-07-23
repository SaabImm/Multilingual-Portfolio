import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'


export default function App() {
  

  return (
    <>
      
        <Navbar/>
        <section id='home'> <Home /> </section>
        <section id='projects'> <Projects /> </section>
        <section id='skills'> <Skills /> </section>

    </>
  )
}

