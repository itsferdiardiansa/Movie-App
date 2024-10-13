import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      include: ['**/__tests__/**/*.ts'],
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: './vitest.setup.ts',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
        include: ['src/components/**/*.ts', 'src/utils/**/*.ts'],
        exclude: [
          '**/__tests__/**',
          '**/*.stories.{ts,js}',
          '**/*.js',
          'node_modules/**',
        ],
        all: true,
        clean: true,
      },
    },
  })
)
