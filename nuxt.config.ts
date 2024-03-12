// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/')
  },
  typescript: {
    typeCheck: true,
  },
  app:{
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' }
      ]
    }
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
    'nuxt-mongoose', 'nuxt-server-utils', '@sidebase/nuxt-auth',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
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