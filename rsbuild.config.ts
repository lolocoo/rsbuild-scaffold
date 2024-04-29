import { defineConfig } from '@rsbuild/core'
import { pluginEslint } from '@rsbuild/plugin-eslint'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSvgr } from '@rsbuild/plugin-svgr'
import path from 'node:path'

// import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack'

export default defineConfig({
  dev: {
    progressBar: true,
  },

  html: {
    title: 'Frontend Intelligent Base Platform',
    favicon: './public/favicon.ico',
  },

  source: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  tools: {
    // rspack: (config, { appendPlugins }) => {},
  },

  plugins: [pluginReact(), pluginEslint(), pluginSvgr()],
})
