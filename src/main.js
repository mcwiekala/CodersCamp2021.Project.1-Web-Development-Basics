import sheet from './style.css' assert { type: 'css' };
import Footer from "./footer.js";
document.adoptedStyleSheets = [sheet];
import './header.css';
import Header from './header';
new Header();
document.querySelector('#app').innerHTML = `
  <h1>Hello Vites</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
customElements.define('footer-component', Footer);