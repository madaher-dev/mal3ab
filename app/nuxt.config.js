export default {
  head: {
    title: 'Al Ma3mal | المعمل',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss'],

  modules: [
    '@nuxtjs/strapi',
    'nuxt-i18n',
    '@nuxtjs/markdownit',
    '@nuxtjs/moment',
  ],

  strapi: {
    url: process.env.STRAPI_URL,
    entities: [
      {
        name: 'chapters',
        type: 'collection',
      },
      {
        name: 'questions',
        type: 'collection',
      },
      {
        name: 'answers',
        type: 'collection',
      },
      {
        name: 'discussions',
        type: 'collection',
      },
      {
        name: 'replies',
        type: 'collection',
      },
      {
        name: 'comments',
        type: 'collection',
      },
      {
        name: 'users',
        type: 'collection',
      },
    ],
  },

  i18n: {
    locales: [
      {
        code: 'ar',
        iso: 'ar',
        name: 'ع',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'En',
      },
    ],
    defaultLocale: 'ar',
    noPrefixDefaultLocale: true,
    vueI18n: {
      fallbackLocale: 'ar',
      messages: {
        ar: require('./locales/ar.json'),
        en: require('./locales/en.json'),
      },
    },
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },

  build: {},
}
