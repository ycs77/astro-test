import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import vue from '@astrojs/vue'

export default defineConfig({
  adapter: vercel(),
  integrations: [vue()],
})
