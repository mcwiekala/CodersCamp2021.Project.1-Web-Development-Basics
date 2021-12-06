const {resolve} = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about:resolve(__dirname, "about/index.html")
      },
    }
  }
}