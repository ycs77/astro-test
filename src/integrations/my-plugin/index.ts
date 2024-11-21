import type { AstroIntegration, AstroConfig } from 'astro'
import type { Plugin, UserConfig } from 'vite'

interface MyPluginContext {
  config: AstroConfig
}

const VIRTUAL_MODULE_ID = 'astro:my-plugin'
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`

function myVitePlugin(astroConfig: AstroConfig): Plugin {
  const { i18n } = astroConfig

  return {
    name: 'my-vite-plugin',
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOLVED_VIRTUAL_MODULE_ID
      }
    },
    load(id) {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        return `
          export const message = 'Hello from my-vite-plugin!'

          export const i18n = ${JSON.stringify(i18n)}
        `
      }
    },
  }
}

function getViteConfig({ config }: MyPluginContext): UserConfig {
  return {
    plugins: [myVitePlugin(config)],
  }
}

export default function (): AstroIntegration {
  return {
    name: 'my-plugin',
		hooks: {
			'astro:config:setup': ({ config, updateConfig }) => {
        updateConfig({
          vite: getViteConfig({ config }),
        })
      },
    },
  }
}
