import ycs77 from '@ycs77/eslint-config'
import { GLOB_ASTRO, GLOB_ASTRO_TS } from '@antfu/eslint-config'

export default ycs77({
  astro: true,
  typescript: true,
  vue: true,
})
  .append({
    files: [GLOB_ASTRO, GLOB_ASTRO_TS],
    rules: {
      'no-console': 'off',
      'prefer-arrow-callback': 'off',
    },
  })
