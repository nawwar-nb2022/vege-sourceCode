import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

import ar from "./data/ar.json"
import en from "./data/en.json"
const resources = {
  en: {
    translation:en
  },
  ar: {
    translation:ar
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    },
    react :{
        useSuspense:false
    }
  });

  export default i18n;