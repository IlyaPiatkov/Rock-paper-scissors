import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

export const languages = ["en", "ru", "ua"]

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      en_US: ["en"],
      ru_RU: ["ru"],
      uk_UA: ["ua"],
      default: ["en"]
    },
    debug: true,
    whiteList: languages,
    load: "languageOnly",
    ns: ["common"],
    defaultNS: "common",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    }
  })

// eslint-disable-next-line import/no-default-export
export default i18n
export { i18n }
