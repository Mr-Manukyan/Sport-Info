import React, { useState, createContext } from 'react'
import { languageOptions, dictionaryList } from '../Languages/index'

// create the language context with default selected language
export const LanguageContext = createContext({
  language: 'arm',
  dictionary: dictionaryList.arm,
  languageFlag : languageOptions.arm
});

// it provides the language context to app
export const LanguageProvider = React.memo(({ children }) => {
  const defaultLanguage = window.localStorage.getItem('lang')
  const defaultLanguageFlag = window.localStorage.getItem('flag')
  const [language, setLanguage] = useState(defaultLanguage || 'arm')
  const [languageFlag,setLanguageFlag] = useState(defaultLanguageFlag || languageOptions.arm)


  const provider = {
    languageFlag,
    dictionary: dictionaryList[language],
    languageChange: (selected,flag) => {
      const newLanguage = languageOptions[selected] ? selected : 'arm'
      setLanguage(newLanguage);
      window.localStorage.setItem('lang', newLanguage)
      window.localStorage.setItem('flag',flag)
      setLanguageFlag(flag)
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
})

