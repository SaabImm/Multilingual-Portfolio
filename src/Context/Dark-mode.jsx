import { useEffect, useState } from "react";
import { DarkModeContext, readPref, writePref } from "./contexts";

// Saved choice first, then the visitor's OS setting.
function initialTheme() {
  const saved = readPref("theme");
  if (saved) return saved === "dark";
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(initialTheme);

  // Add/remove `.dark` class from <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    writePref("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark: () => setIsDark(prev => !prev) }}>
      {children}
    </DarkModeContext.Provider>
  );
}
