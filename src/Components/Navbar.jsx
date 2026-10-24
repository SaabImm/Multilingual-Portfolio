import { useState, useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import { useDarkMode } from '../Context/contexts';
import { useLangueContext } from '../Context/contexts';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar({ lang }) {
  const { isDark, toggleDark } = useDarkMode();
  const { language, toggleLang } = useLangueContext();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: lang.navbar.home },
    { href: "#services", label: lang.navbar.services },
    { href: "#projects", label: lang.navbar.projects },
    { href: "#skills", label: lang.navbar.skills },
    { href: "#about", label: lang.navbar.about },
    { href: "#contact", label: lang.navbar.contact },
  ];

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      scrolled
        ? isDark
          ? 'bg-black/80 backdrop-blur-xl shadow-lg'
          : 'bg-white/80 backdrop-blur-xl shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <a href="/" className={`font-[Aclonica] text-2xl md:text-3xl transition-colors ${
          isDark ? 'text-white hover:text-[#ff0000]' : 'text-gray-900 hover:text-[#cc0000]'
        }`}>
          B.S
        </a>

        <div className="hidden lg:flex items-center gap-8 font-[Aclonica] text-sm">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`relative group transition-colors ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff0000] group-hover:w-full transition-all duration-300`}></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDark}
            className={`text-xl transition-colors ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-label={lang.navbar.toggleTheme}
          >
            <CgDarkMode />
          </button>

          <button
            onClick={toggleLang}
            aria-label={lang.navbar.toggleLang}
            className={`text-xs font-semibold transition-colors uppercase px-2 py-1 border rounded ${
              isDark
                ? 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500'
                : 'text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-500'
            }`}
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>

          <button
            onClick={toggleMenu}
            className={`lg:hidden text-2xl transition-colors ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-label={lang.navbar.toggleMenu}
            aria-expanded={open}
          >
            {open ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`lg:hidden border-t ${
          isDark
            ? 'bg-black/95 backdrop-blur-xl border-white/10'
            : 'bg-white/95 backdrop-blur-xl border-gray-200/50'
        }`}>
          <ul className="flex flex-col items-center py-6 space-y-4 font-[Aclonica] text-sm">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-[#ff0000]'
                      : 'text-gray-600 hover:text-[#cc0000]'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}