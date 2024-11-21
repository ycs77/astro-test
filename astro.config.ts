import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import vue from '@astrojs/vue'
import myPlugin from './src/integrations/my-plugin'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    vue(),
    myPlugin(),
  ],
  i18n: {
    locales: ['en', 'zh-tw'],
    defaultLocale: 'en',
  },
})
