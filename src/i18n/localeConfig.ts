'use client';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enCommon from '@i18n/locales/en/common';
import srCommon from '@i18n/locales/sr/common';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      sr: {common: srCommon},
      en: {common: enCommon},
    },
    fallbackLng: 'sr',
    supportedLngs: ['sr', 'en'],
    missingKeyNoValueFallbackToKey: true,
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {escapeValue: false},
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
