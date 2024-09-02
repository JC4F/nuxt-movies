// const apiBaseUrl = 'http://localhost:3001'
const apiBaseUrl = "https://movies-proxy.vercel.app";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/html-validator",
    "@nuxt/eslint",
  ],
  css: ["~/assets/scss/main.scss"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: ".",
      },
    },
  },
  routeRules: {
    "/**": { cors: true },
    // TODO: enable when Nitro on Vercel missing query bug is fixed
    // '/tmdb/**': { swr: true },
  },
  runtimeConfig: {
    tmdb: {
      apiKey: process.env.TMDB_API_KEY || "",
    },
    public: {
      apiBaseUrl,
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "en",
    },
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "de-DE",
        name: "Deutsch",
        file: "de-DE.json",
      },
      {
        code: "es-ES",
        name: "Español",
        file: "es-ES.json",
      },
      {
        code: "it",
        name: "Italiano",
        file: "it.json",
      },
      {
        code: "ja",
        name: "日本語",
        file: "ja.json",
      },
      {
        code: "zh-CN",
        name: "简体中文",
        file: "zh-CN.json",
      },
      {
        code: "pt-PT",
        name: "Português",
        file: "pt-PT.json",
      },
      {
        code: "pt-BR",
        name: "Português do Brasil",
        file: "pt-BR.json",
      },
      {
        code: "ru-RU",
        name: "Русский",
        file: "ru-RU.json",
      },
      {
        code: "fr-FR",
        name: "Français",
        file: "fr-FR.json",
      },
      {
        code: "uk-UA",
        name: "Українська",
        file: "uk-UA.json",
      },
    ],
    lazy: true,
    langDir: "internationalization",
    defaultLocale: "en",
  },
  htmlValidator: {
    usePrettier: false,
    logLevel: "verbose",
    failOnError: false,
    /** A list of routes to ignore (that is, not check validity for). */
    ignore: [/\.(xml|rss|json)$/],
    options: {
      extends: [
        "html-validate:document",
        "html-validate:recommended",
        "html-validate:standard",
      ],
      rules: {
        "svg-focusable": "off",
        "no-unknown-elements": "error",
        // Conflicts or not needed as we use prettier formatting
        "void-style": "off",
        "no-trailing-whitespace": "off",
        // Conflict with Nuxt defaults
        "require-sri": "off",
        "attribute-boolean-style": "off",
        "doctype-style": "off",
        // Unreasonable rule
        "no-inline-style": "off",
      },
    },
  },
});
