import { createContext, useContext, useEffect, useState } from "react";
import en from '../Translations/en.json'
import fr from '../Translations/fr.json'


const LanguageContext = createContext();

export function TranslationProvider({children}){
    const [language, setLanguage] = useState("en")
    const [t, setT] = useState(en)

    const toggleLang = () => {
        if (language=="en") {
            setLanguage("fr")
        }
        else {setLanguage("en")}

    }

      useEffect(() => {
    if (language === "fr") {
      setT(fr);
    } else {
      setT(en);
    }
  }, [language]);
  
    console.log(t)

    return(
    <LanguageContext.Provider value={{ language,toggleLang,t }}>
      {children}
    </LanguageContext.Provider>
    );
}

export function useLangueContext() {
  return useContext(LanguageContext);
}