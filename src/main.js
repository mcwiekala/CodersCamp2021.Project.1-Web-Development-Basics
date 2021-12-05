import sheet from './style.css' assert { type: 'css' };
import Footer from "./footer.js";
document.adoptedStyleSheets = [sheet];
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
customElements.define('footer-component', Footer);