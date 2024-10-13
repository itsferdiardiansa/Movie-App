import { dirname, join } from 'path'
import type { StorybookConfig } from '@storybook/vue3-vite'

import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {},
  },
  viteFinal: async config => {
    const vueDocgenIndex = config.plugins.findIndex(
      ({ name }: any) => name === 'storybook:vue-docgen-plugin'
    )
    if (vueDocgenIndex !== -1) config.plugins.splice(vueDocgenIndex, 1)

    return mergeConfig(config, {})
  },
  docs: {},
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
