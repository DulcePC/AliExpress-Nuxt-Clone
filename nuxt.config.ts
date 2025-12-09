// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/supabase',
    '@nuxt/ui',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@unlok-co/nuxt-stripe'
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK || '',
    }
  },
})