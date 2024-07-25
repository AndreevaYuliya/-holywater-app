import i18n from 'i18next'

import { initReactI18next } from 'react-i18next'

import dictionaries from './dictionaries'

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: dictionaries,
});

export default i18n;