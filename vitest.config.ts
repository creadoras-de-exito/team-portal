import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    globals: true,

    // default to nuxt environment
    environment: 'nuxt',

    include: ['tests/unit/**/*.{test,spec}.ts', 'tests/nuxt/**/*.{test,spec}.ts'],

    exclude: ['tests/e2e/**', '**/node_modules/**'],

    // Fall back to node environment for specific tests
    environmentMatchGlobs: [['tests/unit/**', 'node']],

    setupFiles: ['./tests/setup.ts']
  }
})
