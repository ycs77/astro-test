declare module 'astro:my-plugin' {
  type AstroConfig = import('astro').AstroConfig

  export const message: string
  export const i18n: AstroConfig['i18n']
}
