import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from "@/locales/en.json"
import esJSON from "@/locales/es.json"
import deJSON from "@/locales/de.json"


i18n
   .use(initReactI18next)
   .init({
      resources: {
         en: {...enJSON},
         es: {...esJSON},
         de: {...deJSON},
      }, // Where we're gonna put translations' files
      lng: "en",     // Set the initial language of the App

});