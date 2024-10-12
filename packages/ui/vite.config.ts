import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'
import sassDts from 'vite-plugin-sass-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  css: {},
  assetsInclude: ['/sb-preview/runtime.js'],
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    dts({
      insertTypesEntry: true,
    }),
    sassDts(),
    cssInjectedByJsPlugin(),
    typescript2({
      check: false,
      include: ['src/components/**/*.vue'],
      exclude: ['vite.config.ts'],
    }),
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'main',
      formats: ['es', 'cjs'],
      fileName: format => (format == 'es' ? 'main.js' : 'main.cjs'),
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.ts'),
      },
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
