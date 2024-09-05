// const apiBaseUrl = 'http://localhost:3002'
// const apiBaseUrl = "https://movies-proxy.vercel.app";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-swiper",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "@sidebase/nuxt-auth",
  ],
  css: ["~/assets/scss/main.scss"],
  experimental: {
    viewTransition: true,
  },
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
  // routeRules: {
  //   "/**":
  //     process.env.NODE_ENV === "development"
  //       ? {
  //           cache: false,
  //         }
  //       : {
  //           cache: {
  //             swr: true,
  //             maxAge: 120,
  //             staleMaxAge: 60,
  //             headersOnly: true,
  //           },
  //           cors: true,
  //         },
  //   // TODO: enable when Nitro on Vercel missing query bug is fixed
  //   // '/tmdb/**': { swr: true },
  // },
  runtimeConfig: {
    tmdb: {
      apiKey: process.env.TMDB_API_KEY || "",
    },
    public: {
      apiBaseUrl: process.env.NUXT_BASE_URL,
    },
  },
  image: {
    provider: "proxy",
    providers: {
      proxy: {
        provider: "ipx",
        options: {
          baseURL: `${process.env.NUXT_BASE_URL}/ipx`,
        },
      },
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
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    classSuffix: "",
  },
  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: "NUXT_BASE_URL",
    baseURL: `${process.env.NUXT_BASE_URL}/api/auth`,
    provider: {
      type: "authjs",
      trustHost: false,
      defaultProvider: "github",
      addDefaultCallbackUrl: true,
    },
    sessionRefresh: {
      enablePeriodically: 10000,
      enableOnWindowFocus: true,
    },
    // globalAppMiddleware: false,
  },
});
