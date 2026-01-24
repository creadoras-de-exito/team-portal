import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'
import { defineVitestProject } from '@nuxt/test-utils/config'

export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./app', import.meta.url)),
      '@': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  test: {
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    projects: [
      defineVitestProject({
        test: {
          name: 'nuxt',
          environment: 'nuxt',
          globals: true,
          setupFiles: ['./tests/setup.ts'],
          include: ['tests/nuxt/**/*.{test,spec}.ts'],
          exclude: ['tests/e2e/**']
        }
      }),
      defineVitestProject({
        test: {
          name: 'unit',
          environment: 'node',
          globals: true,
          setupFiles: ['./tests/setup.ts'],
          include: ['tests/unit/**/*.{test,spec}.ts'],
          exclude: ['tests/nuxt/**', 'tests/e2e/**']
        }
      })
    ]
  }
})
