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
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET
  },
  modules: [
    'nuxt-mongoose', 'nuxt-server-utils', '@sidebase/nuxt-auth'
  ],
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
        type: 'authjs'
    }
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    modelsDir: 'models',
    devtools: true,
  },
  nuxtServerUtils:{
    mongodbUri: process.env.MONGODB_URI
  }
})