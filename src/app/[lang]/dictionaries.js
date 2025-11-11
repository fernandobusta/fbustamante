import 'server-only'

const supportedLocales = ['en', 'es', 'fr', 'vi']
const defaultLocale = 'en'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  vi: () => import('./dictionaries/vi.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  // 🎯 FIX: Validate the locale before attempting to access the dictionary function.
  const finalLocale = supportedLocales.includes(locale) ? locale : defaultLocale

  return dictionaries[finalLocale]()
}
