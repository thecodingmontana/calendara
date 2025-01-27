// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxt/eslint'],
  future: {
    compatibilityVersion: 4,
  },
  eslint: {
    config: {
      stylistic: true
    }
  }
})