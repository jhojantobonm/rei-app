import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "@/locales/en.json"
import esJSON from "@/locales/es.json"
import deJSON from "@/locales/de.json"
import LanguageDetector from "i18next-browser-languagedetector";
// import HttpBackend from "i18next-http-backend";


// i18n
//    .use(initReactI18next)
//    .init({
//       resources: {
//          en: {...enJSON},
//          es: {...esJSON},
//          de: {...deJSON},
//       }, // Where we're gonna put translations' files
//       lng: "en",     // Set the initial language of the App

// });

i18n

   .use(LanguageDetector) // Detects user language
   .use(initReactI18next) // React bindings
   .init({
      resources: {
         en: {...enJSON},
         es: {...esJSON},
         de: {...deJSON},
      },
      fallbackLng: "en", // Default language
      supportedLngs: ["en", "es","de"], // Define supported languages
      debug: true, // Set to false in production
      interpolation: {
      escapeValue: false, // React already escapes values
      },
      // backend: {
      // loadPath: "/src/locales/{{lng}}.json", // Translation files location
      // },
      detection: {
      order: ["localStorage", "navigator"], // Check stored lang first, then browser lang
      caches: ["localStorage"], // Store the selected language
      },
   });

// export default i18n;