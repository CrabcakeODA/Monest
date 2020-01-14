import i18n from 'i18next';
import { reactI18nextModule } from "react-i18next";
import en from 'locales/en/translation.json';
import zh from 'locales/zh/translation.json';

const resources = {
  'en': {
    translation: en,
  },
  'zh': {
    translation: zh,
  }
};

i18n.use(reactI18nextModule).init({
  resources,
  lng: 'en',             
  fallbackLng: 'en',     // use en if detected lng is not available
  keySeparator: false,  //// we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;