import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../locals/en/translation.json";
import ar from "../locals/ar/translation.json";
import he from "../locals/he/translation.json";
import ru from "../locals/ru/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      he: { translation: he },
      ru: { translation: ru }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
