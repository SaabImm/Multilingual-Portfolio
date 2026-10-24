import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import About from './Pages/AboutMe';
import Contact from './Pages/ContactMe';
import { useLangueContext, useDarkMode } from './Context/contexts';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const { isDark } = useDarkMode(); // ← Get dark mode state
  const { t } = useLangueContext();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    // This wrapper controls the entire page background
    <div
      className={`min-h-screen transition-colors duration-500 ease-in-out ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Navbar lang={t} />

      {/* Sections with NO padding between them */}
      <section id="home">
        <Home lang={t} />
      </section>
      <section id="projects">
        <Projects lang={t} />
      </section>
      <section id="skills">
        <Skills lang={t} />
      </section>
      <section id="about">
        <About lang={t} />
      </section>
      <section id="contact">
        <Contact lang={t} />
      </section>
    </div>
  );
}