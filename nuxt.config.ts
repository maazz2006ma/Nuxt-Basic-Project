// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/')
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-mongoose', 'nuxt-server-utils',
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
    
  },
})