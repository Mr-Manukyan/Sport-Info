import React, { useState, createContext } from 'react'
import { DictionaryListLanguageType, LanguageOptionsType } from '../Languages/language'
import { languageOptions, dictionaryList, DictionaryListType } from '../Languages/language.ts'





type ProviderType = {
  languageFlag : string
  dictionary: DictionaryListType
  languageChange: (selected:string,flag:string) => void
}

export type LanguageContextType = {
  language : string
  dictionary : DictionaryListType
  languageFlag : string
}

// create the language context with default selected language
const defaultContext:LanguageContextType = {
  language: 'arm',
  dictionary: dictionaryList.arm,
  languageFlag : languageOptions.arm 
}

console.log('dictionaryList',dictionaryList.arm)
console.log('languageOptions', languageOptions.arm)

export const LanguageContext = createContext(defaultContext)

// it provides the language context to app
export const LanguageProvider:React.FC = React.memo(({ children }) => {

  const defaultLanguage = window.localStorage.getItem('lang')
  const defaultLanguageFlag = window.localStorage.getItem('flag')
  const [language, setLanguage] = useState(defaultLanguage || 'arm')
  const [languageFlag,setLanguageFlag] = useState(defaultLanguageFlag || languageOptions.arm)




  const provider:ProviderType = {
    languageFlag : languageFlag,
    dictionary: dictionaryList[language],
    languageChange: (selected : string,flag : string) => {
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

