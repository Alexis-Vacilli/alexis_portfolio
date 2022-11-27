import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
// import App from './App'



i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'fr'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['cookie', 'path', 'htmlTag'],
      caches: ['cookie'],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json"
    },

   

    // resources: {
    //   en: {
    //     translation: {
    //       "welcome message": "Welcome"
    //     }
    //   },
    //   fr: {
    //     translation: {
    //       "welcome message": "Bienvenue"
    //     }
    //   }
    // }
  })

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)

function App(){
  const { t } = useTranslation();

  return <h2>{t("welcome message")}</h2>
}


ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
)
