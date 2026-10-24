import { useEffect, useState } from "react";
import { LanguageContext, readPref, writePref } from "./contexts";
import en from '../Translations/en.json'
import fr from '../Translations/fr.json'

const dictionaries = { en, fr };

// Saved choice first, then the browser language.
function initialLanguage() {
  const saved = readPref("lang");
  if (saved in dictionaries) return saved;
  return navigator.language?.startsWith("fr") ? "fr" : "en";
}

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);

  const toggleLang = () => setLanguage(prev => (prev === "en" ? "fr" : "en"));

  useEffect(() => {
    document.documentElement.lang = language;
    writePref("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLang, t: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}
