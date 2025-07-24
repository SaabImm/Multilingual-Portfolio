import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export  function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  // Add/remove `.dark` class from <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark: () => setIsDark(prev => !prev) }}>
      {children}
    </DarkModeContext.Provider>
  );
}
export function useDarkMode() {
  return useContext(DarkModeContext);
}