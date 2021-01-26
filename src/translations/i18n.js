import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TRANSLATIONS_FR from '../../public/locales/fr/translation.json';
import TRANSLATIONS_TH from '../../public/locales/th/translation.json';
import TRANSLATIONS_EN from '../../public/locales/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: TRANSLATIONS_EN,
    },
    fr: {
      translation: TRANSLATIONS_FR,
    },
    th: {
      translation: TRANSLATIONS_TH,
    },
  },

  lng: 'en',
  fallbackLng: 'en',
  whitelist: ['en', 'th', 'fr'],
});

export default i18n;
