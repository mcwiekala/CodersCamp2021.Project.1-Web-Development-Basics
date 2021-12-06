const {resolve} = require("path");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about:resolve(__dirname, "about/index.html")
      },
    }
  }
})