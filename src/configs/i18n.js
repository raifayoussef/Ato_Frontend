import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import navigation from 'src/navigation/vertical'

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to my app',
      navigation: navigation().map(item => item.title)
    }
  },
  ar: {
    translation: {
      welcome: 'مرحبًا بك في تطبيقي',
      navigation: navigation().map(item => item.titleAr)
    }
  }
}
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
