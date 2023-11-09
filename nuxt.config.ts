// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  app: {
    head: {
      title: "Boyx | ",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  nitro: {
    devProxy: {
      "/api/": {
        target: "http://localhost:8000",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
});
