// nuxt-env.d.ts
interface MongooseConfig {
  uri: string;
  options: Record<string, unknown>; // Adjust the type of options as needed
  modelsDir?: string;
}

interface NuxtConfig {
  mongoose?: MongooseConfig;
}

declare module 'nuxt' {
  interface InputConfig extends NuxtConfig {}
}

declare module 'nuxt' {
  interface NuxtConfig {
    buildModules?: string[];
  }
}