import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import en from './en.json';
import nl from './nl.json';

export const languages = {
	en: {
		name: 'English',
	},
	nl: {
		name: 'Nederlands',
	}
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en,
			nl
		},
		fallbackLng: "en",
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		}
	});

export default i18n;