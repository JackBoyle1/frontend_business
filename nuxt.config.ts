// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Boyx | ",
      meta: [
        {
          hid: "Boyx",
          name: "Boyx",
          content: "Your Partner in Web Development",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-simple-sitemap",
    "nuxt-og-image",
    [
      "@nuxtjs/robots",
      {
        rules: {
          UserAgent: "*",
          Disallow: "/thankyou",
          Allow: "*",
        },
      },
    ],
  ],
});
