import en from '../lang/en-US';
import ru from '../lang/ru-RU';

export const I18N = {
  defaultLocale: 'en',
  langDir: 'lang/',
  lazy: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    alwaysRedirect: true,
    fallbackLocale: 'en',
    onlyOnRoot: true,
  },
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en-US.js',
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Русский',
      file: 'ru-RU.js',
    },
  ],
  routes: {
    about: {
      ru: '/о-нас',
      en: '/about-us',
    },
    posts: {
      ru: '/статьи',
    },
    'post/_id': {
      ru: '/статьи/:id?',
    },
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ru },
  },
};
