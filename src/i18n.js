import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const detectorOption = {
  // order and from where user language should be detected
  order: ['querystring', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: '/', sameSite: 'strict' },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      'en-US': {
        translations: {
          'top.news.title': 'Top news from {{country}}',

          'Great Britain': 'Great Britain',
          'United States of America': 'United States of America',

          'Back to list': 'Back to list',
          More: 'More',

          'links.topnews': 'Top News',
          'links.categories': 'Categories',
          'links.search': 'Search',

          'categories.title': 'TOP News by categories',
          'categories.business': 'Business',
          'categories.entertainment': 'Entertainment',
          'categories.general': 'General',
          'categories.health': 'Health',
          'categories.science': 'Science',
          'categories.sports': 'Sport',
          'categories.technology': 'Technology',
        },
      },
      'sr-RS': {
        translations: {
          'top.news.title': 'Top vijesti iz {{country}}',

          'Great Britain': 'Velika Britanija',
          'United States of America': 'Sjedinjene Americke Drzave',

          'Back to list': 'Nazad na listu',
          More: 'Vise',

          'links.topnews': 'Top Vijesti',
          'links.categories': 'Kategorije',
          'links.search': 'Pretraga',

          'categories.title': 'TOP vijesti po kategorijama',
          'categories.business': 'Biznis',
          'categories.entertainment': 'Zabava',
          'categories.general': 'Opste',
          'categories.health': 'Zdravlje',
          'categories.science': 'Nauka',
          'categories.sports': 'Sport',
          'categories.technology': 'Tehnologija',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    detection: detectorOption,
    react: {
      wait: true,
    },
  });

export default i18n;
