
const { resolve } = require('path')
import { defineConfig } from 'vite'
const path = require('path')

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

module.exports = defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'pages/developersGuide', 'developers-guide.html'),
        // privacy: resolve(root, 'privacy', 'index.html') 
      }
    }
  }
})