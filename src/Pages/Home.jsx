import { useEffect, useRef } from 'react';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import { useDarkMode } from '../Context/contexts';

export default function Home({ lang }) {
  const { isDark } = useDarkMode();
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden px-4 transition-colors duration-300 ${
      isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      {/* Background orbs - adapt colors */}
      <div className={`absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-3xl animate-pulse ${
        isDark ? 'bg-[#ff0000]/10' : 'bg-[#ff0000]/20'
      }`}></div>
      <div className={`absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full blur-3xl animate-pulse delay-1000 ${
        isDark ? 'bg-purple-500/10' : 'bg-purple-300/30'
      }`}></div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={textRef}>
        <div className="text-center md:text-left">
          {/* Badge */}
          <div className={`inline-block px-4 py-1 mb-6 text-xs font-mono tracking-wider border rounded-full backdrop-blur-sm ${
            isDark
              ? 'text-[#ff0000] border-[#ff0000]/30 bg-[#ff0000]/10'
              : 'text-[#cc0000] border-[#cc0000]/30 bg-[#cc0000]/10'
          }`}>
            {lang.home.badge}
          </div>

          <h1 className="font-[Aclonica] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              {lang.home.title1}
            </span>
            <br />
            <span className="relative inline-block">
              <span className={`relative z-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {lang.home.title2}
              </span>
              <span className={`absolute bottom-2 left-0 w-full h-3 -z-0 transform -rotate-1 ${
                isDark ? 'bg-[#ff0000]/30' : 'bg-[#ff0000]/20'
              }`}></span>
            </span>
            <br />
            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
              {lang.home.title3}
            </span>
          </h1>

          <p className={`mt-6 text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {lang.home.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 text-sm font-semibold text-white bg-[#ff0000] rounded-full hover:bg-[#ff0000]/80 transition-all duration-300 shadow-lg shadow-[#ff0000]/25 hover:shadow-[#ff0000]/50 hover:scale-105"
            >
              {lang.home.cta}
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'text-gray-300 border border-gray-700 hover:bg-white/5 hover:border-[#ff0000]'
                  : 'text-gray-700 border border-gray-300 hover:bg-gray-100 hover:border-[#cc0000]'
              }`}
            >
              {lang.home.cta2}
            </a>
            {lang.home.cvFile && (
              <a
                href={lang.home.cvFile}
                download
                className={`inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'text-gray-300 border border-gray-700 hover:bg-white/5 hover:border-[#ff0000]'
                    : 'text-gray-700 border border-gray-300 hover:bg-gray-100 hover:border-[#cc0000]'
                }`}
              >
                <FaDownload className="text-xs" /> {lang.home.cv}
              </a>
            )}
          </div>

          <div className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
            <span className={`text-xs uppercase tracking-widest ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`}>{lang.home.scroll}</span>
            <FaArrowDown className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
          </div>
        </div>
      </div>
    </div>
  );
}