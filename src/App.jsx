import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'

export default function App() {
  

  return (
    <>
      
        <Navbar/>
        <section id='home'> <Home /> </section>
        <section id='projects'> <Projects /> </section>

    </>
  )
}

