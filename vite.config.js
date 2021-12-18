import { defineConfig } from 'vite';

const { resolve } = require('path');

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

module.exports = defineConfig({
  base: '/CodersCamp2021.Project.Web-Development-Basics/',
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        developersGuide: resolve(
          root,
          'pages',
          'developers-guide',
          'index.html',
        ),
        films: resolve(
          root,
          'pages',
          'films',
          'index.html',
        ),
      },
    },
  },
});
